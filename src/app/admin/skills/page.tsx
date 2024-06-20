import { getSkills } from '@/lib/actions/skillActions'
import { IExtendedSkill } from '@/models/modelTypes/skillsModel.types'
import SkillTable from '@/components/Tables/SkillTable/SkillTable'

export default async function Page() {
  const skills: IExtendedSkill[] | { message: string } = await getSkills()

  return (
    <div className="overflow-x-auto">
      <SkillTable skills={Array.isArray(skills) ? skills : []} />
    </div>
  )
}
