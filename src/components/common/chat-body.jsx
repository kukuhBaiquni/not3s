import InfiniteScroll from 'react-infinite-scroll-component'
import { useEffect, useState, useRef } from 'react'
import useChat from 'store/chat'
import useUiRelated from 'store/ui-related'
import { PulseLoader } from 'react-spinners'

import ChatBubbleBot from './chat-bubble-bot'
import ChatBubbleMe from './chat-bubble-me'

import CarouselProduct from './chat/carousel-product'
import HorizontalViewProduct from './chat/horizontal-view-product'
// 3d6cff60-80ad-11ed-9bf6-95173075802e
export default function ChatBody() {
  const { chats, appendChat } = useChat((state) => state)
  const { isBotLoading, toggleBotLoading, isChatPanelExpanded } = useUiRelated((state) => state)

  const [data, setData] = useState(Array.from({ length: 20 }))

  const bodyScroll = useRef(null)

  useEffect(() => {
    /**
     * Initial render
     */
  }, [])

  useEffect(() => {
    bodyScroll.current.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }, [chats.length])

  const fetchMoreData = () => {
    setTimeout(() => {
      setData(data.concat(Array.from({ length: 20 })))
    }, 500)
  }

  const onChatActionClick = () => {
    toggleBotLoading(true)
    setTimeout(() => {
      const chatBody = {
        id: `${Date.now()}-bot`,
        text: 'Berikut produk yang tersedia di outlet kami',
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
        text: '',
        from: 'bot',
        type: 'product',
        date: new Date(),
      }
      appendChat(chatBody)
      toggleBotLoading(false)
    }, 3000)
  }

  return (
    <main
      className='h-full w-full mx-auto overflow-y-auto fancy-scroll relative flex flex-col-reverse'
      id='infinite-scroll'
      ref={bodyScroll}
    >
      <InfiniteScroll
        className='w-full lg:py-4 py-6 px-6 flex flex-col-reverse'
        dataLength={data.length}
        endMessage='LOOL'
        hasMore
        inverse
        loader={null}
        next={fetchMoreData}
        scrollThreshold={0.9}
        scrollableTarget='infinite-scroll'
      >
        {
          isBotLoading && (
            <div className='w-full flex justify-start text-sm my-1'>
              <div className='bg-white dark:bg-gray-400 text-gray-700 dark:text-gray-900 rounded-full flex items-center'>
                <PulseLoader className='p-1' color='#0f223d' size={8} />
              </div>
            </div>
          )
        }
        {
          chats.map((chat) => {
            if (chat.from === 'user') {
              return <ChatBubbleMe key={chat.id} message={chat.text} />
            }
            if (chat.type === 'product') {
              if (isChatPanelExpanded) {
                return (
                  <HorizontalViewProduct
                    key={chat.id}
                  />
                )
              }
              return (
                <CarouselProduct
                  key={chat.id}
                />
              )
            }
            return (
              <ChatBubbleBot
                hideAction={chat.hideAction}
                key={chat.id}
                message={chat.text}
                onChatActionClick={onChatActionClick}
              />
            )
          })
        }
      </InfiniteScroll>
    </main>
  )
}
