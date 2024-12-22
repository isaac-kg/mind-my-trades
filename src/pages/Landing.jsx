import About from "../component/about"
import Footer from "../component/Footer"
import Hero from "../component/hero"
import Reviews from "../component/Reviews"
import Services from "../component/Service"

const Landing = () => {
  return (
    <div>
      <Hero />
      <About />
      <Reviews />
      <Services />
      <Footer />
    </div>
  )
}

export default Landing;
