// "use client"

// hooks
import { useState } from "react";

// email sending
import emailjs from "@emailjs/browser";

// env
import { env } from "~/env.mjs";

// components
import Image from "next/image";

// assets
import {
    EnvelopeIcon,
    DocumentDuplicateIcon,
    ExclamationTriangleIcon,
    CheckCircleIcon,
    UserIcon,
    PaperAirplaneIcon,
} from "@heroicons/react/24/solid";
import GuySkiing from "~/assets/images/guySkiing.png";

// ui
import LoadingSpinner from "~/components/LoadingSpinner";

// form
import Input from "~/components/Input";
import TextArea from "~/components/TextArea";
import Button from "~/components/Button";

// validation
import { z } from "zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

// how to create form with react hook form and zod
// https://www.youtube.com/watch?v=4zt1eadehKQ

const ContactFormSchema = {
    name: z.string().min(1, { message: "Name is required" }),
    email: z
        .string()
        .min(1, { message: "Email is required" })
        .email({ message: "Email is invalid" }),
    message: z.string().min(1, { message: "Message is required" }),
};

const ZodContactFormSchema = z.object(ContactFormSchema);

// allows us to use zod with typescript
type ContactFormSchemaType = z.infer<typeof ZodContactFormSchema>;

interface ContactProps {}

