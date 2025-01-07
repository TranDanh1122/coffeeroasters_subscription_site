import clsx from "clsx";
import React from "react";
import { NavLink } from "react-router-dom";
type MenuStatus = "explain" | "close"
export default function Header(): React.JSX.Element {
    const [menuState, setMenuState] = React.useState<MenuStatus>("close")
    const toggleMenu = (status: MenuStatus) => {
        setMenuState(status)
    }
    return (
        <header className="container mb:max-w-none flex flex-nowrap justify-between items-center w-full py-12">
            <img src="./assets/shared/desktop/logo.svg" alt="logo" className="w-[16rem] mb:w-[11rem] h-7 mb:h-5 object-cover relative z-20" style={{ aspectRatio: "10" }} />
            <ul className="flex flex-nowrap justify-start items-center gap-8 uppercase mb:hidden">
                <li className=" font-bold font-barlow text-[.75rem] leading-[1rem] tracking-[.92px] text-[#83888F] hover:text-[#333D4B]">
                    <NavLink to="/">Home</NavLink>
                </li>
                <li className=" font-bold font-barlow text-[.75rem] leading-[1rem] tracking-[.92px] text-[#83888F] hover:text-[#333D4B]">
                    <NavLink to="/about-us">About Us</NavLink></li>
                <li className=" font-bold font-barlow text-[.75rem] leading-[1rem] tracking-[.92px] text-[#83888F] hover:text-[#333D4B]">
                    <NavLink to="create-your-plan"> Create Your PLan</NavLink>
                </li>
            </ul>
            <i onClick={() => toggleMenu("explain")} className={clsx("w-4 h-4 hidden bg-[#333D4B] relative z-20", {
                "mb:block": menuState == "close",
                "mb:hidden": menuState == "explain"
            })} style={{ mask: `url(./assets/shared/mobile/icon-hamburger.svg) center/cover no-repeat`, WebkitMask: `url(./assets/shared/mobile/icon-hamburger.svg) center/cover no-repeat` }} />
            <i onClick={() => toggleMenu("close")} className={clsx("w-4 h-4 hidden bg-[#333D4B] relative z-20", {
                "mb:block": menuState == "explain",
                "mb:hidden": menuState == "close"
            })} style={{ mask: `url(./assets/shared/mobile/icon-close.svg) center/cover no-repeat`, WebkitMask: `url(./assets/shared/mobile/icon-close.svg) center/cover no-repeat` }} />

            <ul className={clsx("hidden flex-col justify-start items-center mb:gap-10 uppercase top-[6rem] left-0 fixed w-full h-full z-10 bg-gradient-to-b from-[#FEFCF7] to-[#FEFCF7]/50", {
                "mb:flex": menuState == "explain",
                "mb:hidden": menuState == "close"
            })}>
                <li className=" font-bold font-fra text-[1.5rem] leading-[1rem] tracking-[.92px] text-[#333D4B] mt-8">
                    <a href="#">Home</a>
                </li>
                <li className=" font-bold font-fra text-[1.5rem] leading-[1rem] tracking-[.92px] text-[#333D4B]">
                    <a href="#">About Us</a></li>
                <li className=" font-bold font-fra text-[1.5rem] leading-[1rem] tracking-[.92px] text-[#333D4B]">
                    <a href="#"> Create Your PLan</a>
                </li>
            </ul>
        </header>
    )
}