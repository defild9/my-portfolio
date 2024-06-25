'use server'
import { v2 as cloudinary } from 'cloudinary'
import { revalidatePath } from 'next/cache'

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
})

export async function savePhoto(formData: FormData): Promise<string> {
  const file = formData.get('image') as File
  const arrayBuffer = await file.arrayBuffer()
  const buffer = new Uint8Array(arrayBuffer)

  return new Promise((resolve, reject) => {
    cloudinary.uploader
      .upload_stream({
        tags:['portfolio-skills']
      }, (error, result) => {
        if (error) {
          reject(error)
          return
        }
        if (!result) {
          reject(new Error('Upload result is undefined'))
          return
        }
        resolve(result.secure_url)
      })
      .end(buffer)
    revalidatePath('/')
  })
}
