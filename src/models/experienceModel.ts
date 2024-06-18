import mongoose, { Document, Model, Schema } from 'mongoose'

export interface IExperience {
  jobTitle: string
  companyName: string
  startDate: string
  endDate: string
  jobDescription: string
}

export interface IExperienceDocument extends IExperience, Document {
  createdAt: Date
  updatedAt: Date
}

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
