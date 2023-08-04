// import React from 'react';
// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { Carousel } from 'react-responsive-carousel';

// const CarouselComp = () => {
//         return (
//             <div>
//                 <Carousel className='carousel'>
//                     <div>
//                         <img src="https://e0.pxfuel.com/wallpapers/186/858/desktop-wallpaper-love-for-phone-beautiful-cute-love.jpg" alt="image1" />
//                         <p className="legend">Image 1</p>

//                     </div>
//                     <div>
//                         <img src="https://e0.pxfuel.com/wallpapers/186/858/desktop-wallpaper-love-for-phone-beautiful-cute-love.jpg" alt="image2" />
//                         <p className="legend">Image 2</p>

//                     </div>
//                     <div>
//                         <img src="https://e0.pxfuel.com/wallpapers/186/858/desktop-wallpaper-love-for-phone-beautiful-cute-love.jpg" alt="image3" />
//                         <p className="legend">Image 3</p>

//                     </div>
//                     <div>
//                         <img src="https://e0.pxfuel.com/wallpapers/186/858/desktop-wallpaper-love-for-phone-beautiful-cute-love.jpg" alt="image4" />
//                         <p className="legend">Image 4</p>

//                     </div>
//                     <div>
//                         <img src="https://e0.pxfuel.com/wallpapers/186/858/desktop-wallpaper-love-for-phone-beautiful-cute-love.jpg" alt="image5" />
//                         <p className="legend">Image 5</p>

//                     </div>
//                 </Carousel>
//             </div>
//         );
//     }

//     export default CarouselComp;


// *************************************************


// import React from 'react'

// const CarouselComp = () => {
//     return (
//         <div id="default-carousel" class="relative w-full" data-carousel="slide">
//             {/* <!-- Carousel wrapper --> */}
//             <div class="relative h-56 overflow-hidden rounded-lg md:h-96">
//                 {/* <!-- Item 1 --> */}
//                 <div class="hidden duration-700 ease-in-out" data-carousel-item>
//                     <img src="https://images.unsplash.com/photo-1509043759401-136742328bb3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D&w=1000&q=80" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
//                 </div>
//                 {/* <!-- Item 2 --> */}
//                 <div class="hidden duration-700 ease-in-out" data-carousel-item>
//                     <img src="https://e0.pxfuel.com/wallpapers/186/858/desktop-wallpaper-love-for-phone-beautiful-cute-love.jpg" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
//                 </div>
//                 {/* <!-- Item 3 --> */}
//                 <div class="hidden duration-700 ease-in-out" data-carousel-item>
//                     <img src="https://st2.depositphotos.com/2001755/8564/i/450/depositphotos_85647140-stock-photo-beautiful-landscape-with-birds.jpg" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
//                 </div>
//                 {/* <!-- Item 4 --> */}
//                 <div class="hidden duration-700 ease-in-out" data-carousel-item>
//                     <img src="https://images.pexels.com/photos/381739/pexels-photo-381739.jpeg?cs=srgb&dl=pexels-sevenstorm-juhaszimrus-381739.jpg&fm=jpg" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
//                 </div>
//                 {/* <!-- Item 5 --> */}
//                 <div class="hidden duration-700 ease-in-out" data-carousel-item>
//                     <img src="https://images.pexels.com/photos/381739/pexels-photo-381739.jpeg?cs=srgb&dl=pexels-sevenstorm-juhaszimrus-381739.jpg&fm=jpg" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
//                 </div>
//             </div>
//             {/* <!-- Slider indicators --> */}
//             <div class="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
//                 <button type="button" class="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
//                 <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
//                 <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
//                 <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
//                 <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 5" data-carousel-slide-to="4"></button>
//             </div>
//             {/* <!-- Slider controls --> */}
//             <button type="button" class="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
//                 <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
//                     <svg class="w-4 h-4 text-white dark:text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
//                         <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4" />
//                     </svg>
//                     <span class="sr-only">Previous</span>
//                 </span>
//             </button>
//             <button type="button" class="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
//                 <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
//                     <svg class="w-4 h-4 text-white dark:text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
//                         <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
//                     </svg>
//                     <span class="sr-only">Next</span>
//                 </span>
//             </button>
//         </div>
//     )
// }

// export default CarouselComp;


// ********************************************************************************************

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

// ********************************************************************************************