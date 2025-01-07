import React from "react";
import clsx from "clsx";
import StepCard from "../components/StepCard"
const cardData: StepCard[] = [
    { id: "01", title: "Pick your coffee", desc: "Select from our evolving range of artisan coffees. Our beans are ethically sourced and we pay fair prices for them. There are new coffees in all profiles every month for you to try out." },
    { id: "02", title: "Choose the frequency", desc: "Customize your order frequency, quantity, even your roast style and grind type. Pause, skip or cancel your subscription with no commitment through our online portal." },
    { id: "03", title: "Receive and enjoy!", desc: "We ship your package within 48 hours, freshly roasted. Sit back and enjoy award-winning world-class coffees curated to provide a distinct tasting experience." }

]
export default function Step({ theme }: { theme: string }): React.JSX.Element {
    return (
        <div>
            <h2 className={clsx("text-[1.5rem] font-black font-fra mb:text-center", {
                "text-[#83888F]": theme == "light",
                "hidden ": theme != "light",

            })}>How it works</h2>
            <div className=" w-full mt-24 border-t-2 border-solid mb:border-none border-t-[#FDD6BA]">

            </div>

            <div className="flex justify-between gap-24 items-stretch mb:flex-col">
                {
                    cardData.map((el: StepCard, index: number) => <StepCard key={index} theme={theme} data={el} />)
                }

            </div>
            <a href="#" className={clsx(" mb:mx-auto font-black font-fra text-[1.125rem] mt-16 leading-8 py-4 px-8 bg-[#0E8784] w-fit hover:bg-[#66D2CF] rounded-md", {
                "block text-[#FEFCF7]": theme == "light",
                "hidden": theme != "light"
            })} >Create your plan</a>
        </div>


    )
}