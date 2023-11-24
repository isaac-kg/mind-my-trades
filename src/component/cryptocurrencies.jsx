const CryptoCurrency = () => {
  return (
    <div>
    <p className="text-center text-2xl">Put your money into well-known cryptocurrencies</p>
    <div className="relative overflow-x-auto rounded-xl">
      <table className="table-auto border-collapse border mt-10 w-full text-left ">
        <thead>
          <tr className="border-b border-gray-70 bg-gray-50">
            <th className="px-6 py-4">CryptoCurrencies</th>
            <th className="px-6 py-4">Price</th>
            <th className="px-6 py-4">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b border-gray-70">
            <td className="px-6 py-4">
              <span className="flex items-center gap-x-4">
                <img src="public/icons/aerium.png" /> Aerium
              </span>
            </td>
            <td className="px-6 py-4">Malcolm Lockyer</td>
            <td className="px-6 py-4">
              <button className="button ">Buy</button>
            </td>
          </tr>
          <tr className="border-b border-gray-70">
            <td className="px-6 py-4">
              <span className="flex items-center gap-x-4">
                <img src="public/icons/bitcoin.png" /> Bitcoin
              </span>
            </td>
            <td className="px-6 py-4">The Eagles</td>
            <td className="px-6 py-4">
              <button className="button ">Sell</button>
            </td>
          </tr>
          <tr className="border-b border-gray-70">
            <td className="px-6 py-4">
              <span className="flex items-center gap-x-4">
                <img src="public/icons/ethereum.png" />
                Ethereum
              </span>
            </td>
            <td className="px-6 py-4">Earth, Wind, and Fire</td>
            <td className="px-6 py-4">
              <button className="button ">Buy</button>
            </td>
          </tr>
          <tr className="border-b border-gray-70">
            <td className="px-6 py-4">
              <span className="flex items-center gap-x-4">
                <img src="public/icons/frazcoin.png" />
                Frazcoin
              </span>
            </td>
            <td className="px-6 py-4">Earth, Wind, and Fire</td>
            <td className="px-6 py-4">
              <button className="button ">Sell</button>
            </td>
          </tr>
          <tr className="border-b border-gray-70">
            <td className="px-6 py-4">
              <span className="flex items-center gap-x-4">
                <img src="public/icons/futcoin.png" />
                Futcoin
              </span>
            </td>
            <td className="px-6 py-4">Earth, Wind, and Fire</td>
            <td className="px-6 py-4">
              <button className="button ">Buy</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    </div>
  )
}

export default CryptoCurrency
