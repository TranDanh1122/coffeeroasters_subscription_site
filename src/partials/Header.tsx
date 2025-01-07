import React from "react";
export default function Header(): React.JSX.Element {
    return (<>    <header className="container flex flex-nowrap justify-between items-center w-full py-12">
        <img src="./assets/shared/desktop/logo.svg" alt="logo" className="w-[16rem] h-7 object-cover" style={{ aspectRatio: "236/26" }} />
        <ul className="flex flex-nowrap justify-start items-center gap-8">
            <li className=" font-bold font-barlow text-[.75rem] leading-[1rem] tracking-[.92px] text-[#83888F]">
                <a href="#">Home</a>
            </li>
            <li className=" font-bold font-barlow text-[.75rem] leading-[1rem] tracking-[.92px] text-[#83888F]">
                <a href="#">About Us</a></li>
            <li className=" font-bold font-barlow text-[.75rem] leading-[1rem] tracking-[.92px] text-[#83888F]">
                <a href="#"> Create Your PLan</a>
            </li>
        </ul>
    </header></>)
}