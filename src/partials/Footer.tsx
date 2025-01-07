import React from "react";
export default function Footer(): React.JSX.Element {
    return (
        <footer className="container mb:max-w-none bg-[#2C343E] w-full flex items-center justify-start p-12 rounded-lg tb:flex-col tb:justify-center tb:gap-8 mb:flex-col mb:justify-center mb:items-center mb:gap-6 ">
            <img src="./assets/shared/desktop/logo-footer.svg" alt="logo" className="w-[16rem] h-7 object-cover" style={{ aspectRatio: "236/26" }} />
            <ul className="flex mb:flex-col flex-nowrap justify-start items-center gap-8 ml-[6.5rem] tb:ml-0 mb:ml-0 uppercase  ">
                <li className=" font-bold font-barlow text-[.75rem] leading-[1rem] tracking-[.92px] text-[#83888F] hover:text-[#FEFCF7]">
                    <a href="#">Home</a>
                </li>
                <li className=" font-bold font-barlow text-[.75rem] leading-[1rem] tracking-[.92px] text-[#83888F] hover:text-[#FEFCF7]">
                    <a href="#">About Us</a></li>
                <li className=" font-bold font-barlow text-[.75rem] leading-[1rem] tracking-[.92px] text-[#83888F] hover:text-[#FEFCF7]">
                    <a href="#"> Create Your PLan</a>
                </li>
            </ul>
            <ul className="flex flex-nowrap justify-start tb:justify-center items-center gap-8  uppercase ml-auto tb:ml-0 tb:mt-auto mb:ml-0">
                <li>
                    <a href="#"><i className="bg-white w-6 h-6 block hover:bg-[#FDD6BA]" style={{ mask: `url(./assets/shared/desktop/icon-facebook.svg) center / cover no-repeat`, WebkitMask: `url(./assets/shared/desktop/icon-facebook.svg) center / cover no-repeat` }}></i></a>
                </li>
                <li>
                    <a href="#"><i className="bg-white w-6 h-6 block hover:bg-[#FDD6BA]" style={{ mask: `url(./assets/shared/desktop/icon-instagram.svg) center / cover no-repeat`, WebkitMask: `url(./assets/shared/desktop/icon-instagram.svg) center / cover no-repeat` }}></i></a>
                </li>
                <li>
                    <a href="#"><i className="bg-white w-6 h-6 block hover:bg-[#FDD6BA]" style={{ mask: `url(./assets/shared/desktop/icon-twitter.svg) center / cover no-repeat`, WebkitMask: `url(./assets/shared/desktop/icon-twitter.svg) center / cover no-repeat` }}></i></a>
                </li>
            </ul>
        </footer>)
}