import React, { useState } from 'react'

export default function ChatBubbleBot({ message, onChatActionClick, hideAction }) {
  const [isClicked, setIsClicked] = useState(false)

  return (
    <div>
      <div className='w-full flex justify-start text-sm'>
        <div className='flex items-center mb-0.5 lg:max-w-[200px] max-w-[55%] bubble-chat trans-g'>
          <div className='flex-1 bg-white dark:bg-gray-400 text-gray-700 dark:text-gray-900 p-2 rounded-lg mt-2 relative'>
            <div className='flex justify-between items-center'>
              {message}
              <sub className='text-xs font-titillium mt-auto float-right text-secondary ml-2'>
                20:18
              </sub>
            </div>
            <div className='absolute left-0 top-[30%] transform -translate-x-1/2 rotate-45 w-3 h-3 bg-white dark:bg-gray-400' />
          </div>
        </div>
      </div>
      {
        !isClicked && !hideAction && (
          <button
            className='text-sm text-indigo-500 dark:text-indigo-400 dark:border-indigo-500 border-indigo-500 border py-1 px-4 rounded-full my-2 trans-g hover:opacity-70'
            type='button'
            onClick={() => {
              setIsClicked(true)
              onChatActionClick()
            }}
          >
            Lihat Produk
          </button>
        )
      }
    </div>
  )
}
