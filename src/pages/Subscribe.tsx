import React from "react";
import Hero from "../sections/Hero";
import Step from "../sections/Step";
import clsx from "clsx";
const heroData: HeroSection = {
    bgImage: "./assets/plan/desktop/image-hero-blackcup.jpg",
    bgImageMobile: "./assets/plan/mobile/image-hero-blackcup.jpg",
    bgImageTablet: "./assets/plan/tablet/image-hero-blackcup.jpg",
    titleSize: "text-[2.5rem] leading-[150%] tb:text-[2rem]  mb:text-[1.75rem]",
    title: "Create a plan",
    desc: "Build a subscription plan that best fits your needs. We offer an assortment of the best artisan coffees from around the globe delivered fresh to your door.",
}
interface Plan {
    id: string,
    title: string,
    items:
    {
        title: string,
        desc: string,
        status: "default" | "selected"
    }[],
    status: "explain" | "close" | "disable"
}
const initData: Plan[] = [
    {
        id: "1",
        title: "How do you drink your coffee?", items: [
            { title: "Capsule", desc: "Compatible with Nespresso systems and similar brewers", status: "default" },
            { title: "Filter", desc: "For pour over or drip methods like Aeropress, Chemex, and V60", status: "default" },
            { title: "Espresso", desc: "Dense and finely ground beans for an intense, flavorful experience", status: "default" }

        ],
        status: "explain"
    },
    {
        id: "2",
        title: "What type of coffee?", items: [
            { title: "Single Origin", desc: "Distinct, high quality coffee from a specific family-owned farm", status: "default" },
            { title: "Decaf", desc: "Just like regular coffee, except the caffeine has been removed", status: "default" },
            { title: "Blended", desc: "Combination of two or three dark roasted beans of organic coffees", status: "default" }

        ],
        status: "explain"
    },
    {
        id: "3",
        title: "How much would you like?", items: [
            { title: "250g", desc: "Perfect for the solo drinker. Yields about 12 delicious cups.", status: "default" },
            { title: "500g", desc: "Perfect option for a couple. Yields about 40 delectable cups.", status: "default" },
            { title: "1000g", desc: "Perfect for offices and events. Yields about 90 delightful cups.", status: "default" }

        ],
        status: "explain"
    },
    {
        id: "4",
        title: "Want us to grind them?", items: [
            { title: "Wholebean", desc: "Best choice if you cherish the full sensory experience", status: "default" },
            { title: "Filter", desc: "For drip or pour-over coffee methods such as V60 or Aeropress", status: "default" },
            { title: "Cafetiére", desc: " Course ground beans specially suited for french press coffee", status: "default" }

        ],
        status: "explain"
    },
    {
        id: "5",
        title: "How often should we deliver?", items: [
            { title: "Every week", desc: "$7.20 per shipment. Includes free first-class shipping.", status: "default" },
            { title: "Every 2 weeks", desc: "$9.60 per shipment. Includes free priority shipping.", status: "default" },
            { title: "Every month", desc: "$12.00 per shipment. Includes free priority shipping.", status: "default" }

        ],
        status: "explain"
    },
]
const pricesRule: { [key: string]: { [key: string]: number } } = {
    "250g": { "Every week": 7.2, "Every 2 weeks": 9.6, "Every month": 12.0 },
    "500g": { "Every week": 13.0, "Every 2 weeks": 17.5, "Every month": 22.0 },
    "1000g": { "Every week": 22.0, "Every 2 weeks": 32.0, "Every month": 42.0 }
};
export default function Subscribe(): React.JSX.Element {
    const [state, setState] = React.useState<Plan[]>(initData)
    const [result, setResultText] = React.useState<string>("")
    const [popupState, togglePopup] = React.useState<boolean>(false)
    const [price, setPrice] = React.useState<number>(0)
    const handleSelected = (itemId: string, index: number) => {
        const updateItemIndex = state.findIndex(el => el.id == itemId)
        if (updateItemIndex == -1) return
        const updatedItems = state[updateItemIndex].items.map((item, idx) => {
            if (index === idx) {
                return { ...item, status: "selected" as "selected" };
            }
            return { ...item, status: "default" as "default" };
        });

        const updatedState = state.map((plan, idx) => {
            if (idx === updateItemIndex) return { ...plan, items: updatedItems };
            return plan;
        });
        const result = updatedState.map((plan) => {
            const isCapsule = updatedState[0].items.find(el => el.status == "selected")?.title == "Capsule"
            if (plan.id == "4" && isCapsule) return { ...plan, status: "disable" as "disable", items: plan.items.map(el => ({ ...el, status: "default" as "default" })) }

            if (plan.id == "4" && !isCapsule) return { ...plan, status: "explain" as "explain" }

            return plan;
        });
        setState(result);
    }
    const handleExplain = (itemId: string, status: string) => {
        const updateItemIndex = state.findIndex(el => el.id == itemId)
        if (updateItemIndex == -1) return
        const newState = [...state]
        newState[updateItemIndex].status = status == "explain" ? "close" : "explain"
        setState([...newState])
    }

    React.useEffect(() => {
        let result = ""
        let price = 0
        let weight: { [key: string]: number } = {}
        state.map((el, index) => {
            const selectedItem = el.items.find(e => e.status == "selected")
            if (index == 0 && selectedItem) {
                result += `I drink my coffee as <span class="text-green">${selectedItem.title}</span>`
            }
            if (index == 1 && selectedItem) {
                result += `with a <span class="text-green"> ${selectedItem.title}</span>  type of bean.`
            }
            if (index == 2 && selectedItem) {
                result += `<span class="text-green"> ${selectedItem.title}</span> ground `
                weight = pricesRule[selectedItem.title]
            }
            if (index == 3 && selectedItem) {
                result += `ala <span class="text-green"> ${selectedItem.title}</span> `
            }
            if (index == 4 && selectedItem) {
                result += `sent to me <span class="text-green"> ${selectedItem.title}</span> `
                console.log(weight, selectedItem.title , weight[selectedItem.title]);
                
                price = weight[selectedItem.title]
            }
        })
        setResultText(result)
        console.log(price);
        
        setPrice(!isNaN(price) ? price : 0)
    }, [state])

    return (<>
        <Hero section={heroData} />
        <section className="container mb:max-w-none mt-[12.5rem] mb-[20rem] tb:my-[9rem] mb:my-[7.5rem] bg-[#2C343E] py-10 rounded-xl">
            <Step theme="dark" />
        </section >
        <section className="container mb:max-w-none mt-40 flex gap-28 px-20 pb-20 mb:px-4 mb:py-4">
            <ul className="tb:hidden mb:hidden">
                <li className="p-6 border-solid border-b-[1px] border-[#83888F]/25">
                    <a href="#" className="font-black text-[#333D4B]  text-opacity-40 font-fra text-[1.5rem] leading-8 flex items-center gap-6"> <span>01</span> Preferences</a>
                </li>
                <li className="p-6 border-solid border-b-[1px] border-[#83888F]/25">
                    <a href="#" className="font-black text-opacity-40 font-fra text-[1.5rem] leading-8 text-[#333D4B] flex items-center gap-6"> <span>02</span> Bean Type</a>
                </li>
                <li className="p-6 border-solid border-b-[1px] border-[#83888F]/25">
                    <a href="#" className="font-black text-opacity-40 font-fra text-[1.5rem] leading-8 text-[#333D4B] flex items-center gap-6"> <span>03</span> Quantity</a>
                </li>
                <li className="p-6 border-solid border-b-[1px] border-[#83888F]/25">
                    <a href="#" className="font-black text-opacity-40 font-fra text-[1.5rem] leading-8 text-[#333D4B] flex items-center gap-6"> <span>04</span> Grind Option</a>
                </li>
                <li className="p-6 border-solid border-b-[1px] border-[#83888F]/25">
                    <a href="#" className="font-black text-opacity-40 font-fra text-[1.5rem] leading-8 text-[#333D4B] flex items-center gap-6"> <span>05</span> Deliveries</a>
                </li>
            </ul>

            <div className="flex flex-col gap-20">
                {
                    state.map((el: Plan) => <Plan item={el} key={el.id} toggleExplain={handleExplain} toggleSelect={handleSelected} />)
                }
                <div className="px-16 mb:px-0 py-6 mb:py-0 bg-[#2C343E] rounded-lg mt-20 ">
                    <span className="font-barlow leading-6 text-[#FFFFFF]/50 block mb-2 uppercase">Order Summary</span>
                    <p className="text-white font-black font-fra text-[1.5rem] leading-10 p-4" dangerouslySetInnerHTML={{ __html: `“${result}”` }}>

                    </p>
                </div>
                <span onClick={() => togglePopup(!popupState)} className=" mb:mx-auto cursor-pointer font-black font-fra text-[1.125rem] leading-8 py-4 px-8 bg-[#0E8784] text-white ml-auto tb:mx-auto w-fit hover:bg-[#66D2CF] rounded-md" >Create my plan!</span>
            </div>


        </section>
        <div onClick={() => togglePopup(!popupState)} className={clsx("bg-black/25 fixed w-full h-full top-0 left-0 z-10", {
            "hidden": !popupState,
            "block": popupState
        })}></div>
        <div className={clsx("fixed w-1/2 tb:w-2/3 mb:w-[90%] h-2/3 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-20 bg-white overflow-y-scroll", {
            "hidden": !popupState,
            "block": popupState
        })}>
            <h2 className="text-[2.5rem] mb:text-[1.5rem] leading-[3rem] text-white font-black p-12 bg-[#333D4B]">Order Summary</h2>
            <div className="p-12 flex flex-col gap-12">
                <p className="text-[1.5rem] leading-10 font-fra font-black" dangerouslySetInnerHTML={{ __html: `“${result}”` }}></p>
                <p className="font-barlow leading-6 text-[#333D4B] text-opacity-80">Is this correct? You can proceed to checkout or go back to plan selection if something is off. Subscription discount codes can also be redeemed at the checkout. </p>
                <div className="flex flex-row items-center justify-between gap-3 ">
                    <span className="font-fra text-[#333D4B] font-black text-[2rem] leading-9">${price} / mo</span>
                    <span onClick={() => togglePopup(!popupState)} className=" mb:mx-auto cursor-pointer font-black font-fra text-[1.125rem] leading-8 py-4 px-8 bg-[#0E8784] text-white ml-auto tb:mx-auto w-fit hover:bg-[#66D2CF] rounded-md" >Checkout</span>

                </div>
            </div>

        </div>
    </>)
}
export function Plan({ item, toggleExplain, toggleSelect }: { item: Plan, toggleExplain: (itemId: string, status: string) => void, toggleSelect: (itemId: string, index: number) => void }): React.JSX.Element {

    return (
        <div style={{ pointerEvents: item.status == "disable" ? "none" : "all" }}>
            <h2 onClick={() => toggleExplain(item.id, item.status)} className="text-[#83888F] font-black font-fra text-[2.5rem] cursor-pointer leading-[3rem] mb-14 flex items-center justify-between">{item.title}
                <img src="./assets/plan/desktop/icon-arrow.svg" className={clsx("w-7 h-5", {
                    "rotate-180": item.status == "close",
                    "rotate-0": item.status == "explain"
                })} />
            </h2>
            <div className={clsx("flex flex-nowrap gap-6 mb:flex-col", {
                "hidden": item.status == "close",
                "block": item.status == "explain"
            })}>

                {
                    item.items.map((el, index) =>
                        <div onClick={() => toggleSelect(item.id, index)} className={clsx("flex flex-col p-8 pb-20 gap-6 rounded-lg cursor-pointer", {
                            "bg-[#F4F1EB] hover:bg-[#FDD6BA] ": el.status == "default",
                            "bg-[#0E8784]": el.status == "selected"
                        })}>
                            <h3 className={clsx("font-black font-fra text-[1.5rem] leading-8", {
                                "text-[#333D4B]": el.status == "default",
                                "text-[#F4F1EB]": el.status == "selected"
                            })}>{el.title}</h3>
                            <p className={clsx("font-barlow leading-6", {
                                "text-[#333D4B]": el.status == "default",
                                "text-[#F4F1EB]": el.status == "selected"
                            })}>
                                {el.desc}
                            </p>
                        </div>)
                }

            </div>
        </div>

    )
}