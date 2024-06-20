'use server'
import Skill from '@/models/skillsModel'
import { revalidatePath } from 'next/cache'
import { connectToMongoDB } from '../db'
import { ISkill } from '@/models/modelTypes/skillsModel.types'
import { savePhoto } from '../helpers/fileSaver'

export const createSkill = async ({
  skillName,
  formData,
}: {
  skillName: string
  formData: FormData
}) => {
  await connectToMongoDB()
  try {
    const skillImage = await savePhoto(formData)
    const newSkill = new Skill({ skillName, skillImage })
    await newSkill.save()
    revalidatePath('/')
    return { message: 'Skill added' }
  } catch (error) {
    console.log(error)
    return { message: 'Error creating skill' }
  }
}

export const updateSkill = async (
  id: string,
  { skillName, formData }: { skillName: string; formData: FormData }
) => {
  await connectToMongoDB()
  try {
    const skillImage = await savePhoto(formData)
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
    return skills.map((skill) => JSON.parse(JSON.stringify(skill)))
  } catch (error) {
    console.log(error)
    return { message: 'Error getting skills' }
  }
}
