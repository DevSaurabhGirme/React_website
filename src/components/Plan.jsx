import React from "react";

const Plan =() => {
    return (
        <div className="max-w-[1400] m-auto py-16 px-4 grid lg:grid-cols-2 gap-4">
            {/*Left side*/}
            <div className="grid grid-cols-2 grid-rows-6 h-[80vh]">
                <img className="row-span-3 object-cover-w-full h-full p-2"src = "https://images.unsplash.com/photo-1520520731457-9283dd14aa66?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2VhJTIwYmVhY2h8ZW58MHx8MHx8fDA%3D" alt="/"/>
                <img className="row-span-2 object-cover-w-full h-full p-2"src = "https://images.unsplash.com/photo-1516815231560-8f41ec531527?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNlYSUyMGJlYWNofGVufDB8fDB8fHww" alt="/"/>
                <img className="row-span-2 object-cover-w-full h-full p-2"src = "https://images.unsplash.com/photo-1453872302360-eed3c5f8ff66?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHNlYSUyMGJlYWNofGVufDB8MHwwfHx8MA%3D%3D" alt="/"/>
                <img className="row-span-3 object-cover-w-full h-full p-2"src = "https://plus.unsplash.com/premium_photo-1669029181733-f88dbb8451d9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHNlYSUyMGJlYWNofGVufDB8fDB8fHww" alt="/"/>
                <img className="row-span-2 object-cover-w-full h-full p-2"src = "https://images.unsplash.com/photo-1452784444945-3f422708fe5e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHNlYSUyMGJlYWNofGVufDB8MHwwfHx8MA%3D%3D" alt="/"/>
            </div>
            {/*Right side*/}
            <div className="flex flex-col h-full justify-center">
                <h3 className="text-sxl md:text-6xl font-bold">Plan Your Next Trip</h3>
                <p className="text-2xl py-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <p className="pb-6">Embark on your next adventure with our expertly crafted travel plans! Whether you crave the sun-kissed beaches of Bali, the majestic peaks of the Swiss Alps, or the vibrant streets of Tokyo, we have the perfect itinerary waiting for you. Let us tailor-make your dream getaway, ensuring every moment is filled with unforgettable experiences. From luxury escapes to budget-friendly journeys, trust us to plan your next trip with precision and passion.</p>
            <div>
                <button className="border-black mr-4 hover:shadow-xl">Learn More</button>
                <button className="bg-black text-white hover:shadow-xl">Book your trip</button>
            </div>
            </div>
        </div>
    )
}

export default Plan;
