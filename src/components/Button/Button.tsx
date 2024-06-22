'use client'

import React from 'react'
import './Style.css'

interface IButtonProps {
  buttonText: string
  handleClick: () => void
  isGradientButton: boolean
}

const Button = ({
  buttonText,
  handleClick,
  isGradientButton,
}: IButtonProps) => {
  return (
    <button
      onClick={handleClick}
      className={`${
        isGradientButton ? 'gradient-button' : ''
      } hover:bg-gray-200 font-light border border-black py-2 px-6 md:py-3 md:px-10 rounded-full text-sm md:text-base`}
    >
      {buttonText}
    </button>
  )
}

export default Button
