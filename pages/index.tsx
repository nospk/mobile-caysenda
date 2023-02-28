import type { NextPageWithLayout } from '@/pages/_app'
import type { ReactElement } from 'react'
import HomeLayout from '@/layout/HomeLayout'
import ProductCard from '@/components/ProductCardCol'
import Menu from '@/components/Menu'
import Head from '@/components/Head'
import ProductFlexLayout from '@/layout/ProductFlexLayout'
import SliderCard from '@/components/SliderCard'
import SearchCardCol from '@/components/SearchCardCol'
const Home: NextPageWithLayout = () => {
  const productsLefts = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  const productsRights = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
  const slideBanners = [
    'https://images.unsplash.com/photo-1675711450153-a539472e7e27?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=1000&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY3NzUxNDM2OA&ixlib=rb-4.0.3&q=80&w=1500',
    'https://images.unsplash.com/photo-1677009741202-b761c523fd15?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=1000&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY3NzUxNDcwNQ&ixlib=rb-4.0.3&q=80&w=1500',
    'https://images.unsplash.com/photo-1676664506255-d0f9634f103d?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=1000&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY3NzUxNDczMg&ixlib=rb-4.0.3&q=80&w=1500'
  ]
  const listslideBanner = slideBanners.map(slideBanner => {
    return {
      src: slideBanner,
      alt: 'banner',
      link: '/product'
    }
  })
  const listLeft = productsLefts.map(productsLeft => (
    <ProductCard
      key={productsLeft}
      name='Kẹo dẻo'
      price={100000}
      sold={300}
      image={`https://source.unsplash.com/random/300x300?sig=${
        Math.random() * 100
      }`}
    />
  ))
  const listRight = productsRights.map(productsRight => (
    <ProductCard
      key={productsRight}
      name='Kẹo dẻo'
      price={100000}
      sold={300}
      image={`https://source.unsplash.com/random/300x300?sig=${
        Math.random() * 100
      }`}
    />
  ))

  listLeft.unshift(<SliderCard key={30} banner={listslideBanner} />)
  // prettier-ignore
  listRight.splice(3, 0,<SearchCardCol key={31} keywords={["Quần Áo", "Đồ trẻ em", "Túi xách", "Quần jean", "Áo Thun", "Túi xách hình con thỏ", "Tai nghe bluetooth", "Điện thoại Iphone"]}/>)
  return (
    <>
      <Head title='Trang chủ - Cây Sen Đá' description='test' />
      <Menu />
      {/* Show Products */}
      <ProductFlexLayout>
        <div className='flex-1'>{listLeft}</div>
        <div className='flex-1'>{listRight}</div>
      </ProductFlexLayout>
    </>
  )
}
Home.getLayout = function getLayout (page: ReactElement) {
  return <HomeLayout>{page}</HomeLayout>
}
export default Home
