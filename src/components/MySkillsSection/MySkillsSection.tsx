import React from 'react'
import SkillCard from '../SkillCard/SkillCard'
import { getSkills } from '@/lib/actions/skillActions'
import { IExtendedSkill } from '@/models/modelTypes/skillsModel.types'

export default async function MySkillsSection() {
  const skills: IExtendedSkill[] | { message: string } = await getSkills()
  return (
    <div className="flex flex-col items-center px-40 py-20">
      <h2 className="text-4xl text-center font-semibold mb-5">My Skills</h2>
      {Array.isArray(skills) && skills.length > 0 ? (
        <div className="flex flex-wrap justify-between">
          {skills.map((skill) => (
            <SkillCard
              key={skill._id}
              skillName={skill.skillName}
              skillImage={skill.skillImage}
            />
          ))}
        </div>
      ) : (
        <p className="text-xl text-center">
          Skills will be added soon. Stay tuned!
        </p>
      )}
    </div>
  )
}
