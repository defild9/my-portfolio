'use server'
import Contact from '@/models/contactModel'
import { revalidatePath } from 'next/cache'
import { connectToMongoDB } from '../db'
import {
  IContact,
  IExtendedContact,
} from '@/models/modelTypes/contactModel.types'

export interface IContactResponse {
  newContact?: IExtendedContact
  message?: string
  error?: unknown
}

export const createContact = async ({
  name,
  email,
  subject,
  phone,
  message,
}: IContact): Promise<IContactResponse> => {
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
    return {
      newContact: JSON.parse(JSON.stringify(newContact)) as IExtendedContact,
    }
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

export const deleteContacts = async (id: string) => {
  await connectToMongoDB()
  try {
    await Contact.deleteOne({ _id: id })
    revalidatePath('/')
    return { message: 'Contact deleted' }
  } catch (error) {
    console.log(error)
    return { message: 'Error deleting contact' }
  }
}
