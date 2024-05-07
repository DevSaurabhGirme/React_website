import React, {useState} from 'react'
import {BsChevronCompactLeft, BsChevronCompactRight} from 'react-icons/bs'
import {RxDotFilled} from'react-icons/rx'

const ImageSlider = () => {
    const slides = [
        {
            url:'https://images.unsplash.com/photo-1569494315581-abddb8d41cfe?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGxvYnN0ZXIlMjByb2xsfGVufDB8MHwwfHx8MA%3D%3D',
            title: 'lobster',
        },
        {
            url:'https://images.unsplash.com/photo-1617196034738-26c5f7c977ce?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c3VzaGklMjBwaG90b3N8ZW58MHwwfDB8fHww',
            title: 'sushi',
        },
        {
            url:'https://images.unsplash.com/photo-1559058789-672da06263d8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2FsbW9uJTIwZm9vZHxlbnwwfDB8MHx8fDA%3D',
            title:'salmon',
        },
        {
            url:'https://images.unsplash.com/photo-1608219992759-8d74ed8d76eb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHBhc3RhfGVufDB8fDB8fHww',
            title: 'pasta',
        },
        {
            url:'https://images.unsplash.com/photo-1522933001375-72d29575cf05?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YmVhY2glMjBmb29kfGVufDB8fDB8fHww',
            title: 'nachos',
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0)

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0
        const newIndex = isFirstSlide ? slides.length-1 : currentIndex-1
        setCurrentIndex(newIndex);
    }

    const nextSlide = () => {
        const isLastSlide = currentIndex === slides.length-1
        const newIndex = isLastSlide ? 0 : currentIndex+1
        setCurrentIndex(newIndex);
    }

    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex)
    }

    return (
        <div className ="max-w-[1000px] h-[430px] w-full m-auto py-16 px-4 relative group">
            <div 
                className="w-full h-full rounded-2xl bg-center bg-cover duration-500"
                style={{backgroundImage: `url(${slides[currentIndex].url})`}}
            ></div>
            {/* Left Arrow*/}
            <div className="absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 group-hover:bg-black/20 text-white cursor-pointer">
                <BsChevronCompactLeft onClick={prevSlide}size={30}/>
            </div>
            {/* Right Arrow*/}
            <div className="absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 group-hover:bg-black/20 text-white cursor-pointer">
                <BsChevronCompactRight onClick={nextSlide} size={30}/>
            </div>
                <div className ="flex top-4 justify-center py-2">
                    {slides.map((slide, slideIndex) => (
                        <div className="text-2xl cursor-pointer" key={slideIndex} onClick={() => goToSlide(slideIndex)}>
                            <RxDotFilled />    
                        </div>   
                    ))}
                </div>
        </div>
    );
};

export default ImageSlider;
