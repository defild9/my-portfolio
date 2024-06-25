'use client'

import { useState } from 'react'
import { IPortfolio } from '@/models/modelTypes/portfolioModel.types'

interface IUpdatePortfolioModalProps {
  portfolio: IPortfolio
  onConfirm: (updatedPortfolio: {
    title: string
    description: string
    formData: FormData | null
    websiteUrl?: string
    githubUrl?: string
    technologies?: string[]
  }) => void
  onClose: () => void
}

export default function UpdatePortfolioModal({
  portfolio,
  onConfirm,
  onClose,
}: IUpdatePortfolioModalProps) {
  const [formData, setFormData] = useState<IPortfolio>(portfolio)
  const [image, setImage] = useState<File | null>(null)
  const [technologies, setTechnologies] = useState<string[]>(
    portfolio.technologies || []
  )

  console.log(formData)
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prevData) => ({ ...prevData, [name]: value }))
  }

  const handleTechnologiesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setTechnologies(value.split(',').map((tech) => tech.trim()))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const updatedPortfolio = {
      ...formData,
      formData: image ? new FormData() : null,
      technologies,
    }

    if (image) {
      updatedPortfolio.formData!.append('image', image)
      updatedPortfolio.formData!.append('portfolioTitle', formData.title)
    }

    onConfirm(updatedPortfolio)
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-4 rounded-lg max-w-md w-full">
        <h2 className="text-xl font-bold mb-4">Update Portfolio</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Image URL</label>
            <input
              type="text"
              name="image"
              value={formData.image}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded mt-1"
              disabled
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Title</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded mt-1"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded mt-1"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Website URL</label>
            <input
              type="text"
              name="websiteUrl"
              value={formData.websiteUrl}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded mt-1"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">GitHub URL</label>
            <input
              type="text"
              name="githubUrl"
              value={formData.githubUrl}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded mt-1"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">
              Technologies (comma separated)
            </label>
            <input
              type="text"
              name="technologies"
              value={technologies.join(', ')}
              onChange={handleTechnologiesChange}
              className="w-full p-2 border border-gray-300 rounded mt-1"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Update Image</label>
            <input
              type="file"
              onChange={(e) =>
                setImage(e.target.files ? e.target.files[0] : null)
              }
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
              className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600"
            >
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
