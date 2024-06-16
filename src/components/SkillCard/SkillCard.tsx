import React from 'react'
import './Style.css'

interface ISkillCardProps {
  skillName: string
  skillImage: string
}

export default function SkillCard({ skillName, skillImage }: ISkillCardProps) {
  return (
    <div
      className="flex flex-col items-center justify-center text-black mb-14 skill-card"
    >
      <img
        src={skillImage}
        alt={skillName}
        className="mb-4"
        style={{ width: '150px', height: '150px' }}
      />
      <p className="text-center font-semibold text-xl">{skillName}</p>
    </div>
  )
}