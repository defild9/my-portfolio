'use client'
import React, { useState } from 'react'
import PortfolioCard from '../PortfolioCard/PortfolioCard'
import Button from '../Button/Button'
import { IExtendedPortfolio } from '@/models/modelTypes/portfolioModel.types'

interface PortfolioListProps {
  portfolios: IExtendedPortfolio[]
}

export default function PortfolioList({ portfolios }: PortfolioListProps) {
  const [showAll, setShowAll] = useState(false)

  const handleViewMore = () => {
    setShowAll(true)
  }

  const itemsToShow = showAll ? portfolios : portfolios.slice(0, 6)

  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-wrap justify-center gap-6 md:gap-10 lg:gap-20">
        {itemsToShow.map((item) => (
          <PortfolioCard
            key={item._id}
            id={item._id}
            image={item.image}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
      {!showAll && portfolios.length > 6 && (
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
