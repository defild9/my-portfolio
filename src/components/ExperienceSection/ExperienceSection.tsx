import React from 'react'
import Experience from '../Experience/Experience'
import { getExperiences } from '@/lib/actions/experienceActions'
import { IExtendedExperience } from '@/models/modelTypes/experienceModel.types'

export default async function ExperienceSection() {
  const experiences: IExtendedExperience[] | { message: string } =
    await getExperiences()
  return (
    <div id="experience" className="flex flex-col px-40 py-20">
      <h2 className="text-4xl font-semibold mb-5">Experience</h2>
      <div className="border-l-4 border-gray-300 pl-4">
        {Array.isArray(experiences) && experiences.length > 0 ? (
          experiences.map((exp, index) => (
            <Experience
              key={exp._id}
              jobTitle={exp.jobTitle}
              companyName={exp.companyName}
              startDate={exp.startDate}
              endDate={exp.endDate}
              jobDescription={exp.jobDescription}
            />
          ))
        ) : (
          <p className="text-gray-600">No experiences available.</p>
        )}
      </div>
    </div>
  )
}
