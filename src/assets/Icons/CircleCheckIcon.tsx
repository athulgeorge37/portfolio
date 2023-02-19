import React from "react";

interface CircleCheckIconProps {
    className: string;
}

const CircleCheckIcon = ({ className }: CircleCheckIconProps) => {
    return (
        <svg
            id="CircleCheckIcon"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            className={className}
            viewBox="0 0 20 20"
        >
            <path
                fillRule="evenodd"
                d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm3.707-9.293a1 1 0 0 0-1.414-1.414L9 10.586 7.707 9.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4z"
                clipRule="evenodd"
            />
        </svg>
    );
};

export default CircleCheckIcon;
