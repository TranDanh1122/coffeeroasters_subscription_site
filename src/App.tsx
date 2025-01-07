import "./styles.css"
import Layout from "./partials/Layout"
import Hero from "./components/Hero"
const heroData: HeroSection = {
  bgImage: "./assets/home/desktop/image-hero-coffeepress.jpg",
  bgImageMobile: "./assets/home/mobile/image-hero-coffeepress.jpg",
  bgImageTablet: "./assets/home/tablet/image-hero-coffeepress.jpg",
  titleSize: "text-[4.5rem] tb:text-[3rem] mb:text-[2.5rem]",
  title: "Great coffee made simple.",
  desc: "Start your mornings with the world’s best coffees. Try our expertly curated artisan coffees from our best roasters delivered directly to your door, at your schedule.",
  btnText: "Create your plan"
}
const collectionData: { thumbnail: string, title: string, desc: string }[] = [
  { thumbnail: "./assets/home/desktop/image-gran-espresso.png", title: "Gran Espresso", desc: "Light and flavorful blend with cocoa and black pepper for an intense experience" },
  { thumbnail: "./assets/home/desktop/image-planalto.png", title: "Planalto", desc: "Brazilian dark roast with rich and velvety body, and hints of fruits and nuts" },
  { thumbnail: "./assets/home/desktop/image-piccollo.png", title: "Piccollo", desc: "Mild and smooth blend featuring notes of toasted almond and dried cherry" },
  { thumbnail: "./assets/home/desktop/image-danche.png", title: "Danche", desc: "Ethiopian hand-harvested blend densely packed with vibrant fruit notes" },

]
function App() {

  return (<>
    <Layout>
      <Hero section={heroData} />
      <section className="container mb:max-w-none py-40">
        <h2 className="relative z-0 font-black font-fra text-[10rem] tb:text-[4.5rem] mb:text-[2.5rem] leading-[4.5rem] text-[#83888F] text-opacity-50 text-center">
          our collection
          <div className="absolute w-full h-[10rem] tb:h-[4.5rem] mb:text-[2.5rem] top-0 left-0 bg-gradient-to-b from-[#FEFCF7]/0 to-[#FEFCF7]"> </div>
        </h2>
        <div className="flex justify-center items-center relative z-10 gap-8 tb:flex-col mb:flex-col">
          {
            collectionData.map((el: { thumbnail: string, title: string, desc: string }) =>
              <div className="flex tb:gap-9 gap-[4.5rem] mb:gap-6  tb:items-center tb:flex-row flex-col">
                <img src={el.thumbnail} alt={el.title} className="w-[calc(16rem-1.5rem)] mb:w-[12.5rem] h-[12.5rem] mb:h-[10rem] object-cover aspect-auto mx-auto" />
                <div className="flex flex-col gap-6 mb:gap-4">
                  <h3 className="text-[1.5rem] text-center tb:text-left text-[#333D4B] font-black font-fra">{el.title}</h3>
                  <p className="text-[#333D4B] text-center tb:text-left leading-6">
                    {el.desc}
                  </p>
                </div>

              </div>)
          }

        </div>
      </section>
    </Layout>
  </>)
}

export default App
