import Link from "next/link";

const ProductId = ({ data }) => {
  // console.log("daga", data);
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
  console.log('getStaticPathssss')
  const data = await fetch('https://dummyjson.com/products');
  const res = await data.json();
  // console.log('ressss',res.products.map(v=>params+':'+v.id.toString()));
  const pId = res.products.map(v=>{
    return{ 
      params: {productId: v.id.toString()}
    }
  });

  // console.log('ressss',res.products.map(v=>{
  //   return{ 
  //     params: {'productId': v.id.toString()}
  //   }
  // }));
  
  // const products = res.products.map(v=>{params: {productId: v.id}});
  // console.log('productssss',products);
  return {
    // paths: [
    //   // {
    //     // params: {
    //     //   productId: "1",
    //     // },
    //   // },
    // ],
    paths: pId,
    fallback: false,
    // fallback: true,
    // fallback: "blocking",
  };
};

export default ProductId;
