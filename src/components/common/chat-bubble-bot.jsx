import React from 'react'

export default function ChatBubbleBot({ message }) {
  return (
    <div className='w-full flex justify-start text-sm'>
      <div className='flex items-center mb-0.5 lg:w-[200px] w-[55%] bubble-chat trans-g'>
        <div className='flex-1 bg-white dark:bg-gray-400 text-gray-700 dark:text-gray-900 p-2 rounded-lg mb-2 relative'>
          <p>
            {message}
          </p>
          <p className='text-xs font-titillium float-right mt-2 text-gray-800'>20:18</p>
          <div className='absolute left-0 top-1/2 transform -translate-x-1/2 rotate-45 w-3 h-3 bg-white dark:bg-gray-400' />
        </div>
      </div>
    </div>
  )
}
