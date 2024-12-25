import { useNavigate } from "react-router-dom"
import { auth } from "../firebase-config"
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth"

const Hero = () => {
  const navigate = useNavigate()
  const provider = new GoogleAuthProvider();

  const handleSignInClick = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
          navigate("/journaler/home")
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code
        const errorMessage = error.message
        console.log("1. Error: ", errorCode)
        console.log("2. Error: ", errorMessage)
       
      })
    
  }

  return (
    <div className="lg:flex justify-center items-center h-screen relative">
      <div className="basis-3/4 h-full bg-tn_blue_50 px-6 lg:pl-32 flex flex-col">
        <div className="flex justify-between mt-6 gap-4 items-center">
          <div>
            <img
              className="max-h-[32px]"
              src="/icons/logo.svg"
              alt=""
            />
          </div>
          <button
            className="text-white py-2 px-5 bg-tn_green_50 border-tn_green_50 border-2 rounded-lg block lg:hidden"
            onClick={handleSignInClick}
          >
            Sign In
          </button>
        </div>
        <div className="z-10 my-auto">
          <p className="text-white text-4xl">
            Trading Journal for Consistent <br /> Growth.
          </p>
          <p className="text-white text-lg my-12">
            Journal your trades, uncover insights, and grow into <br /> a
            confident trader.
          </p>
          <div>
            <button className="text-white py-3 px-5 bg-tn_green_50 border-tn_green_50 border-2 rounded-lg hover:border-tn_green_100 focus:outline-none">
              Get Started
            </button>
            <button className="text-white py-3 px-5 border-tn_green_50 border-2 rounded-lg ml-8 focus:outline-none">
              Contact Us
            </button>
          </div>
        </div>
      </div>
      <div className="hidden lg:flex basis-1/4 h-full bg-tn_gray_50 justify-end">
        <div className="pr-32 mt-6">
          <button
            className="text-white py-3 px-5 bg-tn_green_50 border-tn_green_50 border-2 rounded-lg"
            onClick={handleSignInClick}
          >
            Sign In
          </button>
        </div>
      </div>
      <div className="absolute right-0 hidden lg:block">
        <img
          className="max-h-[450px] lg:pr-32"
          src="/icons/phone.svg"
          alt=""
        />
      </div>
    </div>
  )
}

export default Hero
