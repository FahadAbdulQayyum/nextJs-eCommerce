import Link from "next/link";

const Index = ({ data }) => {

  console.log('data', data);

  const product = data?.map(p => {
    return (
      <div className="gridView1">
        <Link href={`/product/${p.id}`} class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
          <figure>
            <img src={p.thumbnail} alt="" />
            <figcaption>
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{p.title}</h5>
            </figcaption>
          </figure>
          {/* <p className={p.description.length > 70 && 'trunc'} class="font-normal text-gray-700 dark:text-gray-400">{p.description}</p> */}
          {/* <p className={p.description.length > 50 && 'trunc'} class="font-normal text-gray-700 dark:text-gray-400">{p.description}</p> */}
          <p className={p.description.length > 40 && 'trunc'} class="font-normal text-gray-700 dark:text-gray-400">{p.description}</p>
          {console.log('description.length', p.description.length)}
        </Link>
      </div>
    )
  }
  )

  return (
    <div style={{display:'flex',justifyContent:'center'}}>
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

//             <hr class="my-4" />
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
