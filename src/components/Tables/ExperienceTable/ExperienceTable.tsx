'use client'

import CreateExperienceModal from '@/components/Modals/CreateExperienceModal/CreateExperienceModal'
import DeleteExperienceModal from '@/components/Modals/DeleteExperienceModal/DeleteExperienceModal'
import UpdateExperienceModal from '@/components/Modals/UpdateExperienceModal/UpdateExperienceModal'
import {
  deleteExperience,
  updateExperience,
  createExperience,
} from '@/lib/actions/experienceActions'
import {
  IExperience,
  IExtendedExperience,
} from '@/models/modelTypes/experienceModel.types'
import { useState, useEffect } from 'react'

interface IExperienceTableProps {
  experiences: IExtendedExperience[] | { message: string }
}

export default function ExperienceTable({
  experiences,
}: IExperienceTableProps) {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false)
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false)
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false)
  const [selectedExperience, setSelectedExperience] =
    useState<IExtendedExperience | null>(null)

  const openDeleteModal = (experience: IExtendedExperience) => {
    setSelectedExperience(experience)
    setIsDeleteModalOpen(true)
  }

  const closeDeleteModal = () => {
    setIsDeleteModalOpen(false)
    setSelectedExperience(null)
  }

  const handleDelete = async () => {
    if (selectedExperience) {
      await deleteExperience(selectedExperience._id)
      closeDeleteModal()
    }
  }

  const openUpdateModal = (experience: IExtendedExperience) => {
    setSelectedExperience(experience)
    setIsUpdateModalOpen(true)
  }

  const closeUpdateModal = () => {
    setIsUpdateModalOpen(false)
    setSelectedExperience(null)
  }

  const handleUpdate = async (updatedExperience: IExperience) => {
    if (selectedExperience) {
      await updateExperience(selectedExperience._id, updatedExperience)
      closeUpdateModal()
    }
  }

  const openCreateModal = () => {
    setIsCreateModalOpen(true)
  }

  const closeCreateModal = () => {
    setIsCreateModalOpen(false)
  }

  const handleCreate = async (newExperience: IExperience) => {
    const createdExperience = await createExperience(newExperience)
    if ('_id' in createdExperience) {
      closeCreateModal()
    }
  }

  return (
    <div className="mx-auto px-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Experience</h1>
        <button
          onClick={openCreateModal}
          className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
        >
          Create
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b text-left">Job Title</th>
              <th className="py-2 px-4 border-b text-left">Company Name</th>
              <th className="py-2 px-4 border-b text-left">Start Date</th>
              <th className="py-2 px-4 border-b text-left">End Date</th>
              <th className="py-2 px-4 border-b text-left">Job Description</th>
              <th className="py-2 px-4 border-b text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(experiences) &&
              experiences.map((experience) => (
                <tr key={experience._id}>
                  <td className="py-2 px-4 border-b">{experience.jobTitle}</td>
                  <td className="py-2 px-4 border-b">
                    {experience.companyName}
                  </td>
                  <td className="py-2 px-4 border-b">{experience.startDate}</td>
                  <td className="py-2 px-4 border-b">{experience.endDate}</td>
                  <td className="py-2 px-4 border-b">
                    {experience.jobDescription}
                  </td>
                  <td className="py-2 px-4 border-b">
                    <button
                      onClick={() => openUpdateModal(experience)}
                      className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600 mr-2"
                    >
                      Update
                    </button>
                    <button
                      onClick={() => openDeleteModal(experience)}
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
        <CreateExperienceModal
          onCreate={handleCreate}
          onClose={closeCreateModal}
        />
      )}
      {selectedExperience && isDeleteModalOpen && (
        <DeleteExperienceModal
          experienceTitle={selectedExperience.jobTitle}
          onConfirm={handleDelete}
          onClose={closeDeleteModal}
        />
      )}
      {selectedExperience && isUpdateModalOpen && (
        <UpdateExperienceModal
          experience={selectedExperience}
          onUpdate={handleUpdate}
          onClose={closeUpdateModal}
        />
      )}
    </div>
  )
}
