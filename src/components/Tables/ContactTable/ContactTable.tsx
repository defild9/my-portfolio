'use client'

import DeleteContactModal from '@/components/Modals/DeleteContactModal/DeleteContactModalю'
import { deleteContacts } from '@/lib/actions/contactAction'
import { IExtendedContact } from '@/models/modelTypes/contactModel.types'
import React, { useState } from 'react'

interface IContactTableProps {
  contacts: IExtendedContact[] | { message: string }
}

export default function ContactTable({ contacts }: IContactTableProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedContact, setSelectedContact] =
    useState<IExtendedContact | null>(null)
  const openModal = (contact: IExtendedContact) => {
    setSelectedContact(contact)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedContact(null)
  }

  const handleDelete = async () => {
    if (selectedContact) {
      await deleteContacts(selectedContact._id)
      closeModal()
    }
  }

  return (
    <div className="mx-auto px-4">
      <h1 className="text-2xl font-bold mb-4">Contacts</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b text-left">Name</th>
              <th className="py-2 px-4 border-b text-left">Email</th>
              <th className="py-2 px-4 border-b text-left">Subject</th>
              <th className="py-2 px-4 border-b text-left">Phone</th>
              <th className="py-2 px-4 border-b text-left">Message</th>
              <th className="py-2 px-4 border-b text-left">Created At</th>
              <th className="py-2 px-4 border-b text-left">Updated At</th>
              <th className="py-2 px-4 border-b text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(contacts) &&
              contacts.map((contact) => (
                <tr key={contact._id}>
                  <td className="py-2 px-4 border-b">{contact.name}</td>
                  <td className="py-2 px-4 border-b">{contact.email}</td>
                  <td className="py-2 px-4 border-b">{contact.subject}</td>
                  <td className="py-2 px-4 border-b">{contact.phone}</td>
                  <td className="py-2 px-4 border-b">{contact.message}</td>
                  <td className="py-2 px-4 border-b">
                    {new Date(contact.createdAt).toLocaleString()}
                  </td>
                  <td className="py-2 px-4 border-b">
                    {new Date(contact.updatedAt).toLocaleString()}
                  </td>
                  <td className="py-2 px-4 border-b">
                    <button
                      onClick={() => openModal(contact)}
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
      {selectedContact && (
        <DeleteContactModal
          contactName={selectedContact.name}
          onConfirm={handleDelete}
          onClose={closeModal}
        />
      )}
    </div>
  )
}
