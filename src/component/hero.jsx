const Hero = () => {
  return (
    <div className="md:flex justify-center items-center">
      <div className="basis-1/2">
        <p className="font-semibold text-3xl">
          Welcome to FooCoinExchange, your gateway to the world of digital finance!
        </p>
        <p className="my-10">
        Let's navigate the world of cryptocurrencies together and shape the future of finance.
        Start your exploration today with us and experience the evolution of finance at firsthand.
        </p>
        <button className="bg-blue-400 text-white px-8 py-2 rounded-xl bg-gradient-to-r from-indigo-300 ">
          Get Started
        </button>
      </div>
      <div className="hidden md:block basis-1/2">
      {/* <img className="mx-auto" src="public/icons/crypto.svg" /> */}
      </div>
    </div>
  )
}

export default Hero
