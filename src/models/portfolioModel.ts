import mongoose, { Document, Model, Schema } from 'mongoose'
import { IPortfolioDocument } from './modelTypes/portfolioModel.types'

const portfolioSchema = new Schema<IPortfolioDocument>(
  {
    image: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    websiteUrl: {
      type: String,
      required: false,
    },
    githubUrl: {
      type: String,
      required: false,
    },
    technologies: {
      type: [String],
      required: false,
    },
  },
  {
    timestamps: true,
  }
)

const Portfolio: Model<IPortfolioDocument> =
  mongoose.models?.Portfolio || mongoose.model('Portfolio', portfolioSchema)

export default Portfolio
