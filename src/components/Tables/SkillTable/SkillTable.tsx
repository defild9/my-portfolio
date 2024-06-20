'use client'

import DeleteSkillModal from '@/components/Modals/DeleteSkillModal/DeleteSkillModal'
import EditSkillModal from '@/components/Modals/EditSkillModal/EditSkillModal'
import { IExtendedSkill } from '@/models/modelTypes/skillsModel.types'
import { useState } from 'react'
import { deleteSkill } from '@/lib/actions/skillActions'
import Image from 'next/image'
import CreateSkillModal from '@/components/Modals/CreataSkillModal/CreataSkillModal'

interface ISkillTableProps {
  skills: IExtendedSkill[]
}

export default function SkillTable({ skills }: ISkillTableProps) {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false)
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false)
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false)
  const [selectedSkill, setSelectedSkill] = useState<IExtendedSkill | null>(
    null
  )

  const handleEdit = (skill: IExtendedSkill) => {
    setSelectedSkill(skill)
    setIsEditModalOpen(true)
  }

  const handleDelete = (skill: IExtendedSkill) => {
    setSelectedSkill(skill)
    setIsDeleteModalOpen(true)
  }

  const handleCreate = () => {
    setIsCreateModalOpen(true)
  }

  const confirmDelete = async () => {
    if (selectedSkill) {
      try {
        const res = await deleteSkill(selectedSkill._id)

        if (res.message === "Skill deleted") {
          setIsDeleteModalOpen(false)
        } else {
          console.error('Failed to delete skill')
        }
      } catch (error) {
        console.error('An error occurred while deleting the skill:', error)
      }
    }
  }
  return (
    <div className="mx-auto px-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Skills</h1>
        <button onClick={handleCreate} className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
          Create
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b text-center">Skill Name</th>
              <th className="py-2 px-4 border-b text-center">Skill Image</th>
              <th className="py-2 px-4 border-b text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {skills.map((skill) => (
              <tr key={skill._id}>
                <td className="py-2 px-4 border-b text-center">
                  {skill.skillName}
                </td>
                <td className="py-2 px-4 border-b text-center">
                  <Image
                    src={skill.skillImage}
                    alt={skill.skillName}
                    className="h-10 w-10 object-cover mx-auto"
                    width={100}
                    height={100}
                  />
                </td>
                <td className="py-2 px-4 border-b text-center">
                  <button
                    onClick={() => handleEdit(skill)}
                    className="bg-blue-500 text-white px-2 py-1 rounded mr-2 hover:bg-blue-600"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(skill)}
                    className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {isCreateModalOpen && (
        <CreateSkillModal
          onClose={() => setIsEditModalOpen(false)}
        />
      )}
      {isEditModalOpen && selectedSkill && (
        <EditSkillModal
          skill={selectedSkill}
          onClose={() => setIsEditModalOpen(false)}
        />
      )}
      {isDeleteModalOpen && selectedSkill && (
        <DeleteSkillModal
          skillName={selectedSkill.skillName}
          onClose={() => setIsDeleteModalOpen(false)}
          onConfirm={confirmDelete}
        />
      )}
    </div>
  )
}
