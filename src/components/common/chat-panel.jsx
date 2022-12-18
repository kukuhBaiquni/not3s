import PropTypes from 'prop-types'
import Sign from 'components/form/module/sign'
import { useState } from 'react'
import ChatBody from './chat-body'
import ChatInput from './chat-input'
import ChatHead from './chat-head'

/**
 * Parent component:
 *  -layouts/default-layout.jsx
 *
 * @param toggleExpand func = Tidak digunakan dicomponent ini (Pass ke ChatHead)
 * @param toggleChatPanel func = Tidak digunakan dicomponent ini (Pass ke ChatHead)
 * @param isExpanded bool = Tidak digunakan dicomponent ini (Pass ke ChatHead)
 *
 */

export default function ChatPanel({
  toggleExpand,
  isExpanded,
  toggleChatPanel,
}) {
  const [isSignProcess, setIsSignProcess] = useState(false)

  return (
    <div className='chat-expanded slide-right' id='chat-panel-open'>
      <div className='max-w-screen-xl mx-auto'>
        <ChatHead
          isExpanded={isExpanded}
          isSignProcess={isSignProcess}
          toggleChatPanel={toggleChatPanel}
          toggleExpand={toggleExpand}
        />
        <div className='h-[calc(100vh-(158px))] lg:h-[482px] chat-body' id='chat-body'>
          {isSignProcess ? (
            <Sign
              setIsSignProcess={() => setIsSignProcess((state) => !state)}
            />
          ) : (
            <ChatBody toggleChatPanel={toggleChatPanel} />
          )}
          <ChatInput isSignProcess={isSignProcess} />
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
