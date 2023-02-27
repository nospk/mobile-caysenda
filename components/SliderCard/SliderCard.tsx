import type { FC } from 'react'
import styles from './SliderCard.module.css'
import SwiperCore, { Pagination, Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper-bundle.min.css'
import Image from 'next/image'
SwiperCore.use([Pagination, Autoplay])
const Slide: FC = () => {
  return (
    <div className='h-full'>
      <Swiper
        className='h-full'
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 5500,
          disableOnInteraction: false
        }}
      >
        <SwiperSlide >
          <div className='h-96 w-50'>
            <Image
              className='rounded-xl'
              src={`https://images.unsplash.com/photo-1675711450153-a539472e7e27?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=1000&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY3NzUxNDM2OA&ixlib=rb-4.0.3&q=80&w=1500`}
              alt='Picture of the author'
              sizes='46.4vw,46.4vw'
              fill
              style={{ objectFit: 'cover' }}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='h-96 w-50'>
            <Image
              className='rounded-xl'
              src={`https://images.unsplash.com/photo-1677009741202-b761c523fd15?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=1000&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY3NzUxNDcwNQ&ixlib=rb-4.0.3&q=80&w=1500`}
              alt='Picture of the author'
              sizes='46.4vw,46.4vw'
              fill
              style={{ objectFit: 'cover' }}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='h-96 w-50'>
            <Image
              className='rounded-xl'
              src={`https://images.unsplash.com/photo-1676664506255-d0f9634f103d?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=1000&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY3NzUxNDczMg&ixlib=rb-4.0.3&q=80&w=1500`}
              alt='Picture of the author'
              sizes='46.4vw,46.4vw'
              fill
              style={{ objectFit: 'cover' }}
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}
const Sliceshow: FC = () => {
  return (
    <div className={styles.silder}>
      <Slide />
    </div>
  )
}
export default Sliceshow
