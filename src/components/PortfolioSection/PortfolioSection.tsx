import React from 'react'
import { getPortfolios } from '@/lib/actions/portfolioActions'
import PortfolioList from '../PortfolioList/PortfolioList'

export default async function PortfolioSection() {
  const portfolioData = await getPortfolios()

  return (
    <div
      id="portfolio"
      className="flex flex-col items-center px-6 md:px-20 lg:px-40 py-10 md:py-20"
    >
      <h2 className="text-2xl md:text-3xl lg:text-4xl text-center font-semibold mb-5">
        Portfolio
      </h2>
      <PortfolioList portfolios={portfolioData} />
    </div>
  )
}
