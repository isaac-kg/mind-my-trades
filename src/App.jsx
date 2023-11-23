import { useState } from "react"
import "./App.css"
import CryptoCurrency from "./component/cryptocurrencies"
import About from "./component/about"
import Affiliate from "./component/affiliate"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="p-12">
      <div className="md:flex justify-center items-center">
        <div className="basis-1/2">
          <p className="font-semibold text-3xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
            architecto unde officiis.
          </p>
          <p className="my-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
            eaque sunt ipsum quo iusto aut.
          </p>
          <button className="bg-blue-400 text-white px-8 py-2 rounded-xl bg-gradient-to-r from-indigo-300 ">
            Get Started
          </button>
        </div>
        <div className="hidden md:block basis-1/2">
          ******** Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Repellat officia quia harum iusto cumque nisi, ea quibusdam nobis,
          dolorum sint tempore saepe maxime voluptatum. Atque facilis odit ullam
          corporis officia! ********
        </div>
      </div>

      
      <div className="mt-10"></div>
      <About />
      <CryptoCurrency />
      <Affiliate />
    </div>
  )
}

export default App
