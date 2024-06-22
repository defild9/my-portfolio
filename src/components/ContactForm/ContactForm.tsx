'use client'

import React from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import contactShema from '@/lib/validators/contactFormValidator'
import Button from '../Button/Button'
import { IContactResponse, createContact } from '@/lib/actions/contactAction'
import { IContact } from '@/models/modelTypes/contactModel.types'

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(contactShema) })

  const onSubmit = async (data: IContact) => {
    const response: IContactResponse = await createContact(data)
    if ('error' in response) {
      alert(response.message)
    } else {
      alert('Message sent')
    }
  }

  return (
    <form className="bg-white shadow-lg rounded-xl w-full max-w-2xl mx-auto p-8">
      <h2 className="text-3xl font-medium mb-8 text-center">Send a message</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div>
          <label
            htmlFor="name"
            className="block text-lg font-medium text-gray-700"
          >
            Name
          </label>
          <input
            id="name"
            {...register('name')}
            className="mt-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-lg p-2"
            placeholder="Enter Your Name"
          />
          {errors.name && (
            <div className="text-red-600 text-lg mt-2">
              {errors.name.message}
            </div>
          )}
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-lg font-medium text-gray-700"
          >
            E-mail
          </label>
          <input
            id="email"
            type="email"
            {...register('email')}
            className="mt-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-lg p-2"
            placeholder="Enter Your E-mail"
          />
          {errors.email && (
            <div className="text-red-600 text-lg mt-2">
              {errors.email.message}
            </div>
          )}
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div>
          <label
            htmlFor="subject"
            className="block text-lg font-medium text-gray-700"
          >
            Subject
          </label>
          <input
            id="subject"
            {...register('subject')}
            className="mt-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-lg p-2"
            placeholder="Enter Subject"
          />
          {errors.subject && (
            <div className="text-red-600 text-lg mt-2">
              {errors.subject.message}
            </div>
          )}
        </div>
        <div>
          <label
            htmlFor="phone"
            className="block text-lg font-medium text-gray-700"
          >
            Phone
          </label>
          <input
            id="phone"
            type="text"
            {...register('phone')}
            className="mt-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-lg p-2"
            placeholder="Your Phone Number"
          />
          {errors.phone && (
            <div className="text-red-600 text-lg mt-2">
              {errors.phone.message}
            </div>
          )}
        </div>
      </div>
      <div className="mb-8">
        <label
          htmlFor="message"
          className="block text-lg font-medium text-gray-700"
        >
          Message
        </label>
        <textarea
          id="message"
          {...register('message')}
          className="mt-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-lg p-2"
          rows={6}
          placeholder="Write Your message here"
        />
        {errors.message && (
          <div className="text-red-600 text-lg mt-2">
            {errors.message.message}
          </div>
        )}
      </div>
      <div className="flex items-center mb-8">
        <div className="flex items-center">
          <input
            id="terms"
            type="checkbox"
            {...register('terms')}
            className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
          />
        </div>
        <div className="ml-3 text-lg">
          <label htmlFor="terms" className="font-medium text-gray-700">
            I agree to Terms of Service and Privacy Policy
          </label>
          {errors.terms && (
            <div className="text-red-600 text-lg mt-2">
              {errors.terms.message}
            </div>
          )}
        </div>
        <div className="ml-auto">
          <Button
            buttonText="Let's Talk"
            handleClick={handleSubmit(onSubmit)}
            isGradientButton={true}
          />
        </div>
      </div>
    </form>
  )
}
