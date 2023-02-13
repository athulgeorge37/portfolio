"use client";
// context

// hooks
import React, { useRef } from "react";
import { useButton } from "@react-aria/button";

// ui
import { FocusRing } from "@react-aria/focus";
import { MoonIcon } from "@heroicons/react/24/solid";

// helper
import { MakeAtLeastOneTypeRequired } from "~/helper/types";
import { cva, type VariantProps } from "class-variance-authority";

// infers all the types from cva, all optional
type ButtonStylesProps = VariantProps<typeof buttonStyles>;
const buttonStyles = cva(
    // styles all buttons will have
    "flex items-center justify-center touch-none select-none focus:outline-none",
    {
        variants: {
            size: {
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
            sm: "h-4 w-4", // 16 x 16 px
            md: "h-5 w-5", // 20 x 20 px
            lg: "h-6 w-6", // 24 x 24 px

            smSquare: "h-4 w-4", // text 14px
            mdSquare: "h-5 w-5", // text 16px
            lgSquare: "h-6 w-6", // text 18px
        },
    },
});

interface ChildElementProps {
    text: string;
    IconLeft: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    IconRight: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

const variants = {
    null: (isPressed: boolean) => {
        return {
            ringClassNames: "ring-blue-500 ring-offset-slate-100",
            classNames: "",
        };
    },

    // blank
    blank: (isPressed: boolean) => {
        return {
            ringClassNames: "ring-slate-900 ring-offset-slate-100",
            classNames: `text-slate-900 hover:bg-slate-200 border-2 border-slate-100
            ${isPressed ? "bg-slate-300 hover:bg-slate-300" : "bg-slate-100"}`,
        };
    },
    blankLight: (isPressed: boolean) => {
        return {
            ringClassNames: "ring-slate-900 ring-offset-slate-100",
            classNames: `text-slate-900 hover:bg-slate-300 border-2 border-slate-200
            ${isPressed ? "bg-slate-400 hover:bg-slate-400" : "bg-slate-200"}`,
        };
    },
    blankOutline: (isPressed: boolean) => {
        return {
            ringClassNames: "ring-slate-900 ring-offset-slate-100",
            classNames: `text-slate-900 hover:bg-slate-200 border-2 border-slate-900
            ${isPressed ? "bg-slate-300 hover:bg-slate-300" : "bg-slate-100"}`,
        };
    },

    // blue
    blue: (isPressed: boolean) => {
        return {
            ringClassNames: "ring-blue-500 ring-offset-slate-100",
            classNames: `text-slate-100 hover:bg-blue-600 border-2 border-blue-500
            ${isPressed ? "bg-blue-700 hover:bg-blue-700" : "bg-blue-500"}`,
        };
    },

    blueLight: (isPressed: boolean) => {
        return {
            ringClassNames: "ring-blue-500 ring-offset-slate-100",
            classNames: `text-blue-500 hover:bg-blue-200 border-2 border-slate-100 
            ${isPressed ? "bg-blue-300 hover:bg-blue-300" : "bg-blue-100"}`,
        };
    },

    blueOutline: (isPressed: boolean) => {
        return {
            ringClassNames: "ring-blue-500 ring-offset-slate-100",
            classNames: `text-blue-500 hover:bg-blue-200 border-2 border-blue-500 
            ${isPressed ? "bg-blue-300 hover:bg-blue-300" : "bg-slate-100"}`,
        };
    },

    // green
    green: (isPressed: boolean) => {
        return {
            ringClassNames: "ring-emerald-500 ring-offset-slate-100",
            classNames: `text-slate-100 hover:bg-emerald-600 border-2 border-emerald-500
            ${
                isPressed
                    ? "bg-emerald-700 hover:bg-emerald-700"
                    : "bg-emerald-500"
            }`,
        };
    },

    greenLight: (isPressed: boolean) => {
        return {
            ringClassNames: "ring-emerald-500 ring-offset-slate-100",
            classNames: `text-emerald-500 hover:bg-emerald-200 border-2 border-slate-100 
            ${
                isPressed
                    ? "bg-emerald-300 hover:bg-emerald-300"
                    : "bg-emerald-100"
            }`,
        };
    },

    greenOutline: (isPressed: boolean) => {
        return {
            ringClassNames: "ring-emerald-500 ring-offset-slate-100",
            classNames: `text-emerald-500 hover:bg-emerald-200 border-2 border-emerald-500 
            ${
                isPressed
                    ? "bg-emerald-300 hover:bg-emerald-300"
                    : "bg-slate-100"
            }`,
        };
    },

    // red
    red: (isPressed: boolean) => {
        return {
            ringClassNames: "ring-red-500 ring-offset-slate-100",
            classNames: `text-slate-100 hover:bg-red-600 border-2 border-red-500
            ${isPressed ? "bg-red-700 hover:bg-red-700" : "bg-red-500"}`,
        };
    },

    redLight: (isPressed: boolean) => {
        return {
            ringClassNames: "ring-red-500 ring-offset-slate-100",
            classNames: `text-red-500 hover:bg-red-200 border-2 border-slate-100 
            ${isPressed ? "bg-red-300 hover:bg-red-300" : "bg-red-100"}`,
        };
    },

    redOutline: (isPressed: boolean) => {
        return {
            ringClassNames: "ring-red-500 ring-offset-slate-100",
            classNames: `text-red-500 hover:bg-red-200 border-2 border-red-500 
            ${isPressed ? "bg-red-300 hover:bg-red-300" : "bg-slate-100"}`,
        };
    },
};

// ButtonProps includes all
type ButtonProps = {
    onClick(event: React.MouseEvent<HTMLButtonElement>): void;
    id: string;
    ariaLabel: string;
    type?: "button" | "submit" | "reset";
    disabled?: boolean;
    additionalClassNames?: string;
    overrideAllClassNames?: string;
    variant: keyof typeof variants;
} & MakeAtLeastOneTypeRequired<ChildElementProps> &
    ButtonIconProps &
    ButtonStylesProps;

const Button = ({
    onClick,
    id,
    ariaLabel,
    type = "button",
    disabled = false,
    additionalClassNames = "",
    overrideAllClassNames,
    text,
    IconLeft,
    IconRight,
    variant,
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

            onPress: (e: any) => {
                onClick(e);
            },
        },
        buttonRef
    );

