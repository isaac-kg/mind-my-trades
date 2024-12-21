const Footer = () => {
  return (
    <div className="">
      <div className="bg-tn_gray_50">
        <div className="mx-auto md:text-left md:flex justify-between items-center px-6 lg:px-32 py-16">
          <div className="md:w-7/12">
            <p className="text-4xl mb-3">
              Create an account to journal your trades.
            </p>
            <p>
              Track your progress, analyze your performance, and take control of
              your trading journey. Join now and elevate your trading to the
              next level!
            </p>
          </div>

          <button className="text-white py-1.5 px-5 bg-tn_green_50 border-tn_green_50 border-2 rounded-lg mt-6">
            Create an account
          </button>
        </div>
      </div>
      <div className="w-full bg-tn_blue_50 text-whie px-6 lg:px-32 py-16 text-white">
        <div className="md:flex justify-between flex-wrap">
          <div className="sm:basis-1/2 md:basis-1/4">
            <p className="font-semibold uppercase mt-10 mb-3">Contact Us</p>
            <p>About Us</p>
            <p>Privacy Policy</p>
            <p>Terms of Service</p>
            <p>admin@mindmytrades.com</p>
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
            <p></p>
          </div>
          <div className="md:basis-1/2 lg:basis-1/4">
            <p className="font-semibold uppercase mt-10 mb-3">
              Email Subscription
            </p>
            <p>Subscribe to get our latest information about mindmytrades.</p>
            <div className="md:flex flex-wrap gap-x-2">
              <input
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mt-6"
                placeholder="Enter your email"
              />
                <button className="text-white py-1.5 px-5 bg-tn_green_50 border-tn_green_50 border-2 rounded-lg mt-4 w-full">
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
