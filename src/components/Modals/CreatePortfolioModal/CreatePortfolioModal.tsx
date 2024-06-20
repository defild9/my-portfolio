'use client'

import { useState } from 'react'

interface ICreatePortfolioModalProps {
  onCreate: (newPortfolio: {
    title: string
    description: string
    formData: FormData | null
  }) => void
  onClose: () => void
}

export default function CreatePortfolioModal({
  onCreate,
  onClose,
}: ICreatePortfolioModalProps) {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [image, setImage] = useState<File | null>(null)

  const handleCreate = async () => {
    if (image) {
      const formData = new FormData()
      formData.append('portfolioImage', image)
      formData.append('portfolioTitle', title)
      onCreate({ title, description, formData })
    } else {
      onCreate({ title, description, formData: null })
    }
    onClose()
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-4 rounded-lg max-w-md w-full">
        <h2 className="text-xl font-bold mb-4">Create Portfolio</h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Title
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Description
            </label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Image
            </label>
            <input
              type="file"
              onChange={(e) =>
                setImage(e.target.files ? e.target.files[0] : null)
              }
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="flex justify-end mt-4">
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-300 text-black px-4 py-2 rounded mr-2 hover:bg-gray-400"
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={handleCreate}
              className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
            >
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
