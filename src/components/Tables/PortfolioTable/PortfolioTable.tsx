'use client'

import { useState } from 'react'
import {
  deletePortfolio,
  updatePortfolio,
  createPortfolio,
} from '@/lib/actions/portfolioActions'
import {
  IExtendedPortfolio,
  IPortfolio,
  IUpdatedPortfolio,
} from '@/models/modelTypes/portfolioModel.types'
import CreatePortfolioModal from '@/components/Modals/CreatePortfolioModal/CreatePortfolioModal'
import UpdatePortfolioModal from '@/components/Modals/UpdatePortfolioModal/UpdatePortfolioModal'
import DeletePortfolioModal from '@/components/Modals/DeletePortfolioModal/DeletePortfolioModal'
import Link from 'next/link'

interface IPortfolioTableProps {
  portfolios: IExtendedPortfolio[]
}

export default function PortfolioTable({ portfolios }: IPortfolioTableProps) {
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false)
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false)
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false)
  const [selectedPortfolio, setSelectedPortfolio] =
    useState<IExtendedPortfolio | null>(null)

  const openCreateModal = () => {
    setIsCreateModalOpen(true)
  }

  const closeCreateModal = () => {
    setIsCreateModalOpen(false)
  }

  const openUpdateModal = (portfolio: IExtendedPortfolio) => {
    setSelectedPortfolio(portfolio)
    setIsUpdateModalOpen(true)
  }

  const closeUpdateModal = () => {
    setIsUpdateModalOpen(false)
    setSelectedPortfolio(null)
  }

  const openDeleteModal = (portfolio: IExtendedPortfolio) => {
    setSelectedPortfolio(portfolio)
    setIsDeleteModalOpen(true)
  }

  const closeDeleteModal = () => {
    setIsDeleteModalOpen(false)
    setSelectedPortfolio(null)
  }

  const handleCreate = async (newPortfolio: IUpdatedPortfolio) => {
    const createdPortfolio = await createPortfolio(newPortfolio)
    if ('_id' in createdPortfolio) {
      closeCreateModal()
    }
  }

  const handleUpdate = async (updatedPortfolio: IUpdatedPortfolio) => {
    if (selectedPortfolio) {
      await updatePortfolio(selectedPortfolio._id, updatedPortfolio)
      closeUpdateModal()
    }
  }

  const handleDelete = async () => {
    if (selectedPortfolio) {
      await deletePortfolio(selectedPortfolio._id)
      closeDeleteModal()
    }
  }

  return (
    <div className="mx-auto px-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Portfolio</h1>
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
              <th className="py-2 px-4 border-b text-left">Image</th>
              <th className="py-2 px-4 border-b text-left">Title</th>
              <th className="py-2 px-4 border-b text-left">Description</th>
              <th className="py-2 px-4 border-b text-left">Website</th>
              <th className="py-2 px-4 border-b text-left">GitHub</th>
              <th className="py-2 px-4 border-b text-left">Technologies</th>
              <th className="py-2 px-4 border-b text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(portfolios) &&
              portfolios.map((portfolio) => (
                <tr key={portfolio._id}>
                  <td className="py-2 px-4 border-b">
                    <img
                      src={portfolio.image}
                      alt={portfolio.title}
                      className="w-16 h-16 object-cover"
                    />
                  </td>
                  <td className="py-2 px-4 border-b">
                    <Link href={`/projects/${portfolio._id}`}>{portfolio.title}</Link>
                  </td>
                  <td className="py-2 px-4 border-b">
                    {portfolio.description}
                  </td>
                  <td className="py-2 px-4 border-b">
                    <a
                      href={portfolio.websiteUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {portfolio.websiteUrl}
                    </a>
                  </td>
                  <td className="py-2 px-4 border-b">
                    <a
                      href={portfolio.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {portfolio.githubUrl}
                    </a>
                  </td>
                  <td className="py-2 px-4 border-b">
                    {portfolio.technologies?.join(', ')}
                  </td>
                  <td className="py-2 px-4 border-b">
                    <button
                      onClick={() => openUpdateModal(portfolio)}
                      className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600 mr-2"
                    >
                      Update
                    </button>
                    <button
                      onClick={() => openDeleteModal(portfolio)}
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
      {selectedPortfolio && isUpdateModalOpen && (
        <UpdatePortfolioModal
          portfolio={selectedPortfolio}
          onConfirm={handleUpdate}
          onClose={closeUpdateModal}
        />
      )}
      {selectedPortfolio && isDeleteModalOpen && (
        <DeletePortfolioModal
          portfolioTitle={selectedPortfolio.title}
          onConfirm={handleDelete}
          onClose={closeDeleteModal}
        />
      )}
      {isCreateModalOpen && (
        <CreatePortfolioModal
          onCreate={handleCreate}
          onClose={closeCreateModal}
        />
      )}
    </div>
  )
}
