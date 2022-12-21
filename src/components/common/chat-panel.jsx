import Sign from 'components/form/module/sign'
import useUiRelated from 'store/ui-related'
import { useEffect, useCallback } from 'react'
import useChat from 'store/chat'
import { useDebouncedCallback } from 'use-debounce'
import ChatBody from './chat-body'
import ChatInput from './chat-input'
import ChatHead from './chat-head'

export default function ChatPanel() {
  const {
    isSignProcess, toggleBotLoading, toggleOutletPanelOpen, isOutletOpen,
  } = useUiRelated((state) => state)
  const { appendChat, chats } = useChat((state) => state)

  const initialBot = useCallback(() => {
    toggleBotLoading(true)
    setTimeout(() => {
      const chatBody = {
        id: `${Date.now()}-bot`,
        text: 'Halo, senang bertemu dengan Anda. Apa yang dapat saya bantu Anda dengan hari ini?',
        from: 'bot',
        type: 'text',
        date: new Date(),
      }
      appendChat(chatBody)
      toggleBotLoading(false)
    }, 1500)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const debouncedInitialBot = useDebouncedCallback(initialBot, 1000)

  useEffect(() => {
    if (chats[0]?.type === 'outlet-popup') {
      toggleOutletPanelOpen(true)
    }
  }, [chats, toggleOutletPanelOpen])

  useEffect(() => {
    debouncedInitialBot()
  }, [debouncedInitialBot])

  return (
    <div className='chat-expanded slide-right' id='chat-panel-open'>
      <div className='max-w-screen-xl mx-auto'>
        <ChatHead />
        <div className='h-[calc(100vh-(158px))] lg:h-[482px] chat-body relative' id='chat-body'>
          {isOutletOpen && (
            <div className='absolute top-0 left-0 z-[60] h-full w-full bg-black bg-opacity-75'>
              <div className='w-[90%] mx-auto h-[95%] tm-base translate-y-6 rounded-t-xl'>
                wonc
              </div>
            </div>
          )}
          {isSignProcess ? (
            <Sign />
          ) : (
            <ChatBody />
          )}
          <ChatInput />
        </div>
      </div>
    </div>
  )
}
