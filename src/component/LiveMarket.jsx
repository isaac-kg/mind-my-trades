import React from "react"
const LiveMarket = () => {
  const instruments = [
    {
      symbol: 4,
      votalility: 884.24,
      price: 11.88,
      change: 765.42,
      marketCap: "33.5 M",
    },
    {
      symbol: 34,
      votalility: 114.24,
      price: 14.88,
      change: 22.42,
      marketCap: "12.5 M",
    },
    {
      symbol: 4,
      votalility: 884.24,
      price: 11.88,
      change: 765.42,
      marketCap: "33.5 M",
    },
    {
      symbol: 34,
      votalility: 114.24,
      price: 14.88,
      change: 22.42,
      marketCap: "12.5 M",
    },
    {
      symbol: 4,
      votalility: 884.24,
      price: 11.88,
      change: 765.42,
      marketCap: "33.5 M",
    },
    {
      symbol: 34,
      votalility: 114.24,
      price: 14.88,
      change: 22.42,
      marketCap: "12.5 M",
    },
  ]
  return (
    <div className="bg-tn_blue_gradient px-6 lg:px-32 py-20">
      <p className="text-3xl text-center text-tn_blue_50">Live Market Data</p>
      <div className="bg-white rounded-xl my-8 px-8 py-20 text-lg">
        <table className="w-full">
          <thead>
            <tr className="text-left">
              <th className="text-left">Symbol</th>
              <th>Volatility</th>
              <th>Price</th>
              <th>Change</th>
              <th>Market Cap</th>
            </tr>
          </thead>
          <tbody>
            {instruments.map((instrument, index) => {
              return (
                <tr key={index}>
                  <td>{instrument.symbol}</td>
                  <td>{instrument.votalility}</td>
                  <td>{instrument.price}</td>
                  <td>{instrument.change}</td>
                  <td>{instrument.marketCap}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>

      <div className="flex items-center gap-4">
        <p className="text-white">
          Explore a suite of cutting-edge tools and features designed to help
          you analyze markets with precision, track your performance
          effortlessly, and gain a competitive edge in your trading journey.
        </p>
        <div>
          <button className="text-white py-3 px-5 bg-tn_green_50 border-tn_green_50 border-2 rounded-lg whitespace-nowrap">
            Vist Trading View
          </button>
        </div>
      </div>
    </div>
  )
}

export default LiveMarket
