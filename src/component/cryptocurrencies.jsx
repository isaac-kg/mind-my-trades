const CryptoCurrency = () => {
  return (
    <div className="relative overflow-x-auto rounded-xl">
      <table className="table-auto border-collapse border mt-10 w-full text-left ">
        <thead>
          <tr className="border-b border-gray-70 bg-gray-50">
            <th className="px-6 py-4">Song</th>
            <th className="px-6 py-4">Artist</th>
            <th className="px-6 py-4">Year</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b border-gray-70">
            <td className="px-6 py-4">
              The Sliding Mr. Bones (Next Stop, Pottersville)
            </td>
            <td className="px-6 py-4">Malcolm Lockyer</td>
            <td className="px-6 py-4">1961</td>
          </tr>
          <tr className="border-b border-gray-70">
            <td className="px-6 py-4">Witchy Woman</td>
            <td className="px-6 py-4">The Eagles</td>
            <td className="px-6 py-4">1972</td>
          </tr>
          <tr className="border-b border-gray-70">
            <td className="px-6 py-4">Shining Star</td>
            <td className="px-6 py-4">Earth, Wind, and Fire</td>
            <td className="px-6 py-4">1975</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default CryptoCurrency
