import type { NextPage } from 'next'
import HeadPage from '@/components/HeadPage';
import SearchHistory from '@/components/Home/SearchHistory';
import StickySearch from '@/components/Home/StickSearch';
import FooterMenu from '@/components/Home/FooterMenu';
import ProductCard from '@/components/Card/ProductCard'
import Menu from '@/components/Home/Menu';



const Home: NextPage = () => {
  const products = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const list = products.map(product => <ProductCard key={product} name='Kẹo dẻo' price={100000} sold={300} image=''/>)
  return (
    <>
      <HeadPage title="Trang chủ - Cây Sen Đá" />
      {/* Search Top Sticky*/}
      <StickySearch />
      {/* History Search */}
      <SearchHistory />
      {/* Menu */}
      <Menu />
      {/* Show Products */}
      <div className="grid grid-cols-2 gap-2 items-center text-sm justify-center pt-2 mx-2.5">
        {list}
      </div>
      {/* Menu Bottom Stick*/}
      <FooterMenu />
    </>
  )
}
export default Home
