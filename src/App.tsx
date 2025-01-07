import "./styles.css"
import Layout from "./partials/Layout"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import AboutUs from "./pages/AboutUs"
function App() {

  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
        </Routes>
      </Layout>

    </BrowserRouter>

  )
}

export default App
