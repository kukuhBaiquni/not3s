import Sign from 'components/form/module/sign'
import { useState } from 'react'
import ChatBody from './chat-body'
import ChatInput from './chat-input'
import ChatHead from './chat-head'

export default function ChatPanel() {
  const [isSignProcess, setIsSignProcess] = useState(true)

  return (
    <div className='chat-expanded slide-right' id='chat-panel-open'>
      <div className='max-w-screen-xl mx-auto'>
        <ChatHead
          isSignProcess={isSignProcess}
        />
        <div className='h-[calc(100vh-(158px))] lg:h-[482px] chat-body' id='chat-body'>
          {isSignProcess ? (
            <Sign
              setIsSignProcess={() => setIsSignProcess((state) => !state)}
            />
          ) : (
            <ChatBody />
          )}
          <ChatInput isSignProcess={isSignProcess} />
        </div>
      </div>
    </div>
  )
}
