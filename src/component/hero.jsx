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
      Explore the dynamic realm of cryptocurrencies where innovation meets opportunity. From staying updated with real-time market trends to accessing in-depth educational content,
      we're here to empower you every step of the way.
      <p className="mt-6">
      Ready to redefine your relationship with money? Embrace FooCoinExchange today and witness the transformation of finance - a world where empowerment, transparency, and boundless potential converge.
Begin your journey with FooCoinExchange and rewrite the story of money in the digital age!"
      </p>
      </div>
    </div>
  )
}

export default Hero
