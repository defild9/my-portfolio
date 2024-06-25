'use server'
import Portfolio from '@/models/portfolioModel'
import { revalidatePath } from 'next/cache'
import { connectToMongoDB } from '../db'
import { savePhoto } from '../helpers/fileSaver'

export const createPortfolio = async ({
  title,
  description,
  formData,
  websiteUrl,
  githubUrl,
  technologies,
}: {
  title: string
  description: string
  formData: FormData | null
  websiteUrl?: string
  githubUrl?: string
  technologies?: string[]
}) => {
  await connectToMongoDB()
  try {
    const image = formData ? await savePhoto(formData) : 'no photo'
    const newPortfolio = new Portfolio({
      image,
      title,
      description,
      websiteUrl,
      githubUrl,
      technologies,
    })
    await newPortfolio.save()
    revalidatePath('/')
    return JSON.parse(JSON.stringify(newPortfolio))
  } catch (error) {
    console.log(error)
    return { message: 'Error creating portfolio' }
  }
}

export const updatePortfolio = async (
  id: string,
  {
    title,
    description,
    formData,
    websiteUrl,
    githubUrl,
    technologies,
  }: {
    title: string
    description: string
    formData: FormData | null
    websiteUrl?: string
    githubUrl?: string
    technologies?: string[]
  }
) => {
  await connectToMongoDB()
  try {
    const image = formData ? await savePhoto(formData) : 'no photo'
    await Portfolio.updateOne(
      { _id: id },
      { image, title, description, websiteUrl, githubUrl, technologies }
    )
    revalidatePath('/')
    return { message: 'Portfolio updated' }
  } catch (error) {
    console.log(error)
    return { message: 'Error updating portfolio' }
  }
}

export const deletePortfolio = async (id: string) => {
  await connectToMongoDB()
  try {
    await Portfolio.deleteOne({ _id: id })
    revalidatePath('/')
    return { message: 'Portfolio deleted' }
  } catch (error) {
    console.log(error)
    return { message: 'Error deleting portfolio' }
  }
}

export const getPortfolios = async () => {
  await connectToMongoDB()
  try {
    const portfolios = await Portfolio.find({})
    return JSON.parse(JSON.stringify(portfolios))
  } catch (error) {
    console.log(error)
    return { message: 'Error getting portfolios' }
  }
}

export const getPortfolio = async (id: string) => {
  await connectToMongoDB()
  try {
    const portfolio = await Portfolio.findOne({ _id: id })
    return JSON.parse(JSON.stringify(portfolio))
  } catch (error) {
    console.log(error)
    return { message: 'Error getting portfolio' }
  }
}
