'use server'
import Contact, { IContact } from '@/models/contactModel'
import { revalidatePath } from 'next/cache'
import { connectToMongoDB } from '../db'

export const createContact = async ({
  name,
  email,
  subject,
  phone,
  message,
}: IContact) => {
  await connectToMongoDB()
  try {
    const newContact = new Contact({
      name,
      email,
      subject,
      phone,
      message,
    })
    await newContact.save()
    revalidatePath('/')
    return JSON.parse(JSON.stringify(newContact))
  } catch (error) {
    console.log(error)
    return { message: 'Error creating contact', error: error }
  }
}

export const getContacts = async () => {
  await connectToMongoDB()
  try {
    const contacts = await Contact.find({})
    return JSON.parse(JSON.stringify(contacts))
  } catch (error) {
    console.log(error)
    return { message: 'Error getting contacts' }
  }
}
