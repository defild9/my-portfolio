'use client'

import React, { useState, useEffect } from 'react'
import PortfolioCard from '../PortfolioCard/PortfolioCard'
import Button from '../Button/Button'
import { getPortfolios } from '@/lib/actions/portfolioActions'
import { IExtendedPortfolio } from '@/models/modelTypes/portfolioModel.types'

export default function PortfolioSection() {
  const [showAll, setShowAll] = useState(false)
  const [portfolioData, setPortfolioData] = useState<IExtendedPortfolio[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getPortfolios()

        if (Array.isArray(data)) {
          setPortfolioData(data)
        } else {
          console.error('Failed to fetch portfolio data:', data.message)
        }
      } catch (error) {
        console.error('Error fetching portfolio data:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  const handleViewMore = () => {
    setShowAll(true)
  }

  const itemsToShow = showAll ? portfolioData : portfolioData.slice(0, 6)

  if (loading) {
    return <div>Loading...</div>
  }

  return (
    <div id="portfolio" className="flex flex-col items-center px-6 md:px-20 lg:px-40 py-10 md:py-20">
      <h2 className="text-2xl md:text-3xl lg:text-4xl text-center font-semibold mb-5">Portfolio</h2>
      <div className="flex flex-wrap justify-center gap-6 md:gap-10 lg:gap-20">
        {itemsToShow.map((item) => (
          <PortfolioCard
            key={item._id}
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
