import Hero from "../sections/Hero"
import CardwIcon from "../components/CardwIcon"
import Step from "../sections/Step"
const heroData: HeroSection = {
    bgImage: "./assets/home/desktop/image-hero-coffeepress.jpg",
    bgImageMobile: "./assets/home/mobile/image-hero-coffeepress.jpg",
    bgImageTablet: "./assets/home/tablet/image-hero-coffeepress.jpg",
    titleSize: "text-[4.5rem] tb:text-[3rem] mb:text-[2.5rem]",
    title: "Great coffee made simple.",
    desc: "Start your mornings with the world’s best coffees. Try our expertly curated artisan coffees from our best roasters delivered directly to your door, at your schedule.",
    btnText: "Create your plan"
}

const collectionData: CardWIcon[] = [
    { thumbnail: "./assets/home/desktop/image-gran-espresso.png", title: "Gran Espresso", desc: "Light and flavorful blend with cocoa and black pepper for an intense experience", textColor: "#333D4B" },
    { thumbnail: "./assets/home/desktop/image-planalto.png", title: "Planalto", desc: "Brazilian dark roast with rich and velvety body, and hints of fruits and nuts", textColor: "#333D4B" },
    { thumbnail: "./assets/home/desktop/image-piccollo.png", title: "Piccollo", desc: "Mild and smooth blend featuring notes of toasted almond and dried cherry", textColor: "#333D4B" },
    { thumbnail: "./assets/home/desktop/image-danche.png", title: "Danche", desc: "Ethiopian hand-harvested blend densely packed with vibrant fruit notes", textColor: "#333D4B" },
]
const chooseUsData: CardWIcon[] = [
    { thumbnail: "./assets/home/desktop/icon-coffee-bean.svg", title: "Best quality", desc: "Discover an endless variety of the world’s best artisan coffee from each of our roasters.", textColor: "#FEFCF7", bgColor: "#0E8784" },
    { thumbnail: "./assets/home/desktop/icon-gift.svg", title: "Exclusive benefits", desc: "Special offers and swag when you subscribe, including 30% off your first shipment.", textColor: "#FEFCF7", bgColor: "#0E8784" },
    { thumbnail: "./assets/home/desktop/icon-truck.svg", title: "Free shipping", desc: "We cover the cost and coffee is delivered fast. Peak freshness: guaranteed.", textColor: "#FEFCF7", bgColor: "#0E8784" },
]
export default function Home(): React.JSX.Element {
    return (
        <>
            <Hero section={heroData} />
            <section className="container mb:max-w-none py-40">
                <h2 className="relative z-0 font-black font-fra text-[10rem] tb:text-[4.5rem] mb:text-[2.5rem] leading-[4.5rem] text-[#83888F] text-opacity-50 text-center">
                    our collection
                    <div className="absolute w-full h-[10rem] tb:h-[4.5rem] mb:text-[2.5rem] top-0 left-0 bg-gradient-to-b from-[#FEFCF7]/0 to-[#FEFCF7]"> </div>
                </h2>
                <div className="flex justify-center items-center relative z-10 gap-8 tb:flex-col mb:flex-col">
                    {
                        collectionData.map((el: CardWIcon, index) => <CardwIcon key={index} type="collection" card={el} />)
                    }

                </div>
            </section>

            <section className="container mb:max-w-none py-40 relative flex gap-[5.25rem] flex-col ">
                <div>
                    <h2 className="font-black font-fra text-[2.5rem] leading-[3rem] text-[#FEFCF7] text-center mb-8">Why choose us?</h2>
                    <p className="text-barlow leading-6 text-[#FEFCF7] text-opacity-80 w-1/2 tb:w-4/5 mx-auto text-center">A large part of our role is choosing which particular coffees will be featured
                        in our range. This means working closely with the best coffee growers to give
                        you a more impactful experience on every level.</p>
                </div>

                <div className=" flex gap-5 flex-nowrap tb:flex-col mb:flex-col ">
                    {
                        chooseUsData.map((el: CardWIcon, index: number) => <CardwIcon key={index} card={el} type="choose" />)
                    }
                </div>
                <div className="bg-[#2C343E] rounded-xl w-full h-[60%] top-0 left-0 absolute -z-10"></div>

            </section>
            <section className="container mb:max-w-none mt-[12.5rem] mb-[20rem] tb:my-[9rem] mb:my-[7.5rem]">
                <Step theme="light" />
            </section >
        </>
    )
}
