import Link from "next/link";

const Index = ({ data }) => {

  console.log('data', data);

  const product = data?.map(p => {
    return (
      <div>

        <div
          id="carouselExampleCaptions"
          className="relative"
          data-te-carousel-init
          data-te-ride="carousel">
          {/* <!--Carousel indicators--> */}
          <div
            className="absolute bottom-0 left-0 right-0 z-[2] mx-[15%] mb-4 flex list-none justify-center p-0"
            data-te-carousel-indicators>
            <button
              type="button"
              data-te-target="#carouselExampleCaptions"
              data-te-slide-to="0"
              data-te-carousel-active
              className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
              aria-current="true"
              aria-label="Slide 1"></button>
            <button
              type="button"
              data-te-target="#carouselExampleCaptions"
              data-te-slide-to="1"
              className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
              aria-label="Slide 2"></button>
            <button
              type="button"
              data-te-target="#carouselExampleCaptions"
              data-te-slide-to="2"
              className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
              aria-label="Slide 3"></button>
          </div>

          {/* <!--Carousel items--> */}
          <div
            className="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
            {/* <!--First item--> */}
            <div
              className="relative float-left -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
              data-te-carousel-active
              data-te-carousel-item
              style="backface-visibility: hidden">
              <img
                src="https://tecdn.b-cdn.net/img/Photos/Slides/img%20(15).jpg"
                className="block w-full"
                alt="..." />
              <div
                className="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-white md:block">
                <h5 className="text-xl">First slide label</h5>
                <p>
                  Some representative placeholder content for the first slide.
                </p>
              </div>
            </div>
            {/* <!--Second item--> */}
            <div
              className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
              data-te-carousel-item
              style="backface-visibility: hidden">
              <img
                src="https://tecdn.b-cdn.net/img/Photos/Slides/img%20(22).jpg"
                className="block w-full"
                alt="..." />
              <div
                className="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-white md:block">
                <h5 className="text-xl">Second slide label</h5>
                <p>
                  Some representative placeholder content for the second slide.
                </p>
              </div>
            </div>
            {/* <!--Third item--> */}
            <div
              className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
              data-te-carousel-item
              style="backface-visibility: hidden">
              <img
                src="https://tecdn.b-cdn.net/img/Photos/Slides/img%20(23).jpg"
                className="block w-full"
                alt="..." />
              <div
                className="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-white md:block">
                <h5 className="text-xl">Third slide label</h5>
                <p>
                  Some representative placeholder content for the third slide.
                </p>
              </div>
            </div>
          </div>

          {/* <!--Carousel controls - prev item--> */}
          <button
            className="absolute bottom-0 left-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
            type="button"
            data-te-target="#carouselExampleCaptions"
            data-te-slide="prev">
            <span className="inline-block h-8 w-8">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="h-6 w-6">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
            </span>
            <span
              className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
            >Previous</span
            >
          </button>
          {/* <!--Carousel controls - next item--> */}
          <button
            className="absolute bottom-0 right-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
            type="button"
            data-te-target="#carouselExampleCaptions"
            data-te-slide="next">
            <span className="inline-block h-8 w-8">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="h-6 w-6">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </span>
            <span
              className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
            >Next</span
            >
          </button>
        </div>

        <div className="gridView1">
          <Link href={`/product/${p.id}`} className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <figure>
              <img src={p.thumbnail} alt="" />
              <figcaption>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{p.title}</h5>
              </figcaption>
            </figure>
            {/* <p className={p.description.length > 70 && 'trunc'} className="font-normal text-gray-700 dark:text-gray-400">{p.description}</p> */}
            {/* <p className={p.description.length > 50 && 'trunc'} className="font-normal text-gray-700 dark:text-gray-400">{p.description}</p> */}
            <p className={p.description.length > 40 && 'trunc'} class="font-normal text-gray-700 dark:text-gray-400">{p.description}</p>
          </Link>
        </div>
      </div>
    )
  }
  );

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <div className="gridView">
        {product}
      </div>

    </div>
  )
}

export const getStaticProps = async () => {
  const res = await fetch('https://dummyjson.com/products');
  const json = await res.json();
  return {
    props: {
      data: json?.products
    }
  }
}

export default Index;






// import Link from "next/link";

// const Index = ({ data }) => {
//   console.log("data", data);
//   const products = data.map((p) => {
//     return (
//       <>
//         {/* <img src={p.thumbnail}/>
//       <Link href={`/product/${p.id}`}>{p.title}</Link> */}
//         {/* <section className="flex flex-col items-center justify-center mb-22">
//           <span className="text-center font-bold my-20">
//             <a
//               href="https://egoistdeveloper.github.io/twcss-to-sass-playground/"
//               target="_blank"
//               className="text-blue-600"
//             >
//               Convetert to SASS
//             </a>

//             <hr className="my-4" />
//           </span>
//         </section> */}

// <section x-data="xData()" className="bg-gray-100 dark:bg-gray-900 py-10 px-12">
//     {/* <!-- Card Grid --> */}
//     <div
//         className="grid grid-flow-row gap-8 text-neutral-600 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
//         <template x-for="post in posts">
//             {/* <!-- Card Item --> */}
//             <div
//                 className="my-8 rounded shadow-lg shadow-gray-200 dark:shadow-gray-900 bg-white dark:bg-gray-800 duration-300 hover:-translate-y-1"
//                 x-for="(post, index) in posts">
//                 {/* <!-- Clickable Area --> */}
//                 <a _href="link" className="cursor-pointer">
//                     <figure>
//                         {/* <!-- Image --> */}
//                         <img src={p.thumbnail}
//                             className="rounded-t h-72 w-full object-cover" />

//                         <figcaption className="p-4">
//                             {/* <!-- Title --> */}
//                             <p
//                                 className="text-lg mb-4 font-bold leading-relaxed text-gray-800 dark:text-gray-300"
//                                 x-text="post.title">
//                                 {/* <!-- Post Title --> */}
//                                 {p.title}
//                             </p>

//                             {/* <!-- Description --> */}
//                             <small
//                                 className="leading-5 text-gray-500 dark:text-gray-400"
//                                 x-text="post.description">
//                                 {/* <!-- Post Description --> */}
//                             </small>
//                         </figcaption>
//                     </figure>
//                 </a>
//             </div>
//         </template>
//     </div>
// </section>


//       </>
//     );
//   });
//   return <div>{products}</div>;
// };

// export const getStaticProps = async () => {
//   const data = await fetch("https://dummyjson.com/products");
//   const res = await data.json();

//   return {
//     props: {
//       data: res.products,
//     },
//   };
// };

// export default Index;
