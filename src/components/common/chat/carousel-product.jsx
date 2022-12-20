import Image from 'next/image'
import { useRef } from 'react'
import Slider from 'react-slick'

const settings = {
  autoplay: true,
  lazyLoad: true,
  infinite: true,
  pauseOnHover: false,
  arrows: false,
  speed: 500,
  autoplaySpeed: 3500,
  slidesToShow: 2,
  slidesToScroll: 1,
  initialSlide: 1,
  responsive: [
    {
      breakpoint: 1600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 1,
        initialSlide: 1,
      },
    },
    {
      breakpoint: 884,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 1,
      },
    },
    {
      breakpoint: 717,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 1,
      },
    },
    {
      breakpoint: 547,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 1,
      },
    },
  ],
}

export default function CarouselProduct() {
  const slider = useRef(null)
  return (
    <div className='relative'>
      <Slider ref={slider} {...settings} className='my-2 relative'>
        {
          Array.from({ length: 8 }).map((_, i) => (
            <div className='relative mx-2 w-[165px]' key={i}>
              <Image
                alt='product-image'
                className='tm-base bg-cover rounded-t'
                height={200}
                src='https://s3-ap-southeast-1.amazonaws.com/newpawoon/product_images/IMG_453572_1671461442.jpeg'
                width={165}
              />
              <div className='h-[150px] w-[165px] tm-base p-2 text-sm rounded-b relative'>
                <h6 className='font-bold leading-5'>Bolu Cake CR7 Messiah</h6>
                <p className='text-xs text-primary font-titillium'>IDR 97.600,00</p>
                <i className='bx bxs-star text-yellow-400 text-xs' />
                <span className='text-xs ml-1 font-titillium'>4.8</span>
                <button className='w-full bg-primary text-white rounded py-1 mt-[30px] trans-g hover:opacity-70' type='button'>
                  Beli
                </button>
              </div>
            </div>
          ))
        }
      </Slider>
      <div className='absolute top-1/3 w-full left-0 flex justify-between items-center'>
        <button
          className='bg-primary bg-opacity-70 rounded'
          type='button'
          onClick={() => slider.current.slickPrev()}
        >
          <i className='bx bx-chevron-left text-white text-2xl p-1' />
        </button>
        <button
          className='bg-primary bg-opacity-70 rounded'
          type='button'
          onClick={() => slider.current.slickNext()}
        >
          <i className='bx bx-chevron-right text-white text-2xl p-1' />
        </button>
      </div>
    </div>
  )
}