const Contact = ({}: ContactProps) => {
    const [loadingState, setLoadingState] = useState<
        "idle" | "loading" | "complete"
    >("idle");

    const {
        register,
        watch,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset,
    } = useForm<ContactFormSchemaType>({
        resolver: zodResolver(ZodContactFormSchema),
        defaultValues: {
            name: "",
            email: "",
            message: "",
        },
    });

    const submitContactForm: SubmitHandler<ContactFormSchemaType> = async (
        data
    ) => {
        // preventing multiple submissions, when a submission is in progress
        if (isSubmitting) {
            return;
        }

        // ensuring data to send matches the the names using in the emailJS template
        const DATA_TO_SEND = {
            contact_name: data.name,
            contact_email: data.email,
            contact_message: data.message,
        };

        // sending email using the environment variables
        const response = await emailjs.send(
            env.NEXT_PUBLIC_EMAIL_JS_SERVICE_ID,
            env.NEXT_PUBLIC_EMAIL_JS_TEMPLATE_ID,
            DATA_TO_SEND,
            env.NEXT_PUBLIC_EMAIL_JS_PUBLIC_KEY
        );

        // ensuring message is sent
        if (response.text === "OK") {
            console.log("message has been sent");
            reset();
            // add notification when email is sent
        } else {
            console.log("An Error occured", response);
            // add notication when email cannot be send
        }
    };

    const inputErrorState = (name: keyof ContactFormSchemaType) => {
        // finds the current error state of an input while user is typing
        // we use these error states to influence the ui

        if (errors[name]?.message) {
            return "error";
        }

        // parsing the input against the schema
        if (ContactFormSchema[name].safeParse(watch(name)).success) {
            return "valid";
        }

        return "none";
    };

    const IconRightClassNamesToUse = (name: keyof ContactFormSchemaType) => {
        switch (inputErrorState(name)) {
            case "error":
                return "text-red-500 dark:text-red-400";
            case "valid":
                return "text-emerald-500 dark:text-emerald-400";
            default:
                return "";
        }
    };

    const IconRightToUse = (name: keyof ContactFormSchemaType) => {
        switch (inputErrorState(name)) {
            case "error":
                return ExclamationTriangleIcon;
            case "valid":
                return CheckCircleIcon;
            default:
                return undefined;
        }
    };

    const FocusRingClassNamesToUse = (name: keyof ContactFormSchemaType) => {
        switch (inputErrorState(name)) {
            case "error":
                return "focus:ring-red-500 dark:focus:ring-red-500";
            case "valid":
                return "focus:ring-emerald-500 dark:focus:ring-emerald-500";
            default:
                return "focus:ring-blue-600 dark:focus:ring-blue-500";
        }
    };

    return (
        <div
            id="Contact"
            className="flex w-full max-w-lg flex-col justify-between gap-10 
            lg:max-w-5xl lg:flex-row lg:gap-20"
        >
            <div className="lg flex flex-col  gap-10">
                <div className="flex flex-col gap-3">
                    <span className="text-lg font-bold">
                        Got a problem that needs solving?
                    </span>
                    <p className="text-slate-600 dark:text-slate-400">
                        Shoot me an email & lets talk
                    </p>

                    <div className="flex w-fit items-center gap-3">
                        <div className="flex items-center rounded-md bg-slate-300 px-3 dark:bg-slate-500">
                            <div className="mr-3 border-r border-slate-400 py-1.5 pr-2">
                                <EnvelopeIcon className="h-5 w-5" />
                            </div>

                            <span className="py-1.5">
                                athulgeorge37@gmail.com
                            </span>
                        </div>
                        <button
                            className="rounded-md bg-slate-300 p-2 outline-none 
                            focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2
                            focus-visible:ring-offset-slate-400 dark:bg-slate-500 
                            dark:focus-visible:ring-offset-slate-700 "
                            aria-label="copy email"
                            id="copy-email"
                            onClick={() => {
                                navigator.clipboard.writeText(
                                    "athulgeorge37@gmail.com"
                                );
                                setLoadingState("loading");
                                setTimeout(() => {
                                    setLoadingState("complete");
                                }, 600);

                                setTimeout(() => {
                                    setLoadingState("idle");
                                }, 1500);
                            }}
                        >
                            {loadingState === "loading" ? (
                                <LoadingSpinner />
                            ) : loadingState === "complete" ? (
                                <CheckCircleIcon className="h-5 w-5" />
                            ) : (
                                <DocumentDuplicateIcon className="h-5 w-5" />
                            )}
                        </button>
                    </div>
                </div>

                <Image
                    src={GuySkiing}
                    alt="guy skiing"
                    width={500}
                    height={500}
                    className="rounded-md"
                />
            </div>

            <form
                className="flex w-full flex-col gap-5 lg:max-w-lg"
                onSubmit={handleSubmit(submitContactForm)}
            >
                <Input
                    register={register("name")}
                    id="name"
                    ariaLabel="name input"
                    placeholder="Master Chief"
                    IconLeft={UserIcon}
                    IconRight={IconRightToUse("name")}
                    IconRightClassNames={`mr-3 h-5 w-5 
                    ${IconRightClassNamesToUse("name")}`}
                    disabled={isSubmitting}
                    label="name"
                    error={errors.name?.message}
                    className={`w-full rounded-md bg-slate-200 py-2 px-11 font-semibold shadow-sm ring-2 
                    ring-slate-200 placeholder:text-slate-400 focus:ring-blue-600 
                    disabled:bg-slate-300 disabled:text-slate-500 disabled:ring-slate-300 dark:bg-slate-500 
                    ${FocusRingClassNamesToUse("name")}  
                    dark:ring-slate-500 dark:placeholder:text-slate-400 dark:focus:ring-blue-500 
                    dark:disabled:bg-slate-600 dark:disabled:text-slate-300 dark:disabled:ring-slate-600`}
                />

                <Input
                    register={register("email")}
                    error={errors.email?.message}
                    disabled={isSubmitting}
                    id="email"
                    label="email"
                    ariaLabel="email input"
                    placeholder="your email"
                    IconLeft={EnvelopeIcon}
                    IconRight={IconRightToUse("email")}
                    IconRightClassNames={`mr-3 h-5 w-5 
                    ${IconRightClassNamesToUse("email")}`}
                    className={`w-full rounded-md 
                    bg-slate-200 py-2 px-11 font-semibold shadow-sm ring-2 
                    ring-slate-200 placeholder:text-slate-400 
                    disabled:bg-slate-300 disabled:text-slate-500 disabled:ring-slate-300
                    dark:bg-slate-500 dark:ring-slate-500 dark:placeholder:text-slate-400 
                    ${FocusRingClassNamesToUse("email")}
                    dark:disabled:bg-slate-600 dark:disabled:text-slate-300 
                    dark:disabled:ring-slate-600`}
                />

                <TextArea
                    register={register("message")}
                    error={errors.message?.message}
                    disabled={isSubmitting}
                    ariaLabel="message text area"
                    id="message"
                    label="message"
                    maxHeight={285}
                    minHeight={285}
                    IconRight={IconRightToUse("message")}
                    IconRightClassNames={`mr-3 mt-3 h-5 w-5 
                    ${IconRightClassNamesToUse("message")}`}
                    placeholder="I want to hire you"
                    className={`w-full rounded-md bg-slate-200 pl-3 
                    pr-11 pt-2 font-semibold shadow-sm ring-2 
                    ring-slate-200 placeholder:text-slate-400
                    disabled:bg-slate-300 disabled:text-slate-500 
                    disabled:ring-slate-300 dark:bg-slate-500 dark:ring-slate-500
                    ${FocusRingClassNamesToUse("message")}
                    dark:placeholder:text-slate-400 dark:disabled:bg-slate-600 
                    dark:disabled:text-slate-300 
                    dark:disabled:ring-slate-600`}
                />

                <div className="flex justify-end gap-2">
                    <Button
                        id="clear-contact"
                        ariaLabel="clear contact form"
                        onClick={() => {
                            reset();
                        }}
                        text="Clear"
                        disabled={isSubmitting}
                        className="w-fit bg-slate-200 dark:bg-slate-500"
                        ringClassNames="ring-blue-500 ring-offset-slate-400 dark:ring-offset-slate-700"
                    />

                    <Button
                        id="submit-contact"
                        ariaLabel="submit contact form"
                        onClick={() => {}}
                        text="Send"
                        type="submit"
                        disabled={isSubmitting}
                        IconRight={PaperAirplaneIcon}
                        className="w-fit bg-green-600 text-slate-200 dark:bg-emerald-500"
                        ringClassNames="ring-green-600 dark:ring-emerald-500 
                        ring-offset-slate-400 dark:ring-offset-slate-700"
                    />
                </div>
                {/* <pre
                // so we can see what the form currently holds
                >
                    {JSON.stringify(watch(), null, 2)}
                </pre> */}
            </form>
        </div>
    );
};

export default Contact;
