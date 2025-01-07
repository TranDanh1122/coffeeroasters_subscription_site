import React from "react";
import clsx from "clsx";
export default function CardwIcon({ card, type }: { card: CardWIcon, type: string }): React.JSX.Element {
    return (
        <div className={clsx("p-[3rem] pt-[4.5rem] rounded-xl flex flex-col justify-center items-center gap-16 tb:flex-row tb:gap-14 tb:items-center", {
            "tb:flex-row": type != "headquarter",
            "tb:flex-col": type == "headquarter",
        })}
            style={{ backgroundColor: `${card.bgColor}`, alignItems: `${type == "headquarter" ? (window.innerWidth > 767 ? "start" : "center") : ""}` }}>

            <img src={card.thumbnail} alt={card.title} className={clsx("w-[4.5rem] tb:w-[3.5rem] h-[4.5rem] tb:h-[3.5rem] aspect-square object-cover", {
                "hidden": type == "collection",
                "block mx-auto": type != "collection"
            })} />
            <img src={card.thumbnail} alt={card.title} className={clsx("w-[calc(16rem-1.5rem)] mb:w-[12.5rem] h-[12.5rem] mb:h-[10rem] object-cover aspect-auto", {
                "hidden": type != "collection",
                "block": type == "collection",
            })} />
            <div>
                <h3 className="text-[1.5rem]  font-black font-fra leading-8 mb-6 text-center tb:text-left" style={{ color: `${card.textColor}` }}>{card.title}</h3>
                <p className={`text-barlow leading-6 text-center tb:text-left`} style={{ color: `${card.textColor}`, whiteSpace: "pre-line", textAlign: `${type == "headquarter" ? "left" : ""}` }}>{card.desc}</p>
            </div>
        </div>)
}