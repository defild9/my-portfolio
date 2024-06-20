'use client'
import React, { useState } from 'react'
import { signOut } from 'next-auth/react'
import Link from 'next/link'

interface SidebarProps {
  userEmail: string | null | undefined
}

export default function Sidebar({ userEmail }: SidebarProps) {
  const [isOpen, setIsOpen] = useState(false)

  const toggleSidebar = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div>
      <button className="md:hidden p-4" onClick={toggleSidebar}>
        <svg
          className="h-6 w-6 text-gray-800"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      <div
        className={`fixed inset-0 z-50 transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } h-screen transition-transform duration-300 ease-in-out md:static md:inset-auto md:translate-x-0 bg-gray-800 text-white md:flex md:flex-col`}
      >
        <div className="flex items-center justify-between h-16 bg-gray-900 p-4">
          <h1 className="text-xl font-semibold truncate overflow-hidden">
            Hi, {userEmail}
          </h1>
          <button className="md:hidden p-4" onClick={toggleSidebar}>
            <svg
              className="h-6 w-6 text-gray-200"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <nav className="flex-1 px-2 py-4 space-y-2 overflow-y-auto">
          <Link
            href="/admin/skills"
            className="block px-4 py-2 rounded hover:bg-gray-700"
          >
            Skills
          </Link>
          <Link
            href="/admin/portfolio"
            className="block px-4 py-2 rounded hover:bg-gray-700"
          >
            Portfolio
          </Link>
          <Link
            href="/admin/experience"
            className="block px-4 py-2 rounded hover:bg-gray-700"
          >
            Experience
          </Link>
          <Link
            href="/admin/contact"
            className="block px-4 py-2 rounded hover:bg-gray-700"
          >
            Contact
          </Link>
        </nav>
        <div className="p-4">
          <button
            onClick={() => signOut({ callbackUrl: '/signin' })}
            className="w-full bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          >
            Sign Out
          </button>
        </div>
      </div>
    </div>
  )
}
