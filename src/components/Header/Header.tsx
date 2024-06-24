'use client'

import React, { useState, useEffect, useRef } from 'react'
import './Style.css'
import Button from '../Button/Button'
import Link from 'next/link'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  const linkArray: { [key: string]: string } = {
    About: '/#about',
    Skills: '/#skills',
    Portfolio: '/#portfolio',
    Experience: '/#experience',
    Contact: '/#contact',
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const handleClickOutside = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setIsMenuOpen(false)
    }
  }

  useEffect(() => {
    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    } else {
      document.removeEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isMenuOpen])

  return (
    <header className="header-container px-6 md:px-20 lg:px-40">
      <div className="logo text-2xl">
        <Link href="/">
          <span className="font-bold">Yevhenii</span>{' '}
          <span className="text-gray-700">Biletskiy</span>
        </Link>
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
        <div ref={menuRef} className="mobile-menu">
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
