import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component'
import useScrollToTop from 'hooks/useScrollToTop'
import ChatBubbleBot from './chat-bubble-bot'
import ChatBubbleMe from './chat-bubble-me'

export default function ChatBody({
  toggleChatPanel,
}) {
  const { visible, scrollToTop } = useScrollToTop()
  return (
    <main
      className='h-full w-full mx-auto overflow-y-auto fancy-scroll relative flex flex-col-reverse'
      id='infinite-scroll'
    >
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
        dataLength={100} // This is important field to render the next data
        endMessage='LOOL'
        hasMore
        loader={null}
        next={() => { console.log('LOADING..') }}
        scrollThreshold={0.9}
        scrollableTarget='infinite-scroll'
        // inverse
      >
        {
          Array(20).fill('Twitch is Tikus').map((val, index) => (
            <ChatBubbleBot key={index} message={val + index} />

          ))
        }
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
