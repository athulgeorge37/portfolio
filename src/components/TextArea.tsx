"use client";
import React, { useRef, useEffect } from "react";
import { UseFormRegister } from "react-hook-form";
// article from:
// https://medium.com/@oherterich/creating-a-textarea-with-dynamic-height-using-react-and-typescript-5ed2d78d9848

// code from:
// https://codesandbox.io/s/autosize-textarea-forked-044vh2?file=/src/useAutosizeTextArea.ts:196-668

interface TextAreaProps {
    // onChange(event: React.ChangeEvent<HTMLTextAreaElement>): void;
    // onChange(stringValue: string): void;
    // value: string;
    register: UseFormRegister<any>;
    id: string;
    name: string;
    ariaLabel: string;
    label?: string;
    placeholder?: string;
    error: string | undefined;
    disabled?: boolean;
    className?: string;
    autoFocus?: boolean;
    maxHeight: number;
    minHeight?: number;
}

const TextArea = ({
    // onChange,
    // value,
    register,
    id,
    name,
    ariaLabel,
    placeholder,
    label,
    error,
    disabled = false,
    autoFocus = false,
    minHeight,
    maxHeight,
    className,
}: TextAreaProps) => {
    // const textAreaRef = useRef<HTMLTextAreaElement>(null);

    // useEffect(() => {
    //     if (textAreaRef.current) {
    //         // We need to reset the height momentarily to get the correct scrollHeight for the textarea
    //         textAreaRef.current.style.height = "0px";
    //         const scrollHeight = textAreaRef.current.scrollHeight;

    //         // We then set the height directly, outside of the render loop
    //         // Trying to set this with state or a ref will product an incorrect value.
    //         textAreaRef.current.style.height = scrollHeight + "px";
    //     }
    // }, [textAreaRef.current]);

    return (
        <div id="TextArea" className="flex flex-col">
            {label && (
                <label
                    htmlFor={`${id}-textarea`}
                    className="mb-2 font-semibold uppercase"
                >
                    {label}
                </label>
            )}

            <textarea
                // ref={textAreaRef}
                id={`${id}-textarea`}
                aria-label={ariaLabel}
                aria-invalid={error === undefined ? false : true}
                disabled={disabled}
                placeholder={placeholder}
                autoFocus={autoFocus}
                rows={1}
                style={{
                    // make maxHeight and minHeight the same for scrollable textarea
                    // without it resizing on new line
                    maxHeight: maxHeight,
                    minHeight: minHeight ?? "none",
                }}
                className={
                    // ensure padding bottom is 0, for best scrolling exeperience
                    className
                        ? `resize-none border-none focus:outline-none ${className}`
                        : ""
                }
                {...register(name)}
            />
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
