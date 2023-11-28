const Footer = () => {
  return (
    <div className="flex mt-32 md:mt-48 p-6">
      <div className="mt-auto  w-full">
        <div className="card  w-11/12 mx-auto text-white md:text-left md:flex justify-between items-center py-10">
          <div className="md:w-7/12">
            <p className="text-4xl mb-3">
              Create your account to join crypto trading and investing.
            </p>
            <p>
              Unlock the future of finance! Join us now and embark on a journey
              into the world of cryptocurrency.
            </p>
          </div>

          <button className="button bg-white">Get Started</button>
        </div>
        <div className="md:flex justify-between flex-wrap pt-20">
          <div className="sm:basis-1/2 md:basis-1/4">
            <p className="font-semibold uppercase mt-10 mb-3">Contact Us</p>
            <p>About Us</p>
            <p>Privacy Policy</p>
            <p>Terms of Service</p>
            <p>admin@foocoinexchange.com</p>
            <p>+27 012 123 1234</p>
          </div>
          <div className="md:basis-1/2 md:basis-1/4">
            <p className="font-semibold uppercase mt-10 mb-3">Company</p>
            <p>About</p>
            <p>Support</p>
            <p>Blog</p>
            <p>Careers</p>
            <p>Affiliates</p>
          </div>
          <div className="md:basis-1/2 md:basis-1/4">
            <p className="font-semibold uppercase mt-10 mb-3">Support</p>
            <p>Help Center</p>
            <p>Contact Us</p>
            <p>Create Acoount</p>
            <p>Payment Methods</p>
            <p>Supported Crypto</p>
            <p></p>
          </div>
          <div className="md:basis-1/2 lg:basis-1/4">
            <p className="font-semibold uppercase mt-10 mb-3">
              Email Subscription
            </p>
            <p>
              Subscribe to get our latest information about FooCoinExchange.
            </p>
            <div className="md:flex flex-wrap gap-x-4">
              <input
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mt-6 w-40"
                placeholder="Enter your email"
              />
              <div></div>
              <button className="button whitespace-nowrap mt-6 w-full">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
