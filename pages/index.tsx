import type { NextPageWithLayout } from '@/pages/_app';
import type { ReactElement } from 'react'
import Layout from '@/layout/Home'
import ProductCard from '@/components/Card/ProductCard';
import Menu from '@/components/Home/Menu';



const Home: NextPageWithLayout = () => {
  const products = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const list = products.map(product => <ProductCard key={product} name='Kẹo dẻo' price={100000} sold={300} image='' />)
  return (
    <>
      <Menu />
      {/* Show Products */}
      <div className="grid grid-cols-2 gap-2 items-center text-sm justify-center pt-2 mx-2.5">
        {list}
      </div>
    </>
  )
}
Home.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}
export default Home
