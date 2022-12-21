import Image from 'next/image'
import React from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import useChat from 'store/chat'
import { useForm } from 'react-hook-form'
import { useDebouncedCallback } from 'use-debounce'
import useUiRelated from 'store/ui-related'
import botResponse from 'helpers/bot-response'

export default function ChatInput() {
  const { register, handleSubmit, reset } = useForm()
  const { appendChat } = useChat((state) => state)
  const { toggleBotLoading, isSignProcess } = useUiRelated((state) => state)

  const sendMessage = (data, e) => {
    const isEnterPressed = e.keyCode === 13
    if (isEnterPressed) {
      executeSend(data)
    }
  }

  const executeSend = (data) => {
    const chatBody = {
      id: `${Date.now()}-user`,
      text: data.text,
      from: 'user',
      type: 'text',
      date: new Date(),
    }
    appendChat(chatBody)
    reset({
      text: '',
    })
    debounceBotResponse()
  }

  const response = () => {
    const random = Math.floor(Math.random() * botResponse.length)
    toggleBotLoading(true)
    setTimeout(() => {
      const chatBody = {
        id: `${Date.now()}-bot`,
        text: botResponse[random],
        from: 'bot',
        type: 'text',
        date: new Date(),
      }
      toggleBotLoading(false)
      appendChat(chatBody)
    }, 1500)
  }
  const debounceBotResponse = useDebouncedCallback(response, 1000)

  return (
    <div className='chat-head border-none sticky bottom-0 left-0 w-full'>
      <div className='h-[72px] w-full px-2 flex items-center gap-2'>
        {!isSignProcess && (
          <React.Fragment>
            <i className='bx bx-happy text-2xl' />
            <div className='bg-sky-50 dark:bg-gray-700 w-full rounded px-2 py-0.5 flex items-center justify-between'>
              <input
                autoComplete='off'
                className='w-[90%] lg:w-[80%] bg-transparent text-sm'
                placeholder='Ketik disini..'
                type='text'
                {...register('text', { required: true })}
                onKeyUp={handleSubmit(sendMessage)}
              />
              <i className='bx bx-paperclip text-2xl' />
            </div>
            <i className='bx bxs-send text-2xl cursor-pointer' onClick={handleSubmit(executeSend)} />
          </React.Fragment>
        )}
      </div>
      <div className={clsx(
        isSignProcess ? '-translate-y-10' : '-translate-y-2',
      )}
      >
        {isSignProcess && (
          <h6 className='block text-center text-sm font-bold mb-1'>F&B Bot Messaging Service</h6>
        )}
        <div className='flex items-center justify-center gap-1 text-sm'>
          <span>Powered by</span>
          <Image
            alt='logo'
            height={70}
            priority
            src='/images/lenna.svg'
            width={20}
          />
          <span>Lenna</span>
        </div>
      </div>
    </div>
  )
}

ChatInput.propTypes = {
  isSignProcess: PropTypes.bool,
}
