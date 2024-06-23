import React from 'react'

interface AboutSectionProps {
  text: string
}

export default function AboutSection({ text }: AboutSectionProps) {
  return (
    <div
      id="about"
      className="flex flex-col px-6 md:px-20 lg:px-40 py-10 md:py-20"
    >
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-5">
        About
      </h2>
      <p className="text-base md:text-lg text-justify">{text}</p>
    </div>
  )
}
