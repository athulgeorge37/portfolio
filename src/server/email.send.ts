import { Resend } from "resend";
import { env } from "~/env.mjs";

const resend = new Resend(env.RESEND_API_KEY);

type ResendSendEmailsParams = Parameters<typeof resend.emails.send>["0"];
type SendReact = ResendSendEmailsParams["react"];

interface SendEmailParams {
    to: ResendSendEmailsParams["to"];
    fromPrefix: string;
    subject: ResendSendEmailsParams["subject"];
    reactEmailTemplate: NonNullable<SendReact>;
}

const sendEmail = async ({
    to,
    fromPrefix,
    subject,
    reactEmailTemplate,
}: SendEmailParams) => {
    try {
        const emailResponse = await resend.emails.send({
            from: `${fromPrefix}@${env.EMAIL_DOMAIN}`,
            to: to,
            subject: subject,
            react: reactEmailTemplate,
        });

        // console.log({
        // 	emailResponseData: emailResponse.data,
        // });

        if (emailResponse.error !== null) {
            // console.log({
            // 	sendEmailError: emailResponse.error,
            // });

            return {
                success: false as const,
                message: "Could not send email." as const,
                cause: emailResponse.error,
            };
        }

        return {
            success: true as const,
            message: "Email successfully sent." as const,
        };
    } catch (error) {
        // console.log({ sendEmailError: error });

        return {
            success: false as const,
            message: "Could not send email." as const,
            cause: error,
        };
    }
};

export { sendEmail };
