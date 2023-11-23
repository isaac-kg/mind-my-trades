const Hero = () => {
  return (
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
  )
}

export default Hero
