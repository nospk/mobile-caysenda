import type { NextPageWithLayout } from '@/pages/_app';
import type { ReactElement } from 'react'
import HomeLayout from '@/layout/HomeLayout'
import ProductCard from '@/components/ProductCard';
import HomeMenu from '@/components/HomeMenu';
import styles from './index.module.css';


const Home: NextPageWithLayout = () => {
  const products = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const list = products.map(product => <ProductCard key={product} name='Kẹo dẻo' price={100000} sold={300} image='' />)
  return (
    <>
      <HomeMenu />
      {/* Show Products */}
      <div className={styles.products}>
        {list}
      </div>
    </>
  )
}
Home.getLayout = function getLayout(page: ReactElement) {
  return (
    <HomeLayout>
      {page}
    </HomeLayout>
  )
}
export default Home
