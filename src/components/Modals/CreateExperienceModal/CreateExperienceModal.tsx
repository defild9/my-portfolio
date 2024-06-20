'use client'

import { useState } from 'react'
import { IExperience } from '@/models/modelTypes/experienceModel.types'

interface ICreateExperienceModalProps {
  onCreate: (newExperience: IExperience) => void
  onClose: () => void
}

export default function CreateExperienceModal({
  onCreate,
  onClose,
}: ICreateExperienceModalProps) {
  const [formData, setFormData] = useState<IExperience>({
    jobTitle: '',
    companyName: '',
    startDate: '',
    endDate: '',
    jobDescription: '',
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prevData) => ({ ...prevData, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onCreate(formData)
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-4 rounded-lg max-w-md w-full">
        <h2 className="text-xl font-bold mb-4">Create Experience</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Job Title</label>
            <input
              type="text"
              name="jobTitle"
              value={formData.jobTitle}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded mt-1"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Company Name</label>
            <input
              type="text"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded mt-1"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Start Date</label>
            <input
              type="text"
              name="startDate"
              value={formData.startDate}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded mt-1"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">End Date</label>
            <input
              type="text"
              name="endDate"
              value={formData.endDate}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded mt-1"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Job Description</label>
            <textarea
              name="jobDescription"
              value={formData.jobDescription}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded mt-1"
            />
          </div>
          <div className="flex justify-end mt-4">
            <button
              onClick={onClose}
              type="button"
              className="bg-gray-300 text-black px-2 py-1 rounded mr-2 hover:bg-gray-400"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-green-500 text-white px-2 py-1 rounded hover:bg-green-600"
            >
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
