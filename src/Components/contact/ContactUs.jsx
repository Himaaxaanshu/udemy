import React, { useState } from 'react';
import { MdLocationPin } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import { IoChatboxEllipses } from "react-icons/io5";
import { IoMdMail } from "react-icons/io";


const ContactUs = () => {
    const [data, setData] = useState({
        name: '',
        phone: '',
        message: '',
    });

    const onChangeHandler = (e) => {
        const { name, value } = e.target;
        setData((prevData) => ({ ...prevData, [name]: value }));
    }

    return (
        <section className="bg-white dark:bg-gray-900 max-w-full">
            <div className="container px-6 py-12 mx-auto">
                <div className="text-center">
                    <p className="font-medium text-purple-600  dark:text-blue-400">Contact us</p>
                    <h1 className="mt-2 text-3xl font-bold text-purple-600 md:text-4xl dark:text-white">Chat with Our Friendly Team</h1>
                    <p className="mt-3 text-lg text-gray-500 dark:text-gray-400">We’d love to hear from you. Please fill out this form or shoot us an email.</p>
                </div>

                <div className="grid grid-cols-1 gap-6 mt-10 lg:grid-cols-2">
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                        {[
                            {
                                title: "Email",
                                description: "Our friendly team is here to help.",
                                contact: "hello@merakiui.com",
                                icon: (
                                    <IoMdMail size={25}/>
                                ),
                            },
                            {
                                title: "Live Chat",
                                description: "Our friendly team is here to help.",
                                contact: "Start new chat",
                                icon: (
                                    <IoChatboxEllipses size={25} />
                                ),
                            },
                            {
                                title: "Office",
                                description: "Come say hello at our office HQ.",
                                contact: "100 Smith Street Collingwood VIC 3066 AU",
                                icon: (
                                    <MdLocationPin size={25} />
                                ),
                            },
                            {
                                title: "Phone",
                                description: "Mon-Fri from 8am to 5pm.",
                                contact: "+1 (555) 000-0000",
                                icon: (
                                    <FiPhone size={25} />
                                ),
                            },
                        ].map(({ title, description, contact, icon }, index) => (
                            <div key={index} className="p-3 border bg-gray-50 border-gray-200 rounded-lg shadow hover:shadow-lg transition-shadow duration-200 max-w-xs">
                                <span className="inline-block p-2 text-blue-500 rounded-full bg-blue-100">
                                    {icon}
                                </span>
                                <h2 className="mt-3 text-base font-semibold text-gray-800 dark:text-white">{title}</h2>
                                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">{description}</p>
                                <p className="mt-1 text-sm text-blue-500 dark:text-blue-400">{contact}</p>
                            </div>
                        ))}
                    </div>
                    <div className="bg-white p-6 lg:p-8 lg:rounded-r-2xl rounded-2xl shadow-md">
                        <h2 className="text-purple-600 font-semibold text-3xl mb-6">Send Us A Message</h2>
                        <form>
                            <input
                                type="text"
                                name="name"
                                value={data.name}
                                onChange={onChangeHandler}
                                className="w-full h-12 text-gray-600 placeholder-gray-400 bg-white border border-gray-300 rounded-lg p-4 mb-4 transition duration-200 focus:ring-2 focus:ring-indigo-500"
                                placeholder="Name"
                                required
                            />
                            <input
                                type="email"
                                name="email"
                                value={data.email}
                                onChange={onChangeHandler}
                                className="w-full h-12 text-gray-600 placeholder-gray-400 bg-white border border-gray-300 rounded-lg p-4 mb-4 transition duration-200 focus:ring-2 focus:ring-indigo-500"
                                placeholder="Email"
                                required
                            />
                            <input
                                type="text"
                                name="phone"
                                value={data.phone}
                                onChange={onChangeHandler}
                                className="w-full h-12 text-gray-600 placeholder-gray-400 bg-white border border-gray-300 rounded-lg p-4 mb-4 transition duration-200 focus:ring-2 focus:ring-indigo-500"
                                placeholder="Phone"
                                required
                            />
                            <textarea
                                name="message"
                                value={data.message}
                                onChange={onChangeHandler}
                                className="w-full h-32 text-gray-600 placeholder-gray-400 bg-white border border-gray-300 rounded-lg p-4 mb-4 transition duration-200 focus:ring-2 focus:ring-indigo-500"
                                placeholder="Message"
                                required
                            />
                            <button
                                type="submit"
                                className="w-full h-12 text-white text-base font-semibold leading-6 rounded-lg transition-all duration-300 hover:bg-purple-700 bg-purple-600 shadow-md"
                            >
                                Send
                            </button>
                        </form>
                    </div>
                </div>

            </div>
        </section>
    )
}
export default ContactUs