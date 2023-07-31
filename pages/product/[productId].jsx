import Link from "next/link";

const ProductId = ({ data }) => {
  return (
    <>
      <button>
        <Link href="/">Go Back to Product List</Link>
      </button>
      <h1>{data.title}</h1>
      <p>{data.description}</p>
      <img src={data.thumbnail}/>
    </>
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
