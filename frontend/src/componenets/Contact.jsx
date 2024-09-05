import React from 'react'
import Navbar from './Navbar'

function Contact() {
    return (
        <>
            <Navbar />
            <div className='flex h-screen items-center justify-center border '>
                <div className="">
                    <div className=" px-6 py-6 w-[500px]">
                        <h1 className='text-2xl font-bold'>Contact Us</h1>
                        <br />
                        <form action="">
                            <span>Name</span>
                            <br />
                            <input
                                type="text"
                                name="name"
                                id=""
                                placeholder='Enter your name'
                                className='w-[400px] p-2 border rounded-md outline-none ' />
                            <br />
                            <span>Email</span>
                            <br />
                            <input
                                type="email"
                                name="email"
                                id=""
                                placeholder='Email address'
                                className='w-[400px] p-2 border rounded-md outline-none' />
                            <br />
                            <span>Message</span>
                            <br />
                            <textarea
                                name="message"
                                id=""
                                placeholder='Type your message'
                                className='w-[400px] pb-10 border rounded-md outline-none '></textarea>
                            <br />
                            <button className='bg-blue-500 text-white rounded-md px-3 py-1 hover:bg-blue-700 duration-200'>Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact
