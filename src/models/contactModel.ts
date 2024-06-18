import mongoose, { Document, Model, Schema } from 'mongoose'

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

const contactSchema = new Schema<IContactDocument>(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    subject: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
)

const Contact: Model<IContactDocument> =
  mongoose.models?.Contact || mongoose.model('Contact', contactSchema)

export default Contact
