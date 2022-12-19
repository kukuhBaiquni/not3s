import Image from 'next/image'
import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import useChat from 'store/chat'
import { useMutation } from 'react-query'
import { chatEvent } from 'api/chat'
import { useForm } from 'react-hook-form'

export default function ChatInput({
  isSignProcess,
}) {
  const { register, handleSubmit } = useForm()
  const chats = useChat((state) => state.chats)

  const postChat = useMutation(chatEvent)

  useEffect(() => {
    postChat.mutate({
      events: 'message',
      message: {
        messageable_type: 'user',
        content: [{
          show: true,
          speech: 'haii',
          text: 'haii',
          type: 'text',
        }],
      },
    })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const sendMessage = (data) => {
    postChat.mutate({
      data: {
        events: 'message',
        message: {
          messageable_type: 'user',
          content: [{
            show: true,
            speech: data.text,
            text: data.text,
            type: 'text',
          }],
        },
      },
    })
  }

  console.log('CHATs', chats)

  return (
    <div className='chat-head border-none sticky bottom-0 left-0 w-full'>
      <div className='h-[72px] w-full px-2 flex items-center gap-2'>
        {!isSignProcess && (
          <React.Fragment>
            <i className='bx bx-happy text-2xl' />
            <div className='bg-sky-50 dark:bg-gray-700 w-full rounded px-2 py-0.5 flex items-center justify-between'>
              <input
                className='w-[80%] bg-transparent'
                placeholder='Ketik disini..'
                type='text'
                {...register('text', { required: true })}
                onKeyUp={handleSubmit(sendMessage)}
              />
              <i className='bx bx-paperclip text-2xl' />
            </div>
            <i className='bx bxs-send text-2xl' />
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
