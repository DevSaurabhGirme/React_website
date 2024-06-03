import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'
import { TiSocialPinterest } from 'react-icons/ti'

const Footer = () => {
    return (
        <div className="w-full mt-24 bg-gradient-to-r from-gray-700 via-gray-900 to-black text-gray-300 py-8 px-4">
            <div className="max-w-[1400px] mx-auto grid grid-cols-2 md:grid-cols-6 border-b-2 border-gray-600 py-8">
                <div>
                    <h6 className="font-bold uppercase pt-2">Solutions</h6>
                    <ul>
                        <li className="py-1 hover:text-white">Booking</li>
                        <li className="py-1 hover:text-white">Flights</li>
                        <li className="py-1 hover:text-white">Cruises</li>
                        <li className="py-1 hover:text-white">Ground</li>
                        <li className="py-1 hover:text-white">Travel</li>
                    </ul>
                </div>
                <div>
                    <h6 className="font-bold uppercase pt-2">Support</h6>
                    <ul>
                        <li className="py-1 hover:text-white">Pricing</li>
                        <li className="py-1 hover:text-white">Documentation</li>
                        <li className="py-1 hover:text-white">Tours</li>
                        <li className="py-1 hover:text-white">Refunds</li>
                    </ul>
                </div>
                <div>
                    <h6 className="font-bold uppercase pt-2">Company</h6>
                    <ul>
                        <li className="py-1 hover:text-white">About</li>
                        <li className="py-1 hover:text-white">Blog</li>
                        <li className="py-1 hover:text-white">Jobs</li>
                        <li className="py-1 hover:text-white">Press</li>
                        <li className="py-1 hover:text-white">Partners</li>
                    </ul>
                </div>
                <div>
                    <h6 className="font-bold uppercase pt-2">Legal</h6>
                    <ul>
                        <li className="py-1 hover:text-white">Claims</li>
                        <li className="py-1 hover:text-white">Privacy</li>
                        <li className="py-1 hover:text-white">Terms</li>
                        <li className="py-1 hover:text-white">Policies</li>
                        <li className="py-1 hover:text-white">Conditions</li>
                    </ul>
                </div>
                <div className="col-span-2 pt-2">
                    <p className="font-bold uppercase">Subscribe to our newsletter</p>
                    <p className="py-4">The latest deals, articles, and resources sent to your inbox weekly.</p>
                    <form className="flex flex-col sm:flex-row">
                        <input className="w-full p-2 mr-4 rounded-md mb-4" type="email" placeholder="Enter Email" />
                        <button className="p-2 mb-4 rounded-md bg-white text-black hover:bg-gray-200">Subscribe</button>
                    </form>
                </div>
            </div>
            <div className="flex flex-col max-w-[1400px] px-2 py-4 mx-auto justify-between sm:flex-row text-center text-gray-500">
                <p className="py-4">2024 Horizon Journeys, LLC. All rights reserved</p>
                <div className="flex justify-between sm:w-[300px] pt-4 text-2xl">
                    <button className="text-white hover:text-gray-400 bg-transparent border-none focus:outline-none"><FaFacebook /></button>
                    <button className="text-white hover:text-gray-400 bg-transparent border-none focus:outline-none"><FaInstagram /></button>
                    <button className="text-white hover:text-gray-400 bg-transparent border-none focus:outline-none"><FaTwitter /></button>
                    <button className="text-white hover:text-gray-400 bg-transparent border-none focus:outline-none"><TiSocialPinterest size={30} /></button>
                </div>
            </div>
        </div>
    )
}

export default Footer
