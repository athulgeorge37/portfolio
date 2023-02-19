// "use client"

// hooks
import { useState, useEffect } from "react";

// assets
import {
    EnvelopeIcon,
    DocumentDuplicateIcon,
    ExclamationTriangleIcon,
    CheckCircleIcon,
    UserIcon,
} from "@heroicons/react/24/solid";

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

const ContactFormSchema = z.object({
    name: z.string().min(1, { message: "Name is required" }),
    email: z
        .string()
        .min(1, { message: "Email is required" })
        .email({ message: "Email is invalid" }),
    message: z.string().min(1, { message: "Message is required" }),
});

// allows us to use zod with typescript
type ContactFormSchemaType = z.infer<typeof ContactFormSchema>;

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
        setFocus,
    } = useForm<ContactFormSchemaType>({
        resolver: zodResolver(ContactFormSchema),
        defaultValues: {
            name: "",
            email: "",
            message: "",
        },
    });

    const submitContactForm: SubmitHandler<ContactFormSchemaType> = async (
        data
    ) => {
        if (isSubmitting) {
            return;
        }
        // console.log(data);
        await new Promise(async (resolve) => {
            setTimeout(() => {
                console.log(data);
                reset();
                resolve(undefined);
            }, 3000);
        });
    };

    const inputErrorState = (name: keyof ContactFormSchemaType) => {
        if (errors[name]?.message) {
            return "error";
        }

        const Schemas = {
            email: z.string().min(1).email(),
            name: z.string().min(1),
            message: z.string().min(1),
        };

        if (Schemas[name].safeParse(watch(name)).success) {
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

    useEffect(() => {
        setFocus("name");
    }, [setFocus]);

    return (
        <div
            id="Contact"
            className="mx-auto flex w-full max-w-lg flex-col justify-between"
        >
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

                        <span className="py-1.5">athulgeorge37@gmail.com</span>
                    </div>
                    <button
                        className="rounded-md bg-slate-300 p-2 dark:bg-slate-500"
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

            <form
                className="flex w-full max-w-md flex-col gap-5"
                onSubmit={handleSubmit(submitContactForm)}
            >
                <Input
                    name="name"
                    register={register}
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
                    dark:disabled:bg-slate-400 dark:disabled:text-slate-300 dark:disabled:ring-slate-400`}
                />

                <Input
                    name="email"
                    register={register}
                    error={errors.email?.message}
                    disabled={isSubmitting}
                    id="email"
                    ariaLabel="email input"
                    placeholder="your email"
                    type="text"
                    autoComplete="off"
                    IconLeft={EnvelopeIcon}
                    IconRight={IconRightToUse("email")}
                    IconRightClassNames={`mr-3 h-5 w-5 
                    ${IconRightClassNamesToUse("email")}`}
                    label="email"
                    className={`w-full rounded-md 
                    bg-slate-200 py-2 px-11 font-semibold shadow-sm ring-2 
                    ring-slate-200 placeholder:text-slate-400 
                    disabled:bg-slate-300 disabled:text-slate-500 disabled:ring-slate-300
                    dark:bg-slate-500 dark:ring-slate-500 dark:placeholder:text-slate-400 
                    ${FocusRingClassNamesToUse("email")}
                    dark:disabled:bg-slate-400 dark:disabled:text-slate-300 
                    dark:disabled:ring-slate-400`}
                />

                <TextArea
                    register={register}
                    name="message"
                    error={errors.message?.message}
                    disabled={isSubmitting}
                    ariaLabel="message text area"
                    id="message"
                    label="message"
                    maxHeight={200}
                    minHeight={200}
                    placeholder="I want to hire you"
                    className={`w-full rounded-md bg-slate-200 px-3 pt-2 font-semibold shadow-sm ring-2 
                    ring-slate-200 placeholder:text-slate-400
                    disabled:bg-slate-300 disabled:text-slate-500 
                    disabled:ring-slate-300 dark:bg-slate-500 dark:ring-slate-500
                    ${FocusRingClassNamesToUse("message")}
                    dark:placeholder:text-slate-400 dark:disabled:bg-slate-400 dark:disabled:text-slate-300 
                    dark:disabled:ring-slate-400`}
                />

                <div className="flex justify-end gap-2">
                    <Button
                        id="clear-contact"
                        ariaLabel="clear contact form"
                        onClick={() => {
                            reset();
                        }}
                        variant="null"
                        text="Clear"
                        disabled={isSubmitting}
                        additionalClassNames="w-fit dark:bg-slate-500 bg-slate-300"
                    />

                    <Button
                        id="submit-contact"
                        ariaLabel="submit contact form"
                        onClick={() => {}}
                        variant="green"
                        text="Submit"
                        type="submit"
                        disabled={isSubmitting}
                        additionalClassNames="w-fit"
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
