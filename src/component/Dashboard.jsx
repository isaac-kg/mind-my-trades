const Dashboard = () => {
  return (
    <div className="flex">
      <div className="h-screen bg-tn_blue_50 w-[250px] rounded-xl text-white flex flex-col">
        <div className="px-2">
          <img
            className="max-h-[50px] mt-5  pl-0"
            src="/icons/logo.svg"
            alt=""
            srcset=""
          />
        </div>
        <div className="mt-6">
          <a href="" className="flex gap-2 hover:bg-[#7C51D1]  px-2 py-4">
            <img className="h-6" src="/icons/dashboard/dashboard.svg" alt="" />
            <p>Dashboard</p>
          </a>

          <a href="" className="flex gap-2 hover:bg-[#7C51D1]  px-2 py-4">
            <img className="h-6" src="/icons/dashboard/journal.svg" alt="" />
            <p>Journal</p>
          </a>

          <a href="" className="flex gap-2 hover:bg-[#7C51D1]  px-2 py-4">
            <img
              className="h-6"
              src="/icons/dashboard/tradingplan.svg"
              alt=""
            />
            <p>Trading Plan</p>
          </a>

          <a className="flex gap-2 hover:bg-[#7C51D1]  px-2 py-4">
            <img className="h-6" src="/icons/dashboard/trade.svg" alt="" />
            <p>Trades</p>
          </a>

          <a href="" className="flex gap-2 hover:bg-[#7C51D1]  px-2 py-4">
            <img className="h-6" src="/icons/dashboard/goal.svg" alt="" />
            <p>Goals</p>
          </a>
        </div>

        <a href="" className="flex gap-2 hover:bg-[#7C51D1]  px-2 py-4">
          <img className="h-6" src="/icons/dashboard/journal.svg" alt="" />
          <p>Journal</p>
        </a>

        <div className="flex gap-2 hover:bg-[#7C51D1]  px-2 py-4 mt-auto">
          <img className="h-6" src="/icons/dashboard/logout.svg" alt="" />
          <p>Sign Out</p>
        </div>
      </div>
      <div className="flex-1 p-4 bg-gray-100">
        <div className="bg-tn_blue_50 flex justify-between rounded-3xl text-white items-center p-3">
          <p className="text-2xl">Dashboard</p>
          <div className="flex items-center gap-2">
            <div className="w-12 h-12 rounded-full bg-tn_gray_50 text-black flex">
              <p className="m-auto">S M </p>
            </div>
            <div>
              <p className="text-xs font-medium">Isaac Malebana</p>
              <p className="text-xs">isaacmalebana@gmail.com</p>
            </div>
          </div>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div class="bg-white shadow-md rounded-lg p-6">
            <h3 class="text-xl font-semibold text-purple-800 mb-4">
              Card Title
            </h3>
            <p class="text-gray-600 mb-4">
              This is some descriptive text inside the card. It provides context
              to the user.
            </p>
            <button class="bg-purple-700 text-white py-2 px-4 rounded hover:bg-purple-800 focus:outline-none focus:ring-2 focus:ring-purple-500">
              Action Button
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
