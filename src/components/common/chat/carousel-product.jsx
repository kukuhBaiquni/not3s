import Image from 'next/image'
import { useRef } from 'react'
import Slider from 'react-slick'
import currencyFormat from 'utils/number'
import useProduct from 'store/products'
import useChat from 'store/chat'
import useUiRelated from 'store/ui-related'
import loader from '../blur-placeholder'

const settings = {
  autoplay: true,
  lazyLoad: false,
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

  const { products } = useProduct((state) => state)
  const { appendChat } = useChat((state) => state)
  const { toggleBotLoading, toggleOutletPanel } = useUiRelated((state) => state)

  const onBuy = (item) => {
    const chatBody = {
      id: `${Date.now()}-bot`,
      text: `Beli ${item.name}`,
      from: 'user',
      type: 'text',
      date: new Date(),
    }
    appendChat(chatBody)
    callBot()
  }

  const callBot = () => {
    toggleBotLoading(true)
    setTimeout(() => {
      const chatBody = {
        id: `${Date.now()}-bot`,
        text: 'Baiklah',
        from: 'bot',
        type: 'text',
        date: new Date(),
        hideAction: true,
      }
      appendChat(chatBody)
    }, 1500)
    setTimeout(() => {
      const chatBody = {
        id: `${Date.now()}-bot`,
        text: 'Silahkan memilih outlet, pastikan yang paling dekat dengan posisi kamu ya. 😊',
        from: 'bot',
        type: 'outlet-popup',
        date: new Date(),
        hideAction: true,
      }
      appendChat(chatBody)
      toggleBotLoading(false)
      toggleOutletPanel(true)
    }, 3000)
  }

  return (
    <div className='relative'>
      <Slider ref={slider} {...settings} className='my-2 relative'>
        {
          products?.map((item, i) => (
            <div className='relative mx-2 w-[165px]' key={i}>
              <div className='relative w-[165px] h-[150px]'>
                <Image
                  alt='product-image'
                  blurDataURL={loader()}
                  className='object-cover'
                  fill
                  placeholder='blur'
                  src={item.image}
                />
              </div>
              <div className='h-[150px] w-[165px] tm-base p-2 text-sm rounded-b relative'>
                <h6 className='font-bold leading-5'>{item.name}</h6>
                <p className='text-xs text-primary font-titillium'>{currencyFormat(item.price)}</p>
                <i className='bx bxs-star text-yellow-400 text-xs' />
                <span className='text-xs ml-1 font-titillium'>4.8</span>
                <button
                  className='w-full bg-primary text-white rounded py-1 mt-[30px] trans-g hover:opacity-70'
                  type='button'
                  onClick={() => onBuy(item)}
                >
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
