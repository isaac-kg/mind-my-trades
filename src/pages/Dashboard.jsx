import { useSelector } from 'react-redux'

const Dashboard = () => {

  const user = useSelector((state) => state?.authReducer?.user);

  const card = (title, value) => {
    return (
      <div className="basis-1/3 p-4 rounded-md bg-tn_gray_50">
        <p>{title}</p>
        <p className="mt-4 text-2xl">{value}</p>
      </div>
    )
  }
  return (
    <div>
      <p className="text-xl text-tn_blue_50 mb-4 capitalize">Hi, {user?.username} </p>
      <div className="flex gap-6 flex-col sm:flex-row">
        {card("P/L", "R 20.00")}
        {card("Win Ratio %", "33%")}
        {card("Number Of Trades", "150")}
      </div>
    </div>
  )
}

export default Dashboard
