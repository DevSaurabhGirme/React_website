import React from 'react'

const Rooms = () => {
    return (
        <div className="max-w-[1400px] h-[500px] bg-blue-100 mx-auto my-20 pt-16 lg:mb-[20%] md:mb-[35%] px-4 grid lg:grid-cols-3 gap-4">
            <div className="lg:top-20 relative lg:col-span-1 col-span-2">
                <h3 className="text-3xl font-bold">Fine Interier Rooms</h3>
                <p className="pt-4">Indulge in the epitome of luxury and comfort with our exquisite selection of fine rooms and interiors. From opulent suites overlooking panoramic cityscapes to cozy countryside retreats adorned with elegant decor, each space is meticulously designed to elevate your stay to new heights of sophistication. Immerse yourself in a world of refinement and tranquility, where every detail is curated to perfection, promising a truly unforgettable escape.</p>
            </div>
            
            <div className="grid grid-cols-2 col-span-2">
                <img className="object-cover w-full h-full"src ="https://images.unsplash.com/photo-1520099940286-947795ff7b42?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHNlYSUyMGJlYWNoJTIwcm9vbXMlMjBpbnRlcmlvcnxlbnwwfDB8MHx8fDA%3D" alt="/"/>
                <img className="row-span-2 object-cover w-full h-full"src ="https://images.unsplash.com/photo-1618798387548-f94063632035?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHNlYSUyMGJlYWNoJTIwcm9vbXMlMjBpbnRlcmlvcnxlbnwwfDB8MHx8fDA%3D" alt="/"/>
                <img className="object-cover w-full h-full"src ="https://plus.unsplash.com/premium_photo-1661913412680-c274b6fea096?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c2VhJTIwYmVhY2glMjByb29tc3xlbnwwfDB8MHx8fDA%3D" alt="/"/>
            </div>
        </div>
    )
}

export default Rooms;