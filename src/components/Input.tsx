import React from "react";
import type { UseFormRegisterReturn } from "react-hook-form";

interface InputProps<TRegister extends string> {
    register: UseFormRegisterReturn<TRegister>;
    error: string | undefined;
    id: string;
    ariaLabel: string;
    label?: string;
    type?: "text" | "email" | "password";
    placeholder?: string;
    disabled?: boolean;
    autoComplete?: string;
    IconLeft?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    IconRight?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    IconLeftClassNames?: string;
    IconRightClassNames?: string;
    className?: string;
    autoFocus?: boolean;
}

const Input = <TRegister extends string>({
    id,
    type = "text",
    ariaLabel,
    placeholder,
    disabled = false,
    autoComplete = "off",
    IconLeft,
    IconRight,
    IconLeftClassNames,
    IconRightClassNames,
    register,
    error,
    className,
    label,
    autoFocus = false,
}: InputProps<TRegister>) => {
    return (
        <div
            id="Input"
            className="flex flex-col"
        >
            {label && (
                <label
                    htmlFor={`${id}-input`}
                    className="mb-2 font-semibold uppercase"
                >
                    {label}
                </label>
            )}

            <div className="relative flex items-center">
                {IconLeft && (
                    <IconLeft
                        className={`pointer-events-none absolute left-0 ${
                            IconLeftClassNames
                                ? IconLeftClassNames
                                : "ml-3 h-5 w-5"
                        }`}
                    />
                )}
                <input
                    id={`${id}-input`}
                    type={type}
                    aria-label={ariaLabel}
                    aria-invalid={error === undefined ? false : true}
                    placeholder={placeholder}
                    // required={required}
                    disabled={disabled}
                    autoComplete={autoComplete}
                    autoFocus={autoFocus}
                    className={
                        className
                            ? `border-none focus:outline-none ${className}`
                            : ""
                    }
                    {...register}
                />
                {IconRight && (
                    <IconRight
                        className={`pointer-events-none absolute right-0 ${
                            IconRightClassNames
                                ? IconRightClassNames
                                : "mr-3 h-5 w-5"
                        }`}
                    />
                )}
            </div>
            <p
                className={`mt-2 text-red-600 dark:text-red-500 ${
                    error === undefined ? "invisible" : ""
                }`}
            >
                {error ?? "no errors"}
            </p>
        </div>
    );
};

// // same class name for an input
// className={`w-full rounded-md bg-slate-300 py-2 px-11 font-semibold shadow-sm ring-2
//                     ring-slate-300 placeholder:text-slate-400 focus:ring-blue-600
//                     dark:bg-slate-500 dark:ring-slate-500
//                     dark:placeholder:text-slate-400 dark:focus:ring-blue-500`}

// // how to pass props conditionally, without declaring Input twice
// {...{
//     IconRight:
//         email === "" ? undefined : ExclamationTriangleIcon,
//     IconRightClassNames:
//         email === ""
//             ? undefined
//             : "mr-3 h-5 w-5 text-red-500 dark:text-red-300",
// }}

export default Input;
