import DefaultLayout from 'layouts/default-layout'
import { useState } from 'react'
import ChatPanel from 'components/common/chat-panel'

export default function Home() {
  const [isOpen, setIsOpen] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)

  const toggleChatPanel = () => {
    const chatPanelOpen = document.getElementById('chat-panel-open')
    setIsOpen((state) => !state)
    chatPanelOpen.classList.toggle('slide-left', !isOpen)
    chatPanelOpen.classList.toggle('slide-right', isOpen)

    const chatPanel = document.getElementById('chat-panel')
    chatPanel.classList.toggle('slide-up', isOpen)
    chatPanel.classList.toggle('slide-down', !isOpen)
  }

  const toggleExpand = () => {
    const chatPanelOpen = document.getElementById('chat-panel-open')
    setIsExpanded((state) => !state)
    chatPanelOpen.classList.toggle('chat-fullscreen', !isExpanded)
    chatPanelOpen.classList.toggle('chat-expanded', isExpanded)

    const bodyChat = document.getElementById('chat-body')
    const headChat = document.getElementById('chat-head')
    const chatPanel = document.getElementById('chat-panel')

    bodyChat.classList.toggle('lg:h-[482px]', isExpanded)

    headChat.classList.toggle('lg:flex', isExpanded)

    chatPanel.classList.toggle('slide-up', !isExpanded)
    chatPanel.classList.toggle('slide-down', isExpanded)
    if (!isExpanded) {
      document.body.style.overflowY = 'hidden'
      const bubbleChat = document.getElementsByClassName('bubble-chat')
      Array.from(bubbleChat).forEach((el) => {
        el.style.width = '55%'
      })
    } else {
      const bubbleChat = document.getElementsByClassName('bubble-chat')
      document.body.style.overflowY = 'auto'
      Array.from(bubbleChat).forEach((el) => {
        el.style.width = '200px'
      })
    }
  }

  return (
    <div className='min-h-screen'>
      <ChatPanel
        isExpanded={isExpanded}
        toggleChatPanel={toggleChatPanel}
        toggleExpand={toggleExpand}
      />
      <div className='chat-collapse shade rounded-full slide-up z-50' id='chat-panel' onClick={isExpanded ? toggleExpand : toggleChatPanel}>
        {!isOpen && <i className='bx bxs-chat text-3xl text-white' />}
        {isExpanded && <i className='bx bx-collapse text-3xl text-white' />}
      </div>
    </div>
  )
}

Home.getLayout = (page) => (
  <DefaultLayout>
    {page}
  </DefaultLayout>
)
