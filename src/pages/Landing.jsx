import { Toaster } from "@/components/ui/toaster"
import About from "../components/About"
import Footer from "../components/Footer.jsx"
import Hero from "../components/Hero"
import Reviews from "../components/Reviews"
import Services from "../components/Service"

const Landing = () => {
  return (
    <div>
      <Hero />
      <About />
      <Reviews />
      <Services />
      <Footer />
      <Toaster />
    </div>
  )
}

export default Landing;
