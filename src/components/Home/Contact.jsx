'use client'
import axios from 'axios'
import React from 'react'

import toast from 'react-hot-toast'
export  const Contact= () => {

        const contactMethods = [
            {
                icon:
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                ,
                contact: "devjadiya15@gmail.com"
            },
           
            {
                icon:
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                ,
                contact: "Samrat Ashok Technological Institute"
            },
        ]
        const submitForm = async (e) => {
            e.preventDefault();
            const formData = {
                name: document.querySelector('input[type="text"]').value,
                email: document.querySelector('input[type="email"]').value,
                message: document.querySelector('textarea').value,
                }
            
            try {
              const res = await axios.post('/api/contact',formData)
          if(res.status === 200){  toast.success('Your message has been sent!')}
            
            } catch (error) {
              toast.error(error.message)
            }}
        return (
            <main className="py-14" id='contact'>
                <div className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
                    <div className="max-w-lg mx-auto gap-12 justify-between lg:flex lg:max-w-none">
                        <div className="max-w-lg space-y-3">
                            <h3 className="text-black font-semibold">
                                Contact
                            </h3>
                            <p className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                                Let us know how we can help
                            </p>
                            <p>
                                We’re here to help and answer any question you might have, We look forward to hearing from you! Please fill out the form, or us the contact information bellow .
                            </p>
                            <div>
                                <ul className="mt-6 flex flex-wrap gap-x-10 gap-y-6 items-center">
                                    {
                                        contactMethods.map((item, idx) => (
                                            <li key={idx} className="flex items-center gap-x-3">
                                                <div className="flex-none text-gray-400">
                                                    {item.icon}
                                                </div>
                                                <p>{item.contact}</p>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                        </div>
                        <div className="flex-1 mt-12 sm:max-w-lg lg:max-w-md">
                            <form
                                onSubmit={submitForm}
                                className="space-y-5"
                            >
                                <div>
                                    <label className="font-medium">
                                        Full name
                                    </label>
                                    <input
                                        type="text"
                                        required
                                        className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-black shadow-sm rounded-lg"
                                    />
                                </div>
                                <div>
                                    <label className="font-medium">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        required
                                        className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-black shadow-sm rounded-lg"
                                    />
                                </div>
                              
                                <div>
                                    <label className="font-medium">
                                        Message
                                    </label>
                                    <textarea  required className="w-full mt-2 h-36 px-3 py-2 resize-none appearance-none bg-transparent outline-none border focus:border-black shadow-sm rounded-lg"></textarea>
                                </div>
                                <button type='submit'
                                    className="w-full px-4 py-2 text-white font-medium bg-black  rounded-lg duration-150"
                                >
                                    Submit
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </main>
        )
    }
