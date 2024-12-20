const About = () => {
  return (
    <div className="my-20  px-6 lg:px-32 text-[#415076]">
      <div className="text-center">
        <p className="text-3xl text-tn_blue_50">
          Platform to help you analyze, track, and improve your trading
          performance with ease.
        </p>
        <p className="my-8">
          You focus on trading while we focus on helping you get better.
        </p>
        <button className="text-white py-3 px-5 bg-tn_green_50 border-tn_green_50 border-2 rounded-lg">
          Start Now
        </button>
      </div>
      <div className="md:flex justify-center items-center mt-10 gap-8">
        <div className="basis-1/2">
          <img src="/icons/man_with_stats.svg" alt="" />
        </div>
        <div className="basis-1/2">
          <p className="text-3xl mb-4 text-tn_blue_50">Mind My Trades</p>
          <p className="mb-4">
            MindMyTrades is your trusted trading companion, helping traders of
            all levels journal trades, analyze performance, and build smarter
            strategies.{" "}
          </p>

          <div className="flex gap-2 items-center">
            <img className="h-6" src="/icons/check.svg" alt="" />
            <span className="text-tn_blue_50 text-xl">
              Simplified Trade Journaling
            </span>
          </div>
          <p className="ml-10 mb-4 mt-1">
            Quickly log your trades with essential details like entry/exit
            points, strategy used, and result.
          </p>

          <div className="flex gap-2 items-center">
            <img className="h-6" src="/icons/check.svg" alt="" />
            <span className="text-tn_blue_50 text-xl">Strategic Insights</span>
          </div>
          <p className="ml-10 mb-4 mt-1">
            Organize and refine your trading strategies in one central place.
          </p>

          <div className="flex gap-2 items-center">
            <img className="h-6" src="/icons/check.svg" alt="" />
            <span className="text-tn_blue_50 text-xl">Emotional Awareness</span>
          </div>
          <p className="ml-10 mb-4 mt-1">
            Track your mindset and its impact on your trades.
          </p>
        </div>
      </div>
    </div>
  )
}
export default About
