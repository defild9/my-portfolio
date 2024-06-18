import React, { useState } from 'react'
import PortfolioCard from '../PortfolioCard/PortfolioCard'
import Button from '../Button/Button'

export default function PortfolioSection() {
  const [showAll, setShowAll] = useState(false)

  const handleViewMore = () => {
    setShowAll(true)
  }

  // change to get data from database
  const portfolioData = [
    {
      id: 1,
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png',
      title: 'Amazon Scrapper',
      description:
        'A simple blog which has user authentication such as Sign Up, Sign In...',
    },
    {
      id: 1,
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png',
      title: 'Amazon Scrapper',
      description:
        'A simple blog which has user authentication such as Sign Up, Sign In...',
    },
    {
      id: 1,
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png',
      title: 'Amazon Scrapper',
      description:
        'A simple blog which has user authentication such as Sign Up, Sign In...',
    },
    {
      id: 1,
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png',
      title: 'Amazon Scrapper',
      description:
        'A simple blog which has user authentication such as Sign Up, Sign In...',
    },
    {
      id: 1,
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png',
      title: 'Amazon Scrapper',
      description:
        'A simple blog which has user authentication such as Sign Up, Sign In...',
    },
    {
      id: 1,
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png',
      title: 'Amazon Scrapper',
      description:
        'A simple blog which has user authentication such as Sign Up, Sign In...',
    },
    {
      id: 1,
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png',
      title: 'Amazon Scrapper',
      description:
        'A simple blog which has user authentication such as Sign Up, Sign In...',
    },
    {
      id: 1,
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png',
      title: 'Amazon Scrapper',
      description:
        'A simple blog which has user authentication such as Sign Up, Sign In...',
    },
    {
      id: 1,
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png',
      title: 'Amazon Scrapper',
      description:
        'A simple blog which has user authentication such as Sign Up, Sign In...',
    },
  ]

  const itemsToShow = showAll ? portfolioData : portfolioData.slice(0, 6)

  return (
    <div id="portfolio" className="flex flex-col items-center px-40 py-20">
      <h2 className="text-4xl text-center font-semibold mb-5">Portfolio</h2>
      <div className="flex flex-wrap justify-center gap-20">
        {itemsToShow.map((item) => (
          <PortfolioCard
            key={item.id}
            image={item.image}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
      {!showAll && portfolioData.length > 6 && (
        <div className="mt-10">
          <Button
            buttonText="View More"
            handleClick={handleViewMore}
            isGradientButton={false}
          />
        </div>
      )}
    </div>
  )
}
