import React from "react";
import clsx from "clsx";

export default function Hero({ section }: { section: HeroSection }): React.JSX.Element {
    return (
        <section className={`container mb:max-w-none text-[#FEFCF7] w-full bg-[url(${section.bgImage})] 
        tb:bg-[url(${section.bgImageTablet})]
        mb:bg-[url(${section.bgImageMobile})] rounded-xl
        bg-cover bg-fixed bg-center bg-no-repeat flex justify-start`}>
            <div className="w-[35%] tb:w-[70%] mb:w-full py-32">
                <h1 className={`mb:text-center font-black ${section.titleSize} font-fra`}>{section.title}</h1>
                <p className="mb:text-center font-barlow leading-8 mt-8 mb-14 text-opacity-80 text-[#FEFCF7]">{section.desc}</p>
                <a href="#" className={clsx(" mb:mx-auto font-black font-fra text-[1.125rem] leading-8 py-4 px-8 bg-[#0E8784] w-fit hover:bg-[#66D2CF] rounded-md", {
                    "block": section.btnText,
                    "hidden": !section.btnText
                })} >{section.btnText}</a>
            </div>
        </section >
    )
}