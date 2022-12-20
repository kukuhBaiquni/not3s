import create from 'zustand'

const useChat = create(
  (set) => ({
    chats: [],
    appendChat: (data) => set(
      (state) => ({
        chats: [data, ...state.chats],
      }),
    ),
  }),
)

export default useChat
