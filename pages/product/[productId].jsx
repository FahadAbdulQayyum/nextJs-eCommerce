import Link from "next/link";

const ProductId = ({ data }) => {
  return (
    <>
      <button>
        <Link href="/">Go Back to Product List</Link>
      </button>
      <h1>{data.title}</h1>
      <p>{data.description}</p>
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
  return {
    paths: [
      {
        params: {
          productId: "1",
        },
      },
    ],
    // fallback: false,
    // fallback: true,
    fallback: "blocking",
  };
};

export default ProductId;
