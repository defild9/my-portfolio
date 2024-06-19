import { Document } from "mongoose"

export interface ISkill {
  skillName: string
  skillImage: string
}

export interface ISkillDocument extends ISkill, Document {
  createdAt: Date
  updatedAt: Date
}

export interface IExtendedSkill extends ISkill, ISkillDocument {
  _id: string
  _v: number
}
