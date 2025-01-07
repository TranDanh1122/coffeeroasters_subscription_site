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
function App() {

  return (<>
    <Layout>
      <Hero section={heroData} />
      <section>

      </section>
    </Layout>
  </>)
}

export default App
