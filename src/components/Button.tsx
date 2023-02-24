"use client";
// context

// hooks
import React, { useRef } from "react";
import { useButton } from "@react-aria/button";

// ui
import { FocusRing } from "@react-aria/focus";

// helper
import type { MakeAtLeastOneTypeRequired } from "~/helper/types";
import { cva, type VariantProps } from "class-variance-authority";

// infers all the types from cva, all optional
type ButtonStylesProps = VariantProps<typeof buttonStyles>;
const buttonStyles = cva(
    // styles all buttons will have
    "flex items-center justify-center touch-none select-none focus:outline-none",
    {
        variants: {
            size: {
                none: "",

                sm: "text-sm px-1.5 py-0.5 rounded-md gap-1", // text 14px
                md: "text-base px-2 py-1 rounded-md gap-2", // text 16px
                lg: "text-lg px-2.5 py-1.5 rounded-md gap-2.5", // text 18px

                smSquare: "text-sm p-0.5 rounded-md gap-1", // text 14px
                mdSquare: "text-base p-1 rounded-md gap-2", // text 16px
                lgSquare: "text-lg p-1.5 rounded-md gap-2.5", // text 18px
            },
        },
    }
);

// infers all the types from cva, all optional
type ButtonIconProps = VariantProps<typeof buttonIconStyles>;
const buttonIconStyles = cva([], {
    variants: {
        size: {
            none: "",

            sm: "h-4 w-4", // 16 x 16 px
            md: "h-5 w-5", // 20 x 20 px
            lg: "h-6 w-6", // 24 x 24 px

            smSquare: "h-4 w-4", // text 14px
            mdSquare: "h-5 w-5", // text 16px
            lgSquare: "h-6 w-6", // text 18px
        },
    },
});

// blue: (isPressed: boolean) => {
//     return {
//         ringClassNames: "ring-blue-500 ring-offset-slate-100",
//         classNames: `text-slate-100 hover:bg-blue-600 border-2 border-blue-500
//         ${isPressed ? "bg-blue-700 hover:bg-blue-700" : "bg-blue-500"}`,
//     };
// },

interface ChildElementProps {
    text: string;
    IconLeft: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    IconRight: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    IconLeftClassName?: string;
    IconRightClassName?: string;
}

// ButtonProps includes all
type ButtonProps = {
    onClick(event: React.MouseEvent<HTMLButtonElement>): void;
    id: string;
    ariaLabel: string;
    type?: "button" | "submit" | "reset";
    disabled?: boolean;
    className: ((isPressed: boolean) => string) | string;
    ringClassNames: string; // eg: ring-blue-500 ring-offset-slate-100
} & MakeAtLeastOneTypeRequired<ChildElementProps> &
    ButtonIconProps &
    ButtonStylesProps;

const Button = ({
    onClick,
    id,
    ariaLabel,
    type = "button",
    disabled = false,
    className,
    ringClassNames,
    text,
    IconLeft,
    IconRight,
    IconLeftClassName,
    IconRightClassName,
    size = "md",
}: ButtonProps) => {
    const buttonRef = useRef<HTMLButtonElement>(null);
    const { buttonProps, isPressed } = useButton(
        {
            type: type,
            "aria-label": ariaLabel,
            isDisabled: disabled,
            id: `${id}-button`,
            elementType: "button",

            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            onPress: (e: any) => {
                // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
                onClick(e);
            },
        },
        buttonRef
    );

    return (
        <FocusRing focusRingClass={`ring-2 ring-offset-2 ${ringClassNames}`}>
            <button
                {...buttonProps}
                className={buttonStyles({
                    size: size,
                    className: `${
                        typeof className === "function"
                            ? className(isPressed)
                            : className
                    }`,
                })}
            >
                {IconLeft && (
                    <IconLeft
                        className={
                            IconLeftClassName ??
                            buttonIconStyles({ size: size })
                        }
                    />
                )}
                {text}
                {IconRight && (
                    <IconRight
                        className={
                            IconRightClassName ??
                            buttonIconStyles({ size: size })
                        }
                    />
                )}
            </button>
        </FocusRing>
    );
};

export default Button;
