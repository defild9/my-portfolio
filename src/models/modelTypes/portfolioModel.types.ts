import { Document } from "mongoose"

export interface IPortfolio {
  image: string
  title: string
  description: string
}

export interface IPortfolioDocument extends IPortfolio, Document {
  createdAt: Date
  updatedAt: Date
}

export interface IExtendedPortfolio extends IPortfolio, IPortfolioDocument {
  _id: string
  _v: number
}
