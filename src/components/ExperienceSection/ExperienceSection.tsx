import React from 'react'
import Experience from '../Experience/Experience'

// change to get data from database
const experiences = []

export default function ExperienceSection() {
  return (
    <div id="experience" className="flex flex-col px-40 py-20">
      <h2 className="text-4xl font-semibold mb-5">Experience</h2>
      <div className="border-l-4 border-gray-300 pl-4">
        {experiences.length > 0 ? (
          experiences.map((exp, index) => (
            <Experience
              key={index}
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
