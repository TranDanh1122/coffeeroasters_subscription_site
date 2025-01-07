import "./styles.css"
import Layout from "./partials/Layout"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
function App() {

  return (
    <BrowserRouter basename="coffeeroasters_subscription_site/">
      <Layout>
        <Routes>
          <Route index element={<Home />} />
        </Routes>
      </Layout>

    </BrowserRouter>

  )
}

export default App
