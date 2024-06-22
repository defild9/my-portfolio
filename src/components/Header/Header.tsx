'use client'

import React, { useState } from 'react'
import './Style.css'
import Button from '../Button/Button'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const linkArray: { [key: string]: string } = {
    About: '#about',
    Skills: '#skills',
    Portfolio: '#portfolio',
    Experience: '#experience',
    Contact: '#contact',
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="header-container">
      <div className="logo text-2xl">
        <span className="font-bold">Yevhenii</span>{' '}
        <span className="text-gray-700">Biletskiy</span>
      </div>
      <div className="desktop-menu">
        {Object.keys(linkArray).map((key) => (
          <a key={key} className="font-light text-xl" href={linkArray[key]}>
            {key}
          </a>
        ))}
      </div>
      <div className="button-container">
        <Button
          buttonText="Lets Talk →"
          isGradientButton
          handleClick={() => {}}
        />
      </div>
      <div className="mobile-header">
        <Button
          buttonText="Menu"
          isGradientButton={false}
          handleClick={toggleMenu}
        />
      </div>
      {isMenuOpen && (
        <div className="mobile-menu">
          {Object.keys(linkArray).map((key) => (
            <a
              key={key}
              className="block font-light text-xl py-2"
              href={linkArray[key]}
            >
              {key}
            </a>
          ))}
        </div>
      )}
    </header>
  )
}
