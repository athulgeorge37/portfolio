import React from "react";

const ResponsiveHelper = () => {
    return (
        <div
            id="ResponsiveHelper"
            className="fixed bottom-2 right-2 flex h-10 w-10 items-center justify-center rounded-md border-2 border-blue-900 bg-blue-300 font-bold text-blue-900"
        >
            <span className="hidden sm:block md:hidden">sm</span>
            <span className="hidden md:block lg:hidden">md</span>
            <span className="hidden lg:block xl:hidden">lg</span>
            <span className="hidden xl:block 2xl:hidden">xl</span>
            <span className="hidden 2xl:block">2xl</span>
        </div>
    );
};

export default ResponsiveHelper;
