import React from 'react'
import './Style.css'

interface ExperienceProp {
  jobTitle: string
  companyName: string
  startDate: string
  endDate: string
  jobDescription: string
}

export default function Experience({
  jobTitle,
  companyName,
  startDate,
  endDate,
  jobDescription,
}: ExperienceProp) {
  return (
    <div className="flex md:flex-row items-center mb-4">
      <div className="w-4 h-4 gradient rounded-full"></div>
      <div className="ml-4">
        <h3 className="text-xl font-semibold">
          {jobTitle} at {companyName}
        </h3>
        <p className="text-gray-600">
          {startDate} - {endDate}
        </p>
        <p className="text-justify text-lg">{jobDescription}</p>
      </div>
    </div>
  )
}
