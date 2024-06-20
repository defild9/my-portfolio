'use client'

interface IDeletePortfolioModalProps {
  portfolioTitle: string
  onConfirm: () => void
  onClose: () => void
}

export default function DeletePortfolioModal({
  portfolioTitle,
  onConfirm,
  onClose,
}: IDeletePortfolioModalProps) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-4 rounded-lg max-w-md w-full">
        <h2 className="text-xl font-bold mb-4">Delete Portfolio</h2>
        <p>Are you sure you want to delete the portfolio "{portfolioTitle}"?</p>
        <div className="flex justify-end mt-4">
          <button
            onClick={onClose}
            className="bg-gray-300 text-black px-4 py-2 rounded mr-2 hover:bg-gray-400"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  )
}