    const { classNames, ringClassNames } = variants[variant](isPressed);

    return (
        <FocusRing focusRingClass={`ring ring-offset-2 ${ringClassNames}`}>
            <button
                {...buttonProps}
                className={
                    overrideAllClassNames ??
                    buttonStyles({
                        size: size,
                        className: `${classNames} ${additionalClassNames}`,
                    })
                }
            >
                {IconLeft && (
                    <IconLeft className={buttonIconStyles({ size: size })} />
                )}
                {text}
                {IconRight && (
                    <IconRight className={buttonIconStyles({ size: size })} />
                )}
            </button>
        </FocusRing>
    );
};

// an example on how you could call the Button Component
const PlayGround = () => {
    ("");
    // you only have to provide atleast one of [text, iconLeft, iconRight]
    return (
        <div className="flex gap-4  p-5">
            <div className="flex flex-col justify-between gap-2">
                <h2>Test Buttons</h2>
                <p>first is null</p>
                <Button
                    ariaLabel="example"
                    id="example"
                    onClick={() => console.log("example clicked")}
                    IconLeft={MoonIcon}
                    text="hello"
                    variant="null"
                    additionalClassNames="h-fit w-fit hover:text-blue-500"
                />
                <Button
                    ariaLabel="example"
                    id="example"
                    onClick={() => console.log("example clicked")}
                    IconLeft={MoonIcon}
                    text="hello"
                    variant="blankLight"
                    size="sm"
                    additionalClassNames="h-fit w-fit"
                />
                <Button
                    ariaLabel="example"
                    id="example"
                    onClick={() => console.log("example clicked")}
                    IconLeft={MoonIcon}
                    text="hello"
                    variant="blank"
                    size="sm"
                    additionalClassNames="h-fit w-fit hover:text-blue-500 hover:bg-transparent"
                />
            </div>
            <div className="flex flex-col justify-between gap-2">
                <h2>Blank Colors</h2>
                <p>h-fit w-fit</p>
                <Button
                    ariaLabel="example"
                    id="example"
                    onClick={() => console.log("example clicked")}
                    IconLeft={MoonIcon}
                    text="hello"
                    variant="blank"
                    additionalClassNames="h-fit w-fit"
                />
                <Button
                    ariaLabel="example"
                    id="example"
                    onClick={() => console.log("example clicked")}
                    IconLeft={MoonIcon}
                    text="hello"
                    variant="blankLight"
                    additionalClassNames="h-fit w-fit"
                />
                <Button
                    ariaLabel="example"
                    id="example"
                    onClick={() => console.log("example clicked")}
                    IconLeft={MoonIcon}
                    text="hello"
                    variant="blankOutline"
                    additionalClassNames="h-fit w-fit"
                />
            </div>

            <div className="flex flex-col justify-between gap-2">
                <h2>Blue Colors</h2>
                <p>h-fit w-fit</p>
                <Button
                    ariaLabel="example"
                    id="example"
                    onClick={() => console.log("example clicked")}
                    IconLeft={MoonIcon}
                    text="hello"
                    variant="blue"
                    additionalClassNames="h-fit w-fit"
                />
                <Button
                    ariaLabel="example"
                    id="example"
                    onClick={() => console.log("example clicked")}
                    IconLeft={MoonIcon}
                    text="hello"
                    variant="blueLight"
                    additionalClassNames="h-fit w-fit"
                />
                <Button
                    ariaLabel="example"
                    id="example"
                    onClick={() => console.log("example clicked")}
                    IconLeft={MoonIcon}
                    text="hello"
                    variant="blueOutline"
                    additionalClassNames="h-fit w-fit"
                />
            </div>

            <div className="flex flex-col justify-between gap-2">
                <h2>Green Colors</h2>
                <p>h-fit w-fit</p>
                <Button
                    ariaLabel="example"
                    id="example"
                    onClick={() => console.log("example clicked")}
                    IconLeft={MoonIcon}
                    text="hello"
                    variant="green"
                    additionalClassNames="h-fit w-fit"
                />
                <Button
                    ariaLabel="example"
                    id="example"
                    onClick={() => console.log("example clicked")}
                    IconLeft={MoonIcon}
                    text="hello"
                    variant="greenLight"
                    additionalClassNames="h-fit w-fit"
                />
                <Button
                    ariaLabel="example"
                    id="example"
                    onClick={() => console.log("example clicked")}
                    IconLeft={MoonIcon}
                    text="hello"
                    variant="greenOutline"
                    additionalClassNames="h-fit w-fit"
                />
            </div>

            <div className="flex flex-col justify-between gap-2">
                <h2>Red Colors</h2>
                <p>h-fit w-fit</p>
                <Button
                    ariaLabel="example"
                    id="example"
                    onClick={() => console.log("example clicked")}
                    IconLeft={MoonIcon}
                    text="hello"
                    variant="red"
                    additionalClassNames="h-fit w-fit"
                />
                <Button
                    ariaLabel="example"
                    id="example"
                    onClick={() => console.log("example clicked")}
                    IconLeft={MoonIcon}
                    text="hello"
                    variant="redLight"
                    additionalClassNames="h-fit w-fit"
                />
                <Button
                    ariaLabel="example"
                    id="example"
                    onClick={() => console.log("example clicked")}
                    IconLeft={MoonIcon}
                    text="hello"
                    variant="redOutline"
                    additionalClassNames="h-fit w-fit"
                />
            </div>
        </div>
    );
};

export default Button;
export { PlayGround };
