'use client'

import React from 'react'
import './Style.css'
import Button from '../Button/Button'

export default function Header() {
  const linkArray: { [key: string]: string } = {
    About: '#about',
    Portfolio: '#portfolio',
    Contact: '#contact',
  }

  return (
    <header className="flex items-center justify-between px-40">
      <div className="text-2xl">
        <span className="font-bold">Yevhenii</span>{' '}
        <span className="text-gray-700">Biletskiy</span>
      </div>
      <div className="flex gap-10">
        {Object.keys(linkArray).map((key) => (
          <a key={key} className="font-light text-xl" href={linkArray[key]}>
            {key}
          </a>
        ))}
      </div>
      <div>
        <Button
          buttonText="Lets Talk →"
          isGradientButton
          handleClick={() => {}}
        />
      </div>
    </header>
  )
}