declare global {
    interface HeroSection {
        bgImage: string,
        bgImageTablet: string,
        bgImageMobile: string,
        titleSize: string,
        title: string,
        desc: string,
        btnText?: string
    }
    interface CardWIcon {
        thumbnail: string,
        title: string,
        desc: string,
        textColor: string,
        bgColor?: string
    }
    interface StepCard {
        id: string
        title: string,
        desc: string,
    }
}
export { }