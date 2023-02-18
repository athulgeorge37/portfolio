import {
    EnvelopeIcon,
    DocumentDuplicateIcon,
    CheckIcon,
    ExclamationTriangleIcon,
    UserIcon,
} from "@heroicons/react/24/solid";
import { useState } from "react";
import LoadingSpinner from "./LoadingSpinner";
import Input from "~/components/Input";
import TextArea from "~/components/TextArea";

interface ContactProps {}

const Contact = ({}: ContactProps) => {
    const [loadingState, setLoadingState] = useState<
        "loading" | "complete" | "idle"
    >("idle");

    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");

    return (
        <div id="Contact" className="flex justify-between">
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
                            <CheckIcon className="h-5 w-5" />
                        ) : (
                            <DocumentDuplicateIcon className="h-5 w-5" />
                        )}
                    </button>
                </div>
            </div>

            <form className="flex w-full max-w-md flex-col gap-10">
                <Input
                    id="name"
                    ariaLabel="name input"
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder="Master Chief"
                    required
                    name="name-input"
                    IconLeft={UserIcon}
                    label="name"
                    className="w-full rounded-md bg-slate-300 py-2 px-11 font-semibold shadow-sm ring-2 
                    ring-slate-300 placeholder:text-slate-400 focus:ring-blue-600 
                    dark:bg-slate-500 dark:ring-slate-500 
                    dark:placeholder:text-slate-400 dark:focus:ring-blue-500"
                />

                <Input
                    id="email"
                    ariaLabel="email input"
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your email"
                    required
                    type="email"
                    name="email-input"
                    autoComplete="off"
                    IconLeft={EnvelopeIcon}
                    {...{
                        IconRight:
                            email === "" ? undefined : ExclamationTriangleIcon,
                        IconRightClassNames:
                            email === ""
                                ? undefined
                                : "mr-3 h-5 w-5 text-red-500 dark:text-red-300",
                    }}
                    label="email"
                    className={`w-full rounded-md bg-slate-300 py-2 px-11 font-semibold shadow-sm ring-2 
                    ring-slate-300 placeholder:text-slate-400 focus:ring-blue-600 
                    dark:bg-slate-500 dark:ring-slate-500 
                    dark:placeholder:text-slate-400 dark:focus:ring-blue-500`}
                />

                <TextArea
                    ariaLabel="message text area"
                    id="message"
                    name="message"
                    onChange={setMessage}
                    value={message}
                    label="message"
                    maxHeight={200}
                    minHeight={200}
                    placeholder="I want to hire you"
                    className={`w-full rounded-md bg-slate-300 px-3 pt-2 font-semibold shadow-sm ring-2 
                    ring-slate-300 placeholder:text-slate-400 focus:ring-blue-600 
                    dark:bg-slate-500 dark:ring-slate-500 
                    dark:placeholder:text-slate-400 dark:focus:ring-blue-500`}
                />
            </form>
        </div>
    );
};

export default Contact;
