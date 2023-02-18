"use client";
import React, { useRef, useEffect } from "react";

// article from:
// https://medium.com/@oherterich/creating-a-textarea-with-dynamic-height-using-react-and-typescript-5ed2d78d9848

// code from:
// https://codesandbox.io/s/autosize-textarea-forked-044vh2?file=/src/useAutosizeTextArea.ts:196-668

interface TextAreaProps {
    // onChange(event: React.ChangeEvent<HTMLTextAreaElement>): void;
    onChange(stringValue: string): void;
    value: string;
    id: string;
    name: string;
    ariaLabel: string;
    label?: string;
    placeholder?: string;
    required?: boolean;
    disabled?: boolean;
    className?: string;
    autoFocus?: boolean;
    maxHeight: number;
    minHeight?: number;
}

const TextArea = ({
    onChange,
    value,
    id,
    name,
    ariaLabel,
    placeholder,
    label,
    required = true,
    disabled = false,
    autoFocus = false,
    minHeight,
    maxHeight,
    className,
}: TextAreaProps) => {
    const textAreaRef = useRef<HTMLTextAreaElement>(null);

    useEffect(() => {
        if (textAreaRef.current) {
            // We need to reset the height momentarily to get the correct scrollHeight for the textarea
            textAreaRef.current.style.height = "0px";
            const scrollHeight = textAreaRef.current.scrollHeight;

            // We then set the height directly, outside of the render loop
            // Trying to set this with state or a ref will product an incorrect value.
            textAreaRef.current.style.height = scrollHeight + "px";
        }
    }, [textAreaRef.current, value]);

    return (
        <div id="TextArea" className="flex flex-col gap-2">
            {label && (
                <label
                    htmlFor={`${id}-textarea`}
                    className="font-semibold uppercase"
                >
                    {label}
                </label>
            )}
            <textarea
                ref={textAreaRef}
                name={name}
                id={`${id}-textarea`}
                aria-label={ariaLabel}
                required={required}
                disabled={disabled}
                placeholder={placeholder}
                autoFocus={autoFocus}
                onChange={(e) => onChange(e.target.value)}
                value={value}
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
            ></textarea>
        </div>
    );
};

export default TextArea;
