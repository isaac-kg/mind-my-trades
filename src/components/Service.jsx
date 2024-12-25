const Services = () => {
  const card = (title, description) => {
    return (
      <div className="mt-3">
        <p className="text-tn_blue_50 text-lg">{title}</p>
        <li className="text-[#415076] ml-4">{description}</li>
      </div>
    )
  }

  return (
    <div className="px-6 lg:px-32 py-20">
      <p className="text-3xl mb-4 text-tn_blue_50 text-center">
        Why you should use a trading journal
      </p>
      <div className="md:flex justify-between gap-8">
        <div className="rounded-xl shadow-lg p-4 basis-1/2 mt-4">
          {card(
            "Improved Decision-Making",
            "Analyzing past trades helps you identify patterns and refine your strategy"
          )}

          {card(
            "Increased Accountability",
            "Tracking trades encourages discipline and prevents impulsive decisions."
          )}
          {card(
            "Goal Setting",
            "A journal helps you track progress toward your trading goals, keeping you focused and motivated."
          )}
        </div>
        <div className="rounded-xl shadow-lg p-4 basis-1/2 mt-4">
          {card(
            "Performance Tracking",
            "A journal allows you to measure your success and identify areas for improvement."
          )}
          {card(
            "Learning from Mistakes",
            "Documenting losses and mistakes turns them into valuable learning opportunities."
          )}
        </div>
      </div>
    </div>
  )
}

export default Services
