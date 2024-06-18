'use server'
import Experience, { IExperience } from '@/models/experienceModel'
import { revalidatePath } from 'next/cache'
import { connectToMongoDB } from '../db'

export const createExperience = async ({
  jobTitle,
  companyName,
  startDate,
  endDate,
  jobDescription,
}: IExperience) => {
  await connectToMongoDB()
  try {
    const newExperience = new Experience({
      jobTitle,
      companyName,
      startDate,
      endDate,
      jobDescription,
    })
    await newExperience.save()
    revalidatePath('/')
    return newExperience.toString()
  } catch (error) {
    console.log(error)
    return { message: 'Error creating experience' }
  }
}

export const updateExperience = async (
  id: string,
  { jobTitle, companyName, startDate, endDate, jobDescription }: IExperience
) => {
  await connectToMongoDB()
  try {
    await Experience.updateOne(
      { _id: id },
      { jobTitle, companyName, startDate, endDate, jobDescription }
    )
    revalidatePath('/')
    return { message: 'Experience updated' }
  } catch (error) {
    console.log(error)
    return { message: 'Error updating experience' }
  }
}

export const deleteExperience = async (id: string) => {
  await connectToMongoDB()
  try {
    await Experience.deleteOne({ _id: id })
    revalidatePath('/')
    return { message: 'Experience deleted' }
  } catch (error) {
    console.log(error)
    return { message: 'Error deleting experience' }
  }
}

export const getExperiences = async () => {
  await connectToMongoDB()
  try {
    const experiences = await Experience.find({})
    return experiences
  } catch (error) {
    console.log(error)
    return { message: 'Error getting experiences' }
  }
}
