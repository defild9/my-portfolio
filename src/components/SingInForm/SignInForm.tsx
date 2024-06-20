'use client'

import { useRouter } from 'next/navigation'
import { signIn } from 'next-auth/react'
import { FormEventHandler } from 'react'

export default function SignInForm() {
  const router = useRouter()

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)

    const res = await signIn('credentials', {
      email: formData.get('email'),
      password: formData.get('password'),
      redirect: false,
    })

    console.log(formData)

    if(res && !res?.error){
      router.push('/admin')
    }
    else{
      console.log(res)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-4">
        <label className="block text-gray-700 mb-2" htmlFor="email">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"  // добавлено
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter your email"
          required
        />
      </div>
      <div className="mb-6">
        <label className="block text-gray-700 mb-2" htmlFor="password">
          Password
        </label>
        <input
          type="password"
          id="password"
          name="password"
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter your password"
          required
        />
      </div>
      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
      >
        Login
      </button>
    </form>
  )
}
