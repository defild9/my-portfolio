import React from 'react'
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa'
import { PiTelegramLogo } from 'react-icons/pi'
import { FaXTwitter } from 'react-icons/fa6'
import './Style.css'

export default function SocialLinks() {
  return (
    <div className="flex gap-4 justify-between">
      <a href="https://www.linkedin.com/in/yevhenii-biletskyi-7778b6223/">
        <FaLinkedin className="social-icon" />
      </a>
      <a href="https://github.com/defild9">
        <FaGithub className="social-icon" />
      </a>
      <a href="https://t.me/defild">
        <PiTelegramLogo className="social-icon" />
      </a>
      <a href="https://x.com/defild_zb">
        <FaXTwitter className="social-icon" />
      </a>
      <a href="https://www.instagram.com/zhenia_9_beletskiy/">
        <FaInstagram className="social-icon" />
      </a>
    </div>
  )
}
