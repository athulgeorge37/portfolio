import type { z } from "zod";
import type { ZodContactFormSchema } from "~/features/Contact";

type ContactMeEmailRequestEmailTemplateProps = z.infer<
    typeof ZodContactFormSchema
>;

const ContactMeEmailRequestEmailTemplate = ({
    email,
    name,
    message,
}: ContactMeEmailRequestEmailTemplateProps) => (
    <div>
        <h2>Hello, Athul George</h2>

        <p>
            You have a new contact me email request from your portfolio contact
            form.
        </p>

        <p>
            <span
                style={{
                    fontWeight: 600,
                }}
            >
                Name:{" "}
            </span>
            {name}
            <br />

            <span
                style={{
                    fontWeight: 600,
                }}
            >
                Email:{" "}
            </span>
            {email}
            <br />

            <span
                style={{
                    fontWeight: 600,
                }}
            >
                Message:{" "}
            </span>
            {message}
            <br />
        </p>

        <p>
            Sincerely,
            <br />
            Your portfolio send email api endpoint
        </p>
    </div>
);

export { ContactMeEmailRequestEmailTemplate };
