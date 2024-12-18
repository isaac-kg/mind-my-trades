const Hero = () => {
  return (
    <div className="md:flex justify-center items-center h-screen relative">
      <div className="basis-3/4 h-full bg-tn_blue_50 flex items-center">
        <div>
          <p className="text-white text-4xl">
            Lorem ipsum dolor sit amet consectetur.
          </p>
          <p className="text-white text-lg my-12">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <div>
            <button className="text-white py-3 px-5 bg-tn_green_50 border-tn_green_50 border-2 rounded-lg">
              Start Now
            </button>
            <button className="text-white py-3 px-5 border-tn_green_50 border-2  rounded-lg ml-8">
              Contact Us
            </button>
          </div>
        </div>
      </div>
      <div className="hidden md:block basis-1/4 h-full bg-tn_gray_50"></div>
      <div className="absolute right-44">
        <img className="max-h-[450px]" src="/icons/phone.svg" alt="" srcset="" />
      </div>
    </div>
  )
}

export default Hero
