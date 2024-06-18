import mongoose, { Document, Model, Schema } from 'mongoose'

export interface ISkill {
  skillName: string
  skillImage: string
}

export interface ISkillDocument extends ISkill, Document {
  createdAt: Date
  updatedAt: Date
}

const skillSchema = new Schema<ISkillDocument>(
  {
    skillName: {
      type: String,
      required: true,
    },
    skillImage: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
)

const Skill: Model<ISkillDocument> =
  mongoose.models?.Skill || mongoose.model('Skill', skillSchema)

export default Skill
