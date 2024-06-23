import { Document } from 'mongoose'

export interface IPortfolio {
  image: string
  title: string
  description: string
  websiteUrl?: string
  githubUrl?: string
  technologies?: string[]
}
export interface IUpdatedPortfolio {
  title: string;
  description: string;
  formData: FormData | null;
  websiteUrl?: string;
  githubUrl?: string;
  technologies?: string[];
}


export interface IPortfolioDocument extends IPortfolio, Document {
  createdAt: Date
  updatedAt: Date
}

export interface IExtendedPortfolio extends IPortfolio, IPortfolioDocument {
  _id: string
  _v: number
}
