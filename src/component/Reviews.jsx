import React from "react";

const Reviews = () => {
  const reviews = [
    {
      name: "Isaac Malebana",
      rating: 5,
      reviewText: "MindMyTrades has transformed the way I track my trades. The detailed journal entries and the analysis tools make it easy to spot patterns in my trading strategy. It's a fantastic tool for both beginners and seasoned traders!"
    },
    {
      name: "Mxolisi Zwane",
      rating: 4,
      reviewText: "This app has helped me track my trades and improve my trading performance significantly. Highly recommend it!",
    },
    {
      name: "Alice Cooper",
      rating: 3,
      reviewText: "I love how easy it is to input my trades and view my progress. This journal is a game changer for my trading strategy!",
    },
    {
      name: "Lerato Ledwaba",
      rating: 5,
      reviewText: "The interface is clean and intuitive. A must-have tool for every trader serious about improving their craft.",
    },
    {
      name: "Tom Harris",
      rating: 4,
      reviewText: "A great tool for keeping track of my Forex trades. The journaling system is super organized!",
    },
    {
      name: "kyle prinsloo",
      rating: 5,
      reviewText: "MindMyTrades is a fantastic resource for anyone serious about Forex trading. I love the insights it provides into my trades.",
    },
  ];

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(i < rating ? "⭐" : "");
    }
    return stars.join(" ");
  };

  return (
    <div className="bg-tn_blue_gradient px-6 lg:px-32 py-12">
      <p className="text-3xl text-center text-tn_blue_50">Customer Reviews</p>
      <p className="text-center mb-12 mt-4  text-[#415076]">
        Join over 2,300 traders and discover why MindMyTrades is their top
        choice for a trading journal.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {reviews.map((review, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-md"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-full bg-tn_blue_50 text-white flex justify-center items-center">
                <p className="m-auto">{review.name.slice(0, 2)}</p>
              </div>
              <div className="  text-[#415076]">
                <p className="text-sm font-medium">{review.name}</p>
                <p className="text-xs">{renderStars(review.rating)}</p>
              </div>
            </div>
            <p className="text-sm text-gray-700">{review.reviewText}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
