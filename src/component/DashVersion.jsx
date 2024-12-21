import { useState } from "react"

const DashboardVersion = () => {
  // State to track if sidebar is open or closed
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  return (
    <div className="flex">
      {/* Sidebar */}
      <div
        className={`${
          isSidebarOpen
            ? "translate-x-0 "
            : "-translate-x-full  lg:translate-x-0"
        } fixed lg:relative inset-0 z-10 transition-transform duration-300 bg-tn_blue_50 w-[250px] h-screen rounded-xl text-white flex flex-col transform`}
      >
        <div className="px-2">
          <img className="max-h-[50px] mt-5" src="/icons/logo.svg" alt="Logo" />
        </div>
        <div className="mt-6">
          {/* Sidebar Menu Items */}
          {[
            { href: "", icon: "dashboard.svg", text: "Dashboard" },
            { href: "", icon: "journal.svg", text: "Journal" },
            { href: "", icon: "tradingplan.svg", text: "Trading Plan" },
            { href: "", icon: "trade.svg", text: "Trades" },
            { href: "", icon: "goal.svg", text: "Goals" },
          ].map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="flex gap-2 hover:bg-purple-500 rounded-md px-3 py-4"
            >
              <img
                className="h-6"
                src={`/icons/dashboard/${item.icon}`}
                alt=""
              />
              <p>{item.text}</p>
            </a>
          ))}
        </div>
        {/* Sign Out Button */}
        <div className="flex gap-2 hover:bg-purple-500 rounded-md px-3 py-4 mt-auto">
          <img className="h-6" src="/icons/dashboard/logout.svg" alt="" />
          <p>Sign Out</p>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 p-4 bg-gray-100">
        {/* Top Bar */}
        <div className="bg-gradient-to-r from-purple-700 to-purple-500 flex justify-between rounded-3xl text-white items-center p-3">
          <div className="text-2xl font-bold">
            {/* Toggle Button for Sidebar */}
            <button
              onClick={toggleSidebar}
              className="text-2xl bg-transparent text-white focus:outline-none"
            >
              {isSidebarOpen ? (
                <span>&#x2715;</span> // Close Icon (X)
              ) : (
                <span>&#9776;</span> // Hamburger Icon (☰)
              )}
            </button>
            Dashboard
          </div>
          <div className="flex items-center gap-2">
            <div className="w-12 h-12 rounded-full bg-gray-300 text-black flex">
              <p className="m-auto">S M</p>
            </div>
            <div>
              <p className="text-sm font-medium">Isaac Malebana</p>
              <p className="text-xs">isaacmalebana@gmail.com</p>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-xl font-semibold text-purple-700 mb-4">
              Card Title
            </h3>
            <p className="text-gray-600 mb-4">
              This is some descriptive text inside the card. It provides context
              to the user.
            </p>
            <button className="bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-400">
              Action Button
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DashboardVersion
