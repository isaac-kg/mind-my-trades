const About = () => {
  return (
    <div className="md:flex items-center">
      <div className="md:flex flex-wrap items-center basis-1/2">
        <div className="basis-1/2 p-4 bg-indigo-500 shadow-lg shadow-indigo-500/50 rounded-lg text-center mt-4">
          <div></div>
          <p className="font-medium my-2">Debit/Credit Card</p>
          <p>You can use any card.</p>
        </div>

        <div className="basis-1/2 p-4 bg-indigo-500 shadow-lg shadow-indigo-500/50 rounded-lg text-center mt-4">
          <div></div>
          <p className="font-medium my-2">Debit/Credit Card 0</p>
          <p>You can use any card.</p>
        </div>

        <div className="basis-1/2 p-4 bg-indigo-500 shadow-lg shadow-indigo-500/50 rounded-lg text-center mt-4">
          <div></div>
          <p className="font-medium my-2">Debit/Credit Card 1</p>
          <p>You can use any card.</p>
        </div>
      </div>


      <div className="basis-1/2 p-6">
        <p className="font-medium text-2xl">Pay with easy</p>
        <p className="mt-4 mb-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat libero dolor exercitationem corporis dolores neque. Recusandae ducimus pariatur a doloribus illo.</p>
        <button className="bg-blue-400 text-white px-8 py-2 rounded-xl bg-gradient-to-r from-indigo-300 ">Get Started</button>

      </div>
    </div>
  )
}

export default About
