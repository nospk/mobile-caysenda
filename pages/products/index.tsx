import type { NextPage } from 'next'
import FooterMenu from '@/components/Home/FooterMenu'
import HeadPage from '@/components/HeadPage';
const Account: NextPage = () => {
  return (
    <>
      <HeadPage title='Sản Phẩm' />
      <p>Sản Phẩm</p>
      <FooterMenu />
    </>
  )
}
export default Account