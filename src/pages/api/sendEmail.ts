import type { NextApiRequest, NextApiResponse } from "next";

import { env } from "~/env.mjs";
import { ZodContactFormSchema } from "~/features/ContactMeForm";
import { ContactMeEmailRequestEmailTemplate } from "~/server/ContactMeEmailRequestEmailTemplate";
import { sendEmail } from "~/server/email.send";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method !== "POST") {
        return res.status(405).json({
            success: false,
            message: "Must be a POST request.",
            cause: undefined,
        });
    }

    const result = ZodContactFormSchema.safeParse(req.body);

    if (result.success === false) {
        return res.status(400).json({
            success: false,
            message: "Invalid request body.",
            cause: undefined,
        });
    }

    const emailResponse = await sendEmail({
        to: env.SEND_EMAIL_TO,
        fromPrefix: "portfolio",
        subject: "Contact Me request from Portfolio",
        reactEmailTemplate: ContactMeEmailRequestEmailTemplate({
            email: result.data.email,
            name: result.data.name,
            message: result.data.message,
        }),
    });

    return res.status(emailResponse.success ? 200 : 500).json({
        success: emailResponse.success,
        message: emailResponse.success
            ? "Message successfully sent."
            : "Could not send message.",
    });
}
