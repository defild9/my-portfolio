import React from 'react'
import './Style.css'

interface ISkillCardProps {
  skillName: string
  skillImage: string
}

export default function SkillCard({ skillName, skillImage }: ISkillCardProps) {
  return (
    <div
      className="flex flex-col items-center justify-center text-black mb-14 skill-card p-4"
    >
      <img
        src={skillImage}
        alt={skillName}
        className="mb-4 w-32 h-32 md:w-36 md:h-36 lg:w-40 lg:h-40"
      />
      <p className="text-center font-semibold text-lg md:text-xl">{skillName}</p>
    </div>
  )
}
