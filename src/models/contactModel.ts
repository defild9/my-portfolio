import mongoose, { Document, Model, Schema } from 'mongoose'
import { IContactDocument } from './modelTypes/contactModel.types'


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
