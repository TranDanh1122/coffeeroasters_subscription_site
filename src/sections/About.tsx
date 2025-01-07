import clsx from "clsx";
import React from "react";
interface AboutSection {
    img: string,
    title: string,
    desc: string,
}
export default function About({ data, theme }: { data: AboutSection, theme: string }): React.JSX.Element {
    return (
        <section className={clsx("container mb:max-w-none flex justify-between gap-32 tb:gap-16 items-center relative", {
            " flex-row py-40 mb:flex-col": theme == "light",
            "flex-row-reverse tb:flex-col mb:flex-col  ": theme != "light",
        })}>
            <img src={data.img} alt={data.title} className={clsx(`objec-cover aspect-auto w-[450px] rounded-md`, {
                "h-[520px] w-[450px] tb:w-[280px]": theme == "light",
                "h-[475px] w-[450px] tb:w-[573px]": theme != "light",
            })} />
            <div className={clsx("", {
                "text-[#333D4B]": theme == "light",
                "text-[#FEFCF7]": theme != "light",
            })}>
                <h2 className={clsx("font-black font-fra text-[2.5rem] leading-[3rem] mb-8", {
                    " tb:text-center": theme != "light",
                })}>{data.title}</h2>
                <p className={clsx("text-barlow leading-6", {
                    " tb:text-center": theme != "light",
                })}>{data.desc}</p>
            </div>
            <div className={clsx("bg-[#333D4B] absolute bottom-0 left-0 w-full h-full -z-10 rounded-xl ", {
                "block translate-y-[20%] mb:translate-y-[5%]": theme != "light",
                "hidden": theme == "light"
            })} ></div>
        </section >
    )
}