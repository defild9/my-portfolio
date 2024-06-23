import React from 'react'
import "./Style.css"

export interface Technology {
  id: number
  name: string
}

interface TechnologiesProps {
  technologies: Technology[]
}

export default function Technologies({ technologies }: TechnologiesProps) {
  if (technologies.length === 0) {
    return null
  }

  return (
    <div className="flex flex-col px-6 md:px-20 lg:px-40 md:py-10">
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-5">
        Technologies
      </h2>
      <div className="flex flex-wrap justify-stretch gap-4">
        {technologies.map((tech) => (
          <div
            key={tech.id}
            className="gradient-border rounded-lg py-2 px-4 text-center text-lg font-medium"
          >
            {tech.name}
          </div>
        ))}
      </div>
    </div>
  )
}
