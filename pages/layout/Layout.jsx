import React from 'react'

const Layout = ({children}) => {
  return (
<div className="m-40">
  {children}
      <h1 className="text-3xl text-cyan-500">
        Tailwind CSS 3 with{' '}
        <span className="font-sans text-gray-700 shadow-md shadow-cyan-500/30 px-2 py-2 font-light rounded-full">
          Next.JS
        </span>
      </h1>
    </div>
  )
}

export default Layout;

// *********************

// import Head from 'next/head';
// import Link from 'next/link';
// import { useState } from 'react';


// export default function Layout() {
//   const [navbar, setNavbar] = useState(false);
//   return (
//     <div>
//       <Head>
//         <title>Create Next Responsive Navbar With Tailwind CSS</title>
//         <meta
//           name="description"
//           content="Create Next JS Responsive Menu with Tailwind CSS"
//         />
//         <link rel="icon" href="/favicon.ico" />
//       </Head>
//       <nav className="w-full bg-gray-800 shadow">
//         <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
//           <div>
//             <div className="flex items-center justify-between py-3 md:py-5 md:block">
//               <a href="#">
//                 <h2 className="text-2xl text-white font-bold">NEXT JS</h2>
//               </a>
//               <div className="md:hidden">
//                 <button
//                   className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
//                   onClick={() => setNavbar(!navbar)}
//                 >
//                   {navbar ? (
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       className="w-6 h-6 text-white"
//                       viewBox="0 0 20 20"
//                       fill="currentColor"
//                     >
//                       <path
//                         fillRule="evenodd"
//                         d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
//                         clipRule="evenodd"
//                       />
//                     </svg>
//                   ) : (
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       className="w-6 h-6 text-white"
//                       fill="none"
//                       viewBox="0 0 24 24"
//                       stroke="currentColor"
//                       strokeWidth={2}
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         d="M4 6h16M4 12h16M4 18h16"
//                       />
//                     </svg>
//                   )}
//                 </button>
//               </div>
//             </div>
//           </div>
//           <div>
//             <div
//               className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
//                 navbar ? 'block' : 'hidden'
//               }`}
//             >
//               <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
//                 <li className="text-white">
//                   <Link href="/">
//                     <a>Home</a>
//                   </Link>
//                 </li>
//                 <li className="text-white">
//                   <Link href="/blogs">
//                     <a>Blogs</a>
//                   </Link>
//                 </li>
//                 <li className="text-white">
//                   <Link href="/about">
//                     <a>About US</a>
//                   </Link>
//                 </li>
//                 <li className="text-white">
//                   <Link href="/contact">
//                     <a>Contact US</a>
//                   </Link>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </nav>
//       <div className="flex justify-center items-center mt-8">
//         <h1 className="text-2xl font-bold text-purple-500">
//           Create Responsive Navbar Menu in Next js with Tailwind CSS
//         </h1>
//       </div>
//     </div>
//   );
// }

// ***************************

// const Layout = ({ children }) => {
//   return (
//     <>
//       <h1>Header</h1>
//       {children}
//       <h1>Footer</h1>
//     </>
//   );
// };

// export default Layout;
