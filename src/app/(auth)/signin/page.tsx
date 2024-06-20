import SignInForm from '@/components/SingInForm/SignInForm'
import React from 'react'

export default async function SingIn() {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
      <h2 className="text-2xl font-bold mb-6 text-center">SignIn</h2>
      <SignInForm />
    </div>
  )
}
