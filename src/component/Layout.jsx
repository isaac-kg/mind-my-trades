import { useState } from "react"
import { Outlet, Link, useLocation } from "react-router-dom"

const Layout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const location = useLocation()

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  const navItems = [
    {
      link: "/journaler/home",
      icon: "dashboard.svg",
      text: "Dashboard",
    },
    {
      link: "/journaler/journal",
      icon: "journal.svg",
      text: "Journal",
    },
    {
      link: "/journaler/trading-plan",
      icon: "tradingplan.svg",
      text: "Trading Plan",
    },
    { link: "/journaler/trades", icon: "trade.svg", text: "Trades" },
    {
      link: "/journaler/trading-goal",
      icon: "goal.svg",
      text: "Goals",
    },
  ]

  const currentPage = () => {
    switch (location.pathname) {
      case "/journaler/home":
        return "Dashboard"
      case "/journaler/journal":
        return "Journal"
      case "/journaler/trading-plan":
        return "Trading Plan"
      case "/journaler/trades":
        return "Trades"
      case "/journaler/trading-goal":
        return "Goals"
      default:
        return "Dashboard"
    }
  }

  return (
    <div className="flex">
      <div
        className={`${
          isSidebarOpen
            ? "translate-x-0 "
            : "-translate-x-full lg:translate-x-0"
        } fixed lg:relative inset-0 z-10 transition-transform duration-300 bg-tn_blue_50 w-[250px] h-screen text-white flex flex-col transform`}
      >
        <div className="px-2 flex items-center justify-between mt-5">
          <img className="max-h-[32px]" src="/icons/logo.svg" alt="Logo" />
          <button
              onClick={toggleSidebar}
              className="block lg:hidden text-xl bg-transparent text-white focus:outline-none mr-3"
            >
              {isSidebarOpen ? (
                <span>&#x2715;</span>
              ) : (
                null
              )}
            </button>
        </div>
        <div className="mt-6">
          {navItems.map((item, index) => (
            <Link
              key={index}
              to={item.link}
              className={`flex gap-2 px-3 py-4 ${
                location.pathname === item.link
                  ? "bg-purple-500"
                  : "hover:bg-purple-500"
              }`}
            >
              <img
                className="h-6"
                src={`/icons/dashboard/${item.icon}`}
                alt={item.text}
              />
              <p>{item.text}</p>
            </Link>
          ))}
        </div>
        <div className="flex gap-2 hover:bg-purple-500 rounded-md px-3 py-4 mt-auto">
          <img className="h-6" src="/icons/dashboard/logout.svg" alt="Logout" />
          <p>Sign Out</p>
        </div>
      </div>

      <div className="flex-1 flex flex-col max-h-screen">
        <div className="bg-gradient-to-r from-purple-700 to-purple-500 flex justify-between text-white items-center p-3">
          <div className="text-2xl font-bold">
            <button
              onClick={toggleSidebar}
              className="text-xl bg-transparent text-white focus:outline-none mr-3"
            >
              {isSidebarOpen ? (
                null
              ) : (
                <span>&#9776;</span> // Hamburger Icon (☰)
              )}
            </button>
            {currentPage()}
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

        <div className="overflow-y-auto flex-1 p-4">
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default Layout
