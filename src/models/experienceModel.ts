import mongoose, { Model, Schema } from 'mongoose'
import { IExperienceDocument } from './modelTypes/experienceModel.types'

const experienceSchema = new Schema<IExperienceDocument>(
  {
    jobTitle: {
      type: String,
      required: true,
    },
    companyName: {
      type: String,
      required: true,
    },
    startDate: {
      type: String,
      required: true,
    },
    endDate: {
      type: String,
      required: true,
    },
    jobDescription: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
)

const Experience: Model<IExperienceDocument> =
  mongoose.models?.Experience || mongoose.model('Experience', experienceSchema)

export default Experience
