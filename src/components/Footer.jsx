import React from 'react'
import {FaFacebook, FaInstagram, FaTwitter} from 'react-icons/fa'
import {TiSocialPinterest} from 'react-icons/ti'

const Footer = () => {
    return (
        <div className="w-full mt-24 bg-gray-900 text-gray-300 py-2 px-2">
            <div className="max-w-[1400px] mx-auto grid grid-cols-2 md:grid-cols-6 border-b-2 border-gray-600 py-8 px-4">
                <div>
                    <h6 className="font-bold uppercase pt-2">Solutions</h6>
                    <ul>
                        <li classNmae="py-1">Booking</li>
                        <li classNmae="py-1">Flights</li>
                        <li classNmae="py-1">Cruises</li>
                        <li classNmae="py-1">Ground</li>
                        <li classNmae="py-1">Travel</li>
                    </ul>
                </div>
                <div>
                    <h6 className="font-bold uppercase pt-2">Support</h6>
                    <ul>
                        <li classNmae="py-1">Pricing</li>
                        <li classNmae="py-1">Documentation</li>
                        <li classNmae="py-1">Tours</li>
                        <li classNmae="py-1">Refunds</li>
                    </ul>
                </div>
                <div>
                    <h6 className="font-bold uppercase pt-2">Company</h6>
                    <ul>
                        <li classNmae="py-1">About</li>
                        <li classNmae="py-1">Blog</li>
                        <li classNmae="py-1">Jobs</li>
                        <li classNmae="py-1">Press</li>
                        <li classNmae="py-1">Partners</li>
                    </ul>
                </div>
            
                <div>
                    <h6 className="font-bold uppercase pt-2">Legal</h6>
                    <ul>
                        <li classNmae="py-1">Claims</li>
                        <li classNmae="py-1">Privacy</li>
                        <li classNmae="py-1">Terms</li>
                        <li classNmae="py-1">Policies</li>
                        <li classNmae="py-1">Conditions</li>
                    </ul>
                </div>
                <div className="cols-span-2 py-8 md:pt-2">
                    <p className="font-bold uppercase">Subscribe to our newsletter</p>
                    <p className="py-4">The latest deals, articles and resources sent to your Inbox weekly.</p>
                    <form className="flex flex-col sm:flex-row">
                        <input className="w-full p-2 mr-4 rounded md mb-4" type="email" placeholder="Enter Email"/>
                        <button className="p-2 mb-4 rounded-md">Subscribe</button>
                    </form>
                </div>
            </div>
            <div  className="flexflex-col max-w-[1400px] px-2 py-4 mx-auto justify-between sm:flex-row text-center text-gray-500">
                <p className="py-4">2024 Experiences, LLC. All rights reserved</p>
                <div className="flex justify-between sm:w-[500px] pt-4 text-2xl">
                    <FaFacebook />
                    <FaInstagram />
                    <FaTwitter />
                    <TiSocialPinterest size={30}/>
                </div>
            </div>
        </div>
    )
}

export default Footer
