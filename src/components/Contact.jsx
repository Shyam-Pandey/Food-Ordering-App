import React, { useState, useRef } from 'react'
import emailjs from '@emailjs/browser';
import contact from '../constants/backgr.jpg';

const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const form = useRef();
    function handleSubmit(e) {
        e.preventDefault();
        const serviceId = 'service_56a373v';
        const templateId = 'template_s4o0g3e';
        const publicKey = 'NlyUVPOQ5FNS414FZ'

        const templateParams = {
            from_name: name,
            from_email: email,
            to_name: 'Shyam Pandey',
            message: message
        }

        emailjs.send(serviceId, templateId, templateParams, publicKey)
            .then((response) => {
                console.log('SUCCESS!', response);
                setName('');
                setEmail('');
                setMessage('');
            },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    }

    return (
        <section className=" flex justify-center items-center h-screen sm:pt-20 text-white" style={{
            background: "#FF8008", background: "-webkit-linear-gradient(to right, #FFC837, #FF8008)",
            background: "linear-gradient(to right, #FFC837, #FF8008)"
        }}
        >
            <div className='w-[700px] h-[500px] flex justify-around items-center bg-white rounded-xl p-5 overflow-hidden'>
                <div className='w-[300px] h-[500px] rounded-xl'>
                    <img src={contact} className='w-[300px] h-[500px] rounded-lg' alt="" />
                </div>
                <form ref={form} onSubmit={handleSubmit} className='flex flex-col gap-6 w-[70%] text-orange-400 '>
                    {/* <h1 className='mb-10 text-orange-500 text-center font-extrabold text-5xl'>CONTACT US</h1> */}
                    <input
                        type="text"
                        placeholder='Name'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className='rounded-lg border-2 border-orange-500 p-2 outline-none'
                    />
                    <input
                        type="email"
                        placeholder='Email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className='rounded-lg border-2 border-orange-500 p-2 outline-none'
                    />
                    <textarea
                        placeholder='Type your message'
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className='resize-none p-2 rounded-lg border-2 border-orange-500 outline-none'
                    />
                    <div className='flex justify-center'>
                        <button className='bg-orange-400 w-[100%] text-white font-bold text-sm rounded-lg p-4'>Submit</button>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Contact