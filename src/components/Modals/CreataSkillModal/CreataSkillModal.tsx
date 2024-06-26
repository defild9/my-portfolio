'use client'
import { createSkill } from '@/lib/actions/skillActions'
import React, { useState } from 'react'
import { v2 as cloudinary } from 'cloudinary'

interface EditSkillModalProps {
  onClose: () => void
}

export default function CreateSkillModal({ onClose }: EditSkillModalProps) {
  const [skillName, setSkillName] = useState('')
  const [skillImage, setSkillImage] = useState<File | null>(null)

  const handleSave = async () => {
    const formData = new FormData()

    formData.append('skillName', skillName)
    if (skillImage) {
      formData.append('image', skillImage)
    }

    try {
      const res = await createSkill({ skillName, formData })

      if (res.message === 'Skill added') {
        onClose()
      } else {
        console.error('Failed to save skill')
      }
    } catch (error) {
      console.error('An error occurred while saving the skill:', error)
    }
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-4 rounded-lg max-w-md w-full">
        <h2 className="text-xl font-bold mb-4">Create Skill</h2>
        <form action="">
          <div className="mb-4">
            <label
              className="block text-sm font-medium mb-1"
              htmlFor="skillName"
            >
              Skill Name
            </label>
            <input
              type="text"
              id="skillName"
              value={skillName}
              onChange={(e) => setSkillName(e.target.value)}
              className="w-full border border-gray-300 rounded px-2 py-1"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-sm font-medium mb-1"
              htmlFor="skillImage"
            >
              Skill Image
            </label>
            <input
              type="file"
              id="image"
              name="image"
              onChange={(e) => setSkillImage(e.target.files?.[0] || null)}
              className="w-full border border-gray-300 rounded px-2 py-1"
            />
          </div>
          <div className="flex justify-end">
            <button
              onClick={onClose}
              className="bg-gray-300 text-black px-2 py-1 rounded mr-2 hover:bg-gray-400"
            >
              Cancel
            </button>
            <button
              onClick={handleSave}
              className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
