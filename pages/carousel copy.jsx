// import Slider from './Slider'

// export default function IndexPage() {
//   const images = [
//     "https://images.unsplash.com/photo-1516655855035-d5215bcb5604?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1200&q=60",
//     "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1200&q=60",
//     "https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1200&q=60",
//     "https://images.unsplash.com/photo-1458668383970-8ddd3927deed?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1200&q=60"
//   ];

//   return (
//     <div>
//       <Slider
//         slides={images}
//         size="medium"
//         slideInterval={6}
//         inContainer
//         className="mt-20 mb-20"
//       />
//       <Slider slides={images} size="large" slideInterval={6} />
//     </div>
//   );
// }








// import Image from "next/image";
// import { useState } from "react";
// import Swipe from "react-easy-swipe";
// // import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

// /**
//  * Carousel component for nextJS and Tailwind.
//  * Using external library react-easy-swipe for swipe gestures on mobile devices (optional)
//  *
//  * @param images - Array of images with src and alt attributes
//  * @returns React component
//  */

// // export default function Carousel({ images }) {
// export default function Carousel() {
//   const [currentSlide, setCurrentSlide] = useState(0);

//   const handleNextSlide = () => {
//     let newSlide = currentSlide === images.length - 1 ? 0 : currentSlide + 1;
//     setCurrentSlide(newSlide);
//   };

//   const handlePrevSlide = () => {
//     let newSlide = currentSlide === 0 ? images.length - 1 : currentSlide - 1;
//     setCurrentSlide(newSlide);
//   };

//   const images = [
//     {
//     id:1,
//     image: 'https://st2.depositphotos.com/2001755/8564/i/450/depositphotos_85647140-stock-photo-beautiful-landscape-with-birds.jpg'
//     },
//     {
//     id:2,
//     image: 'https://st2.depositphotos.com/2001755/8564/i/450/depositphotos_85647140-stock-photo-beautiful-landscape-with-birds.jpg'
//     },
//     {
//     id:3,
//     image: 'https://st2.depositphotos.com/2001755/8564/i/450/depositphotos_85647140-stock-photo-beautiful-landscape-with-birds.jpg'
//     },
// ]

//   return (
//     <div className="relative">
//       {/* <AiOutlineLeft
//         onClick={handlePrevSlide}
//         className="absolute left-0 m-auto text-5xl inset-y-1/2 cursor-pointer text-gray-400 z-20"
//       /> */}
//       <div className="w-full h-[50vh] flex overflow-hidden relative m-auto">
//         <Swipe
//           onSwipeLeft={handleNextSlide}
//           onSwipeRight={handlePrevSlide}
//           className="relative z-10 w-full h-full"
//         >
//           {images.map((image, index) => {
//             if (index === currentSlide) {
//                 {console.log('img',image.image)}
//               return (
//                 <Image
//                   key={image.id}
//                   src={image.image}
//                 //   image={image.image}
//                   layout="fill"
//                 //   objectFit="contain"
//                   className="animate-fadeIn"
//                 />
//               );
//             }
//           })}
//         </Swipe>
//       </div>
//       {/* <AiOutlineRight
//         onClick={handleNextSlide}
//         className="absolute right-0 m-auto text-5xl inset-y-1/2 cursor-pointer text-gray-400 z-20"
//       /> */}

//       <div className="relative flex justify-center p-2">
//         {images.map((_, index) => {
//           return (
//             <div
//               className={
//                 index === currentSlide
//                   ? "h-4 w-4 bg-gray-700 rounded-full mx-2 mb-2 cursor-pointer"
//                   : "h-4 w-4 bg-gray-300 rounded-full mx-2 mb-2 cursor-pointer"
//               }
//               key={index}
//               onClick={() => {
//                 setCurrentSlide(index);
//               }}
//             />
//           );
//         })}
//       </div>
//     </div>
//   );
// }














import React from 'react'

const CarouselComp = () => {
    return (
        <div id="indicators-carousel" className="relative w-full" data-carousel="static">
            {/* <!-- Carousel wrapper --> */}
            <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
                {/* <!-- Item 1 --> */}
                <div className="hidden duration-700 ease-in-out" data-carousel-item="active">
                    <img src="https://images.unsplash.com/photo-1509043759401-136742328bb3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D&w=1000&q=80" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
                </div>
                {/* <!-- Item 2 --> */}
                <div className="hidden duration-700 ease-in-out" data-carousel-item>
                    <img src="https://e0.pxfuel.com/wallpapers/186/858/desktop-wallpaper-love-for-phone-beautiful-cute-love.jpg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
                </div>
                {/* <!-- Item 3 --> */}
                <div className="hidden duration-700 ease-in-out" data-carousel-item>
                    <img src="https://images.pexels.com/photos/381739/pexels-photo-381739.jpeg?cs=srgb&dl=pexels-sevenstorm-juhaszimrus-381739.jpg&fm=jpg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
                </div>
                {/* <!-- Item 4 --> */}
                <div className="hidden duration-700 ease-in-out" data-carousel-item>
                    <img src="https://st2.depositphotos.com/2001755/8564/i/450/depositphotos_85647140-stock-photo-beautiful-landscape-with-birds.jpg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
                </div>
                {/* <!-- Item 5 --> */}
                <div className="hidden duration-700 ease-in-out" data-carousel-item>
                    <img src="https://st2.depositphotos.com/2001755/8564/i/450/depositphotos_85647140-stock-photo-beautiful-landscape-with-birds.jpg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
                </div>
            </div>
            {/* <!-- Slider indicators --> */}
            <div className="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
                <button type="button" className="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
                <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
                <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
                <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
                <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 5" data-carousel-slide-to="4"></button>
            </div>
            {/* <!-- Slider controls --> */}
            <button type="button" className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg className="w-4 h-4 text-white dark:text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4" />
                    </svg>
                    <span className="sr-only">Previous</span>
                </span>
            </button>
            <button type="button" className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg className="w-4 h-4 text-white dark:text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
                    </svg>
                    <span className="sr-only">Next</span>
                </span>
            </button>
        </div>
    )
}

export default CarouselComp;