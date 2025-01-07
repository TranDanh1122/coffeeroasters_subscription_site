import React from "react";
import Hero from "../sections/Hero";
import About from "../sections/About";
import CardwIcon from "../components/CardwIcon";
const heroData: HeroSection = {
    bgImage: "./assets/about/desktop/image-hero-whitecup.jpg",
    bgImageMobile: "./assets/about/mobile/image-hero-whitecup.jpg",
    bgImageTablet: "./assets/about/tablet/image-hero-whitecup.jpg",
    titleSize: "text-[2.5rem] leading-[150%] tb:text-[2rem]  mb:text-[1.75rem]",
    title: "About Us",
    desc: "Coffeeroasters began its journey of exotic discovery in 1999, highlighting stories of coffee from around the world. We have since been dedicated to bring the perfect cup - from bean to brew - in every shipment.",
}
const aboutLightData: AboutSection = {
    img: "./assets/about/desktop/image-commitment.jpg",
    title: "Our commitment",
    desc: "We’re built on a simple mission and a commitment to doing good along the way. We want to make it easy for you to discover and brew the world’s best coffee at home. It all starts at the source. To locate the specific lots we want to purchase, we travel nearly 60 days a year trying to understand the challenges and opportunities in each of these places. We collaborate with exceptional coffee growers and empower a global community of farmers through with well above fair-trade benchmarks. We also offer training, support farm community initiatives, and invest in coffee plant science. Curating only the finest blends, we roast each lot to highlight tasting profiles distinctive to their native growing region.",
}
const aboutDarkData: AboutSection = {
    img: "./assets/about/desktop/image-quality.jpg",
    title: "Uncompromising quality",
    desc: "Although we work with growers who pay close attention to all stages of harvest and processing, we employ, on our end, a rigorous quality control program to avoid over-roasting or baking the coffee dry. Every bag of coffee is tagged with a roast date and batch number. Our goal is to roast consistent, user-friendly coffee, so that brewing is easy and enjoyable.",
}
const headquarters: CardWIcon[] = [
    { thumbnail: "./assets/about/desktop/illustration-uk.svg", title: "United Kingdom", desc: "68  Asfordby Rd \n Alcaston \n SY6 1YA \n +44 1241 918425", textColor: "#333D4B" },
    { thumbnail: "./assets/about/desktop/illustration-canada.svg", title: "Canada", desc: "1528  Eglinton Avenue \nToronto \nOntario M4P 1A6 \n+1 416 485 2997", textColor: "#333D4B" },
    { thumbnail: "./assets/about/desktop/illustration-australia.svg", title: "Australia", desc: "36 Swanston Street \nKewell \nVictoria \n+61 4 9928 3629", textColor: "#333D4B" },
]
export default function AboutUs(): React.JSX.Element {
    return (
        <>
            <Hero section={heroData} />
            <About data={aboutLightData} theme="light"></About>
            <About data={aboutDarkData} theme="dark"></About>
            <section className="container mb:max-w-none py-40">
                <h2 className="font-black font-fra text-[#83888F] text-[1.5rem] leading-8">Our headquarters</h2>
                <div className=" flex flex-nowrap tb:flex-col mb:flex-col justify-start gap-24">

                    {
                        headquarters.map((headquarter: CardWIcon, index: number) => <CardwIcon key={index} card={headquarter} type="headquarter" />)
                    }
                </div>
            </section>
        </>)
}