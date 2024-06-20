import { Document } from 'mongoose'

export interface IContact {
  name: string
  email: string
  subject: string
  phone: string
  message: string
}

export interface IContactDocument extends IContact, Document {
  createdAt: Date
  updatedAt: Date
}

export interface IExtendedContact extends IContact, IContactDocument {
  _id: string
  _v: number
}
