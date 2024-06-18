import mongoose, { Document, Model, Schema } from 'mongoose'

export interface IPortfolio {
  image: string
  title: string
  description: string
}

export interface IPortfolioDocument extends IPortfolio, Document {
  createdAt: Date
  updatedAt: Date
}

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
  },
  {
    timestamps: true,
  }
)

const Portfolio: Model<IPortfolioDocument> =
  mongoose.models?.Portfolio || mongoose.model('Portfolio', portfolioSchema)

export default Portfolio
