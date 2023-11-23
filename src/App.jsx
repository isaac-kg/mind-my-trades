import { useState } from "react"
import "./App.css"
import CryptoCurrency from "./component/cryptocurrencies"
import About from "./component/about"
import Affiliate from "./component/affiliate"
import Hero from "./component/hero"
import Footer from "./component/footer"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="p-12">
      
      <Hero />
      <About />
      <CryptoCurrency />
      <Footer />
    </div>
  )
}

export default App
