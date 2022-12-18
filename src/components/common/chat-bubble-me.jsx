import React from 'react'

export default function ChatBubbleMe({ message }) {
  return (
    <div className='w-full flex justify-end text-sm'>
      <div className='flex items-center flex-row-reverse mb-0.5 lg:w-[200px] w-[55%] bubble-chat text-white trans-g'>
        <div className='flex-1 bg-primary p-2 rounded-lg mb-2 relative'>
          <p>
            {message}
          </p>
          <p className='text-xs font-titillium float-right mt-2 text-gray-200'>
            20:18
          </p>
          <div className='absolute right-0 top-1/2 transform translate-x-1/2 rotate-45 w-3 h-3 bg-primary' />
        </div>
      </div>
    </div>
  )
}
