import Image from 'next/image'

export default function HorizontalViewProduct() {
  const onBuy = () => {

  }
  return (
    <div className='w-full overflow-x-auto fancy-scroll flex my-2'>
      {
        Array.from({ length: 8 }).map((_, i) => (
          <div className='relative mx-1 w-[165px]' key={i}>
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
