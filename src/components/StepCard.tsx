import React from "react";
import clsx from "clsx";
export default function StepCard({ data, theme }: { data: StepCard, theme: string }): React.JSX.Element {
    return (
        <div className="flex gap-8 flex-col justify-start mb:justify-center">
            <div className={clsx("border-2 border-solid border-[#0E8784] rounded-full w-8 h-8  translate-y-[-50%] mb:hidden", {
                "border-[#0E8784] bg-[#FEFCF7]": theme == "light",
            })} ></div>

            <span className={clsx("font-black font-fra text-[4.5rem] mt-[2.5rem] mb:mt-0 mb:text-center", {
                "text-[#FDD6BA]": theme == "light"
            })}>{data.id}</span>
            <h3 className={clsx("font-black font-fra text-[1.75rem] leading-8 mb:my-6 mb:text-center", {
                "text-[#333D4B]": theme == "light",
                "text-[#FEFCF7]": theme != "light"
            })}>
                {data.title}
            </h3>
            <p className={clsx("text-barlow mb:text-center", {
                "text-[#333D4B]": theme == "light",
                "text-[#FEFCF7]": theme != "light"
            })} >
                {data.desc}
            </p>
        </div>)
}