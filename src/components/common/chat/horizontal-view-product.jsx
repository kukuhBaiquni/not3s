import Image from 'next/image'
import useProduct from 'store/products'
import currencyFormat from 'utils/number'
import loader from '../blur-placeholder'

export default function HorizontalViewProduct() {
  const { products } = useProduct((state) => state)

  const onBuy = () => {

  }
  return (
    <div className='w-full overflow-x-auto fancy-scroll flex my-2'>
      {
        products.map((item, i) => (
          <div className='relative mx-1 w-[165px]' key={i}>
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
                onClick={onBuy}
              >
                Beli
              </button>
            </div>
          </div>
        ))
      }
    </div>
  )
}
