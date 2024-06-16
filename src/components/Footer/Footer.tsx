import React from 'react'
import SocialLinks from '../SocialLinks/SocialLinks'
import './Style.css'

export default function Footer() {
  const linkArray: { [key: string]: string } = {
    About: '#about',
    Skills: '#skills',
    Portfolio: '#portfolio',
    Contact: '#contact',
  }
  return (
    <footer className="flex items-center justify-between px-40">
      <div>
        <SocialLinks />
      </div>
      <div className="flex gap-10">
        {Object.keys(linkArray).map((key) => (
          <a key={key} className="font-light text-xl" href={linkArray[key]}>
            {key}
          </a>
        ))}
      </div>
    </footer>
  )
}
