import React from 'react'
import './Style.css'

interface IPortfolioCardProp{
  image: string;
  title: string;
  description: string;
}

export default function PortfolioCard({ image, title, description }: IPortfolioCardProp) {
  return (
    <div className="portfolio-card w-80 h-96 flex items-center justify-center">
      <div className="relative w-full h-full overflow-hidden rounded-3xl shadow-lg group">
        <img
          src={image}
          alt="Card Image"
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 bg-black bg-opacity-60 transition-opacity duration-300 group-hover:opacity-100">
          <h2 className="text-2xl font-bold text-white mb-2">
            {title}
          </h2>
          <p className="text-white text-center mb-4">
            {description}
          </p>
          <button className="px-4 py-2 text-sm font-medium text-gray-800 bg-yellow-400 rounded hover:bg-yellow-500">
            See More
          </button>
        </div>
      </div>
    </div>
  );
}

