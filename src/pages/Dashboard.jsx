import { useSelector } from "react-redux"

const Dashboard = () => {
  const user = useSelector((state) => state?.authReducer?.user)

  const card = (title, value) => {
    return (
      <div className="basis-1/3 p-4 rounded-md bg-tn_gray_50">
        <p>{title}</p>
        <p className="mt-4 text-2xl">{value}</p>
      </div>
    )
  }

  const statsCard = (label, value, background = false) => {
    return (
      <p
        className={`${
          background ? `bg-white` : ``
        } py-1.5 px-3  rounded-md flex justify-between gap-y-2 gap-x-4 flex-wrap`}
      >
        <span>{label}</span>
        <span>{value}</span>
      </p>
    )
  }

  return (
    <div>
      <p className="text-xl text-tn_blue_50 mb-4 capitalize">
        Hi, {user?.username}{" "}
      </p>
      <div className="flex gap-6 flex-col sm:flex-row">
        {card("P/L", "R 0.00")}
        {card("Win Ratio %", "0%")}
        {card("Number Of Trades", "0")}
      </div>
      <div className="flex gap-6 flex-col sm:flex-row mt-10">
        <div className="p-4 rounded-md bg-tn_gray_50 basis-2/3">
        </div>
        <div className="p-4 rounded-md bg-tn_gray_50 basis-1/3">
          <p className="font-bold">Trading Statistics</p>
          <hr className="border-slate-200 border-2 mt-2 mb-6" />
          <div className="px-4">
            {statsCard("Profit Target", "0", true)}
            {statsCard("Win Rate", "0")}
            {statsCard("Average Win", "0", true)}
            {statsCard("Average Loss", "0")}
            {statsCard("Best Trade", "0", true)}
            {statsCard("Worst Trade", "0")}
            {statsCard("Longs Won", "0", true)}
            {statsCard("Shorts Won", "0")}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
