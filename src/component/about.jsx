const About = () => {
  return (
    <div className="my-20">
      <div className="text-center">
        <p className="text-2xl text-tn_blue_50">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <p className="my-8">Lorem ipsum dolor sit amet consectetur.</p>
        <button className="text-white py-3 px-5 bg-tn_green_50 border-tn_green_50 border-2 rounded-lg">
          Start Now
        </button>
      </div>
      <div className="md:flex justify-center items-center mt-10">
        <div className="basis-1/2">
          <img src="/icons/man_with_stats.svg" alt="" />
        </div>
        <div className="basis-1/2">
          <p className="text-xl mb-4 text-tn_blue_50">Lorem ipsum dolor sit.</p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt,
            animi!
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt,
            animi!
          </p>
        </div>
      </div>
    </div>
  )
}
export default About
