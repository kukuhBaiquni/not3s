import create from 'zustand'

const useUiRelated = create(
  (set, get) => ({
    isChatPanelOpen: false,
    toggleChatPanel: () => set(
      (state) => {
        const chatPanelOpen = document.getElementById('chat-panel-open')
        chatPanelOpen.classList.toggle('slide-left', !get().isChatPanelOpen)
        chatPanelOpen.classList.toggle('slide-right', get().isChatPanelOpen)

        const chatPanel = document.getElementById('chat-panel')
        chatPanel.classList.toggle('slide-up', get().isChatPanelOpen)
        chatPanel.classList.toggle('slide-down', !get().isChatPanelOpen)

        return {
          isChatPanelOpen: !state.isChatPanelOpen,
        }
      },
    ),
    isChatPanelExpanded: false,
    toggleChatPanelExpanded: (data) => set(
      () => {
        const chatPanelOpen = document.getElementById('chat-panel-open')
        chatPanelOpen.classList.toggle('chat-fullscreen', !get().isChatPanelExpanded)
        chatPanelOpen.classList.toggle('chat-expanded', get().isChatPanelExpanded)

        const bodyChat = document.getElementById('chat-body')
        const headChat = document.getElementById('chat-head')
        const chatPanel = document.getElementById('chat-panel')

        bodyChat.classList.toggle('lg:h-[482px]', get().isChatPanelExpanded)

        headChat.classList.toggle('lg:flex', get().isChatPanelExpanded)

        chatPanel.classList.toggle('slide-up', !get().isChatPanelExpanded)
        chatPanel.classList.toggle('slide-down', get().isChatPanelExpanded)
        if (!get().isChatPanelExpanded) {
          document.body.style.overflowY = 'hidden'
          const bubbleChat = document.getElementsByClassName('bubble-chat')
          Array.from(bubbleChat).forEach((el) => {
            el.style.maxWidth = '55%'
          })
        } else {
          const bubbleChat = document.getElementsByClassName('bubble-chat')
          document.body.style.overflowY = 'auto'
          Array.from(bubbleChat).forEach((el) => {
            el.style.maxWidth = '200px'
          })
        }
        return {
          isChatPanelExpanded: data,
        }
      },
    ),
    isBotLoading: false,
    toggleBotLoading: (data) => set(
      () => ({
        isBotLoading: data,
      }),
    ),
  }),
)

export default useUiRelated
