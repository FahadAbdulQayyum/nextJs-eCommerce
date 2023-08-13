import Link from "next/link";

const ProductId = ({ data }) => {
  return (
    <div>
      <button className="bg-cyan-400 p-3 rounded-full text-white shodow drop-shadow hover:scale-105 ease-in duration-300">
        <Link href="/">Go Back to Product List</Link>
      </button>
      <img src={data.thumbnail} className="my-10"/>
      <h1 className="text-2xl">{data.title}</h1>
      <p className="truncate">{data.description}</p>
      {/* <input type="text" placeholder="type your comment"/> */}
      <textarea className="mt-10 border-cyan-500 rounded-xl w-full" placeholder="Enter your comment here"></textarea>
      <button className="bg-cyan-500 p-2 my-2 w-full text-white rounded-2xl hover:scale-105 ease-in-out duration-200">Submit</button>
    </div>
  );
};

export const getStaticProps = async ({ params: { productId } }) => {
  const data = await fetch(`https://dummyjson.com/products/${productId}`);
  const res = await data.json();
  return {
    props: {
      data: res,
    },
  };
};

export const getStaticPaths = async () => {
  const data = await fetch('https://dummyjson.com/products');
  const res = await data.json();
  const pId = res.products.map(v=>{
    return{ 
      params: {productId: v.id.toString()}
    }
  });

  return {
    paths: pId,
    fallback: false,
    // fallback: "blocking",
  };
};

export default ProductId;
