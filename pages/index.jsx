import Link from "next/link";

const Index = ({data}) => {
    console.log('data',data);
    const products = data.map(p => <div><Link href={`/product/${p.id}`}>{p.title}</Link></div>)
  return (
    <div>{products}</div>
  )
}

export const getStaticProps = async () => {
    const data = await fetch('https://dummyjson.com/products')
    const res = await data.json();

    return {
        props: {
            data: res.products
        }
    }
}

export default Index