import PropTypes from 'prop-types'
import ChatBody from './chat-body'
import ChatInput from './chat-input'
import ChatHead from './chat-head'

export default function ChatPanel({
  // These props drill 2 level to "ChatHead"
  toggleExpand,
  isExpanded,
  toggleChatPanel, // Used on line:27 | Passed to "ChatBody"
}) {
  return (
    <div className='chat-expanded slide-right' id='chat-panel-open'>
      <div className='max-w-screen-xl mx-auto'>
        <ChatHead
          isExpanded={isExpanded}
          toggleChatPanel={toggleChatPanel}
          toggleExpand={toggleExpand}
        />
        <div className='h-[calc(100vh-(158px))] lg:h-[482px] chat-body' id='chat-body'>
          <ChatBody toggleChatPanel={toggleChatPanel} />
          <ChatInput />
        </div>
      </div>
    </div>
  )
}

ChatPanel.propTypes = {
  toggleExpand: PropTypes.func,
  isExpanded: PropTypes.bool,
  toggleChatPanel: PropTypes.func,
}
