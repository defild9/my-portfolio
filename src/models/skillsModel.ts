import mongoose, { Model, Schema } from 'mongoose'
import { ISkillDocument } from './modelTypes/skillsModel.types'

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
