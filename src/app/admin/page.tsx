import { getContacts } from '@/lib/actions/contactAction'
import { getExperiences } from '@/lib/actions/experienceActions'
import { getPortfolios } from '@/lib/actions/portfolioActions'
import { getSkills } from '@/lib/actions/skillActions'

export default async function Admin() {
  const portfolios = await getPortfolios()
  const contacts = await getContacts()
  const skills = await getSkills()
  const experiences = await getExperiences()
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white shadow-xl rounded-lg p-4">
          <h2 className="text-xl font-semibold">Portfolios</h2>
          <p className="text-3xl">
            {Array.isArray(portfolios) && portfolios.length}
          </p>
        </div>
        <div className="bg-white shadow-xl rounded-lg p-4">
          <h2 className="text-xl font-semibold">Contacts</h2>
          <p className="text-3xl">
            {Array.isArray(contacts) && contacts.length}
          </p>
        </div>
        <div className="bg-white shadow-xl rounded-lg p-4">
          <h2 className="text-xl font-semibold">Skills</h2>
          <p className="text-3xl">{Array.isArray(skills) && skills.length}</p>
        </div>
        <div className="bg-white shadow-xl rounded-lg p-4">
          <h2 className="text-xl font-semibold">Experiences</h2>
          <p className="text-3xl">
            {Array.isArray(experiences) && experiences.length}
          </p>
        </div>
      </div>
    </div>
  )
}
