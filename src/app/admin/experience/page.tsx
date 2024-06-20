import ExperienceTable from '@/components/Tables/ExperienceTable/ExperienceTable'
import { getExperiences } from '@/lib/actions/experienceActions'
import React from 'react'

export default async function page() {
  const experiences = await getExperiences()
  return (
    <div>
      <ExperienceTable experiences={experiences} />
    </div>
  )
}
