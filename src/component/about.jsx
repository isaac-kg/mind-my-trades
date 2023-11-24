const About = () => {
  return (
    <div className="md:flex items-center">
      <div className="md:flex items-center flex-wrap basis-1/2">
        <div className="basis-1/2">
        <div className="card md:mr-4 mt-8">
          <div></div>
          <p className="font-medium my-2">Debit/Credit Card</p>
          <p>Make transactions with your debit or credit Card.</p>
        </div>

        <div className="card md:mr-4 mt-8">
          <div></div>
          <p className="font-medium my-2">Bank Transfer</p>
          <p>Transfer funds with ease via any bank.</p>
        </div>
        </div>

        <div className="basis-1/2">
          <div className="card md:ml-4 mt-8">
            <div></div>
            <p className="font-medium my-2">PayPal</p>
            <p>Seamless payments through PayPal.</p>
          </div>
        </div>
      </div>


      <div className="basis-1/2 p-6">
        <p className="font-medium text-2xl">Pay with easy</p>
        <p className="mt-4 mb-8">
        Experience the simplicity of transactions. Use your favorite payment method effortlessly and embrace a future where transactions are simple, swift, and secure.
        </p>
        <button className="button ">Get Started</button>

      </div>
    </div>
  )
}

export default About
