'use server'
import Skill, { ISkill } from '@/models/skillsModel'
import { revalidatePath } from 'next/cache'
import { connectToMongoDB } from '../db'

export const createSkill = async ({ skillName, skillImage }: ISkill) => {
  await connectToMongoDB()
  try {
    const newSkill = new Skill({ skillName, skillImage })
    await newSkill.save()
    revalidatePath('/')
    return newSkill.toString()
  } catch (error) {
    console.log(error)
    return { message: 'Error creating skill' }
  }
}

export const updateSkill = async (
  id: string,
  { skillName, skillImage }: ISkill
) => {
  await connectToMongoDB()
  try {
    await Skill.updateOne({ _id: id }, { skillName, skillImage })
    revalidatePath('/')
    return { message: 'Skill updated' }
  } catch (error) {
    console.log(error)
    return { message: 'Error updating skill' }
  }
}

export const deleteSkill = async (id: string) => {
  await connectToMongoDB()
  try {
    await Skill.deleteOne({ _id: id })
    revalidatePath('/')
    return { message: 'Skill deleted' }
  } catch (error) {
    console.log(error)
    return { message: 'Error deleting skill' }
  }
}

export const getSkills = async () => {
  await connectToMongoDB()
  try {
    const skills = await Skill.find({})
    return skills
  } catch (error) {
    console.log(error)
    return { message: 'Error getting skills' }
  }
}
