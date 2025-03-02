import React from "react";
import Footer from "./Footer";
import Header from "./Header";
export default function Layout({ children }: { children: React.ReactNode }): React.JSX.Element {
    return (
        <>
            <Header />
            <main>
                {children}
            </main>
            <Footer />
        </>
    )
}