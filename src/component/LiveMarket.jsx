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
    <div className="bg-tn_gray_50 p-6">
      <p className="text-3xl text-center">Live Market Data</p>
      <div className="bg-whit]e rounded-xl my-4 px-8 py-20 text-lg">
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
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur esse
          quo cum dolores porro nihil, quibusdam at unde eveniet tempore
          voluptates.
        </p>
        <button className="text-white py-3 px-5 bg-tn_green_50 border-tn_green_50 border-2 rounded-lg">
          Vist Trading View
        </button>
      </div>
    </div>
  )
}

export default LiveMarket
