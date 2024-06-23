'use client'
import React from 'react'
import './Style.css'
import { useRouter } from 'next/navigation'
import Button from '../Button/Button'

interface IPortfolioCardProp {
  id: string
  image: string
  title: string
  description: string
}

export default function PortfolioCard({
  id,
  image,
  title,
  description,
}: IPortfolioCardProp) {
  const router = useRouter()
  const truncatedDescription =
    description.length > 100 ? description.slice(0, 100) + '...' : description

  const handleClick = () => {
    router.push(`/projects/${id}`)
  }
  return (
    <div className="portfolio-card w-72 sm:w-80 md:w-96 lg:w-80 xl:w-96 h-96 flex items-center justify-center m-4">
      <div className="relative w-full h-full overflow-hidden rounded-3xl shadow-lg group">
        <img
          src={image}
          alt="Card Image"
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 bg-black bg-opacity-60 transition-opacity duration-300 group-hover:opacity-100">
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2">
            {title}
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-white text-center mb-4">
            {truncatedDescription}
          </p>
          <Button buttonText='See More' isGradientButton handleClick={handleClick}/>
        </div>
      </div>
    </div>
  )
}
