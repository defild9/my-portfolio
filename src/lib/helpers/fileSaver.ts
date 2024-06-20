'use server'
import { promises as fsPromises } from 'fs'

export async function savePhoto(formData: FormData): Promise<string> {
  const file = formData.get('skillImage') as File
  const skillName = formData.get('skillName') as string

  const filePath = `./public/${skillName}.${getFileExtension(file.name)}`
  await saveFile(file, filePath)

  return `/${skillName}.${getFileExtension(file.name)}`
}

async function saveFile(file: File, filePath: string): Promise<void> {
  const data = await file.arrayBuffer()
  await fsPromises.writeFile(filePath, Buffer.from(data))
}

function getFileExtension(filename: string): string {
  return filename.split('.').pop()!.toLowerCase()
}
