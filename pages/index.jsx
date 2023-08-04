import Link from "next/link";

import CarouselComp from "./carousel";

const Index = ({ data }) => {

  console.log('data', data);

  const product = data?.map(p => {
    return (
      <div key={p}>
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
            {/* <p className="font-normal text-gray-700 dark:text-gray-400">{p.description}</p> */}
          </Link>
        </div>
      </div>
    )
  }
  );

  return (
    <div>
        <CarouselComp />
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div className="gridView">
          {product}
        </div>
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