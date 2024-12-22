const Hero = () => {
  return (
    <div className="lg:flex justify-center items-center h-screen relative">
      <div className="basis-3/4 h-full bg-tn_blue_50 px-6 lg:pl-32 flex flex-col">
        <div className="flex justify-between mt-6 gap-4 items-center">
          <div>
            <img
              className="max-h-[50px]"
              src="/icons/logo.svg"
              alt=""
              srcset=""
            />
          </div>
          <button className="text-white py-2 px-5 bg-tn_green_50 border-tn_green_50 border-2 rounded-lg block lg:hidden">
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
            <button
              className="text-white py-3 px-5 bg-tn_green_50 border-tn_green_50 border-2 rounded-lg hover:border-tn_green_100 focus:outline-none"
            >
              Get Started
            </button>
            <button
              className="text-white py-3 px-5 border-tn_green_50 border-2 rounded-lg ml-8 focus:outline-none"
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>
      <div className="hidden lg:flex basis-1/4 h-full bg-tn_gray_50 justify-end">
        <div className="pr-32 mt-6">
          <button className="text-white py-3 px-5 bg-tn_green_50 border-tn_green_50 border-2 rounded-lg">
            Sign In
          </button>
        </div>
      </div>
      <div className="absolute right-0 hidden lg:block">
        <img
          className="max-h-[450px] lg:pr-32"
          src="/icons/phone.svg"
          alt=""
          srcset=""
        />
      </div>
    </div>
  )
}

export default Hero
