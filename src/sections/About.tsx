import clsx from "clsx";
import React from "react";
interface AboutSection {
    img: string,
    title: string,
    desc: string,
}
export default function About({ data, theme }: { data: AboutSection, theme: string }): React.JSX.Element {
    return (
        <section className={`container mb:max-w-none flex justify-between gap-32 items-center relative ${theme == "light" ? "py-40" : ""}`} style={{ flexDirection: theme == "light" ? "row" : "row-reverse" }}>
            <img src={data.img} alt={data.title} className={clsx(`objec-cover aspect-auto w-[450px] rounded-md`, {
                "h-[520px]": theme == "light",
                "h-[475px]": theme != "light",
            })} />
            <div className={clsx("", {
                "text-[#333D4B]": theme == "light",
                "text-[#FEFCF7]": theme != "light",
            })}>
                <h2 className="font-black font-fra text-[2.5rem] leading-[3rem] mb-8">{data.title}</h2>
                <p className="text-barlow leading-6">{data.desc}</p>
            </div>
            <div className={clsx("bg-[#333D4B] absolute bottom-0 left-0 w-full h-full -z-10 rounded-xl", {
                "block ": theme != "light",
                "hidden": theme == "light"
            })} style={{transform: "translateY(20%)"}}></div>
        </section>
    )
}