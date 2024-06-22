'use client'
import React from 'react'
import SocialLinks from '../SocialLinks/SocialLinks'
import Button from '../Button/Button'
import Image from 'next/image'

function MainSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 px-10 md:px-40 py-20">
      <div className="flex justify-center order-1 md:order-2">
        <Image
          className="w-48 h-48 md:w-96 md:h-96 rounded-full object-cover"
          src="/me.jpg"
          width={395}
          height={395}
          alt="My photo"
        />
      </div>
      <div className="flex flex-col order-2 md:order-1">
        <div className="max-w-5 mb-10">
          <SocialLinks />
        </div>
        <h1 className="text-3xl md:text-5xl leading-snug mb-5">
          👋 Hey there, It's Yevhenii Biletskyi
        </h1>
        <p className="text-lg text-justify mb-10">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
          dicta tempore animi doloremque dignissimos nisi mollitia ut alias
          voluptatibus et. Nesciunt sit repudiandae aliquid quos qui fugit animi
          tempora asperiores?
        </p>
        <div className="flex gap-4">
          <Button
            buttonText="Say Hello"
            isGradientButton
            handleClick={() => {}}
          />
          <Button
            buttonText="My CV"
            isGradientButton={false}
            handleClick={() => {}}
          />
        </div>
      </div>
    </div>
  )
}

export default MainSection
