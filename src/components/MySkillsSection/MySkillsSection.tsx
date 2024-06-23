import React from 'react'
import SkillCard from '../SkillCard/SkillCard'
import { getSkills } from '@/lib/actions/skillActions'
import { IExtendedSkill } from '@/models/modelTypes/skillsModel.types'

export default async function MySkillsSection() {
  const skills: IExtendedSkill[] | { message: string } = await getSkills()
  return (
    <div id="skills" className="flex flex-col items-center px-6 md:px-20 lg:px-40 py-10 md:py-20">
      <h2 className="text-2xl md:text-3xl lg:text-4xl text-center font-semibold mb-5">
        My Skills
      </h2>
      {Array.isArray(skills) && skills.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill) => (
            <SkillCard
              key={skill._id}
              skillName={skill.skillName}
              skillImage={skill.skillImage}
            />
          ))}
        </div>
      ) : (
        <p className="text-lg md:text-xl text-center">
          Skills will be added soon. Stay tuned!
        </p>
      )}
    </div>
  )
}
