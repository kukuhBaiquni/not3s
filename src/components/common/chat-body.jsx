import PropTypes from 'prop-types'
import ChatBubbleBot from './chat-bubble-bot'
import ChatBubbleMe from './chat-bubble-me'

export default function ChatBody({
  toggleChatPanel,
}) {
  return (
    <main className='lg:p-8 p-2 px-6 h-full w-full mx-auto overflow-y-auto fancy-scroll relative'>
      <button className='h-8 w-8 rounded-full bg-primary fixed z-50 top-4 right-4 opacity-70 block sm:hidden' type='button'>
        <i
          className='bx bx-x text-2xl cursor-pointer hover:opacity-70 transition-all'
          title='close'
          onClick={toggleChatPanel}
        />
      </button>
      <ChatBubbleBot />
      <ChatBubbleMe />
      <ChatBubbleBot />
      <ChatBubbleMe />
      <ChatBubbleBot />
      <ChatBubbleMe />
      <ChatBubbleBot />
      <ChatBubbleMe />
      <ChatBubbleBot />
      <ChatBubbleMe />
    </main>
  )
}

ChatBody.propTypes = {
  toggleChatPanel: PropTypes.func,
}
