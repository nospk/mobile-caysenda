import type { NextPageWithLayout } from '@/pages/_app';
import type { ReactElement } from 'react'
import HomeLayout from '@/layout/HomeLayout'
import ProductCard from '@/components/ProductCard';
import Menu from '@/components/Menu';
import styles from './index.module.css';
import Head from '@/components/Head';

const Home: NextPageWithLayout = () => {
  const products = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const list = products.map(product => <ProductCard key={product} name='Kẹo dẻo' price={100000} sold={300} image='' />)
  return (
    <>
      <Head title="Trang chủ - Cây Sen Đá" description="test" />
      <Menu />
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
