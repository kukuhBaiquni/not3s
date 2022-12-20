import React, { useEffect, useState } from 'react'
import { ClockLoader } from 'react-spinners'

export default function ChatBubbleMe({ message }) {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    console.log('init')
    setTimeout(() => {
      setIsLoading(false)
    }, 700)
  }, [])
  return (
    <div className='w-full flex justify-end text-sm'>
      <div className='flex items-center flex-row-reverse mb-0.5 lg:max-w-[200px] max-w-[55%] min-w-[80px] bubble-chat text-white trans-g'>
        <div className='flex-1 bg-primary p-2 rounded-lg relative'>
          <div className='flex justify-between items-center pb-4'>
            {message}
            <div className='flex items-center  absolute right-2 bottom-2'>
              <ClockLoader className='mx-1 ml-2' color='rgb(249 168 212)' loading={isLoading} size={10} />
              {!isLoading && <i className='bx bx-check-double text-lime-400 mx-1 ml-2' />}
              <span className='text-xs font-titillium mt-auto float-right text-pink-300'>
                20:18
              </span>
            </div>
          </div>
          <div className='absolute right-0 top-[30%] transform translate-x-1/2 rotate-45 w-3 h-3 bg-primary' />
        </div>
      </div>
    </div>
  )
}
