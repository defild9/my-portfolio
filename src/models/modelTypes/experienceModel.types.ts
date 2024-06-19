import { Document } from 'mongoose'

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

export interface IExtendedExperience extends IExperience, IExperienceDocument {
  _id: string
}
