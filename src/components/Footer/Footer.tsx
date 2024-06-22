import React from 'react'
import SocialLinks from '../SocialLinks/SocialLinks'
import './Style.css'

export default function Footer() {
  const linkArray : { [key: string]: string } = {
    About: '#about',
    Skills: '#skills',
    Portfolio: '#portfolio',
    Contact: '#contact',
  }

  return (
    <footer className="flex flex-col md:flex-row items-center justify-between px-4 md:px-10 lg:px-20 xl:px-40 py-4">
      <div className="mb-4 md:mb-0">
        <SocialLinks />
      </div>
      <div className="flex flex-col md:flex-row gap-4 md:gap-10">
        {Object.keys(linkArray).map((key) => (
          <a
            key={key}
            className="font-light text-lg md:text-xl"
            href={linkArray[key]}
          >
            {key}
          </a>
        ))}
      </div>
    </footer>
  )
}
