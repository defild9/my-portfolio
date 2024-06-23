import AboutSection from '@/components/AboutSection/AboutSection'
import Technologies, {
  Technology,
} from '@/components/Technologies/Technologies'
import { getPortfolio } from '@/lib/actions/portfolioActions'
import { IExtendedPortfolio } from '@/models/modelTypes/portfolioModel.types'
import Image from 'next/image'
import { TbWorld } from 'react-icons/tb'
import { FaGithub } from 'react-icons/fa'

export default async function ProjectDetailPage({
  params,
}: {
  params: { id: string }
}) {
  const { id } = params
  const project: IExtendedPortfolio = await getPortfolio(id)

  const technologies: Technology[] =
    project.technologies?.map((tech, index) => ({
      id: index,
      name: tech,
    })) ?? []

  return (
    <div className="flex min-h-screen flex-col py-6 md:py-20">
      <h1 className="text-2xl md:text-4xl lg:text-5xl mb-5 font-semibold text-center">
        {project.title}
      </h1>
      <div className="flex justify-center w-full mb-5 px-6 md:px-20 lg:px-40 md:py-10">
        <Image
          className="rounded-2xl w-full object-cover"
          src={project.image}
          alt={project.title}
          layout="responsive"
          width={1250}
          height={750}
        />
      </div>
      <AboutSection text={project.description} />
      <Technologies technologies={technologies} />
      {project.websiteUrl && (
        <div className="flex flex-col px-6 md:px-20 lg:px-40 md:py-10">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-5">
            <div className="flex items-center gap-2">
              <TbWorld />
              Website
            </div>
          </h2>
          <a className="font-medium" href={project.websiteUrl}>
            {project.websiteUrl}
          </a>
        </div>
      )}
      {project.githubUrl && (
        <div className="flex flex-col px-6 md:px-20 lg:px-40 py-10 md:py-10">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-5">
            <div className="flex items-center gap-2">
              <FaGithub />
              Github
            </div>
          </h2>
          <a className="font-medium" href={project.githubUrl}>
            {project.githubUrl}
          </a>
        </div>
      )}
    </div>
  )
}
