import React from "react";
import type { UseFormRegisterReturn } from "react-hook-form";

interface TextAreaProps<TRegister extends string> {
    register: UseFormRegisterReturn<TRegister>;
    id: string;
    ariaLabel: string;
    label?: string;
    placeholder?: string;
    error: string | undefined;
    disabled?: boolean;
    className?: string;
    autoFocus?: boolean;
    maxHeight: number;
    minHeight?: number;
    IconRight?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    IconRightClassNames?: string;
}

const TextArea = <TRegister extends string>({
    register,
    id,
    ariaLabel,
    placeholder,
    label,
    error,
    disabled = false,
    autoFocus = false,
    minHeight,
    maxHeight,
    className,
    IconRight,
    IconRightClassNames,
}: TextAreaProps<TRegister>) => {
    return (
        <div
            id="TextArea"
            className="flex flex-col"
        >
            {label && (
                <label
                    htmlFor={`${id}-textarea`}
                    className="mb-2 font-semibold"
                >
                    {label}
                </label>
            )}

            <div className="relative flex">
                <textarea
                    id={`${id}-textarea`}
                    aria-label={ariaLabel}
                    aria-invalid={error === undefined ? false : true}
                    disabled={disabled}
                    placeholder={placeholder}
                    autoFocus={autoFocus}
                    rows={1}
                    style={{
                        // NOTE: make maxHeight and minHeight the same for scrollable textarea
                        // without it resizing on new line
                        maxHeight: maxHeight,
                        minHeight: minHeight ?? "none",
                    }}
                    className={
                        // ensure padding bottom is 0, for best scrolling experience
                        className
                            ? `resize-none border-none focus:outline-none ${className}`
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

export default TextArea;
