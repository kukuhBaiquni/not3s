import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component'
import { useEffect, useState, useRef } from 'react'
import useScrollToTop from 'hooks/useScrollToTop'
import ChatBubbleBot from './chat-bubble-bot'
import ChatBubbleMe from './chat-bubble-me'

export default function ChatBody({
  toggleChatPanel,
}) {
  // const { visible, scrollToTop } = useScrollToTop()
  const [data, setData] = useState(Array.from({ length: 20 }))

  const bodyScroll = useRef(null)

  useEffect(() => {
    /**
     * Initial render
     */
    console.log('test')
  }, [])

  const fetchMoreData = () => {
    setTimeout(() => {
      setData(data.concat(Array.from({ length: 20 })))
    }, 500)
  }

  const scrollToTop = () => {
    bodyScroll.current.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    })
  }
  return (
    <main
      className='h-full w-full mx-auto overflow-y-auto fancy-scroll relative flex flex-col-reverse'
      id='infinite-scroll'
      ref={bodyScroll}
    >
      <button className='fixed z-50 top-4 right-4 block' type='button' onClick={scrollToTop}>
        press
      </button>
      <button
        className='h-8 w-8 rounded-full bg-primary fixed z-50 top-4 right-4 opacity-70 block sm:hidden'
        type='button'
      >
        <i
          className='bx bx-x text-2xl cursor-pointer hover:opacity-70 transition-all'
          title='close'
          onClick={toggleChatPanel}
        />
      </button>
      <InfiniteScroll
        className='w-full lg:p-8 p-2 px-6 flex flex-col-reverse'
        dataLength={data.length}
        endMessage='LOOL'
        hasMore
        inverse
        loader={null}
        next={fetchMoreData}
        scrollThreshold={0.9}
        scrollableTarget='infinite-scroll'
      >
        {data.map((val, index) => (
          <ChatBubbleBot key={index} message={`tikuss${ index}`} />
        ))}
        {/* <ChatBubbleMe />
        <ChatBubbleBot />
        <ChatBubbleMe />
        <ChatBubbleBot />
        <ChatBubbleMe />
        <ChatBubbleBot />
        <ChatBubbleMe />
        <ChatBubbleBot />
        <ChatBubbleMe /> */}
      </InfiniteScroll>
    </main>
  )
}

ChatBody.propTypes = {
  toggleChatPanel: PropTypes.func,
}
