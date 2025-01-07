import "./styles.css"
import Layout from "./partials/Layout"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import AboutUs from "./pages/AboutUs"
import Subscribe from "./pages/Subscribe"
function App() {

  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/create-your-plan" element={<Subscribe />} />
        </Routes>
      </Layout>

    </BrowserRouter>

  )
}

export default App
