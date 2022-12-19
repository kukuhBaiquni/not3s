import create from 'zustand'

const chat = create(
  (set) => ({
    chats: [],
    setChat: (data) => set(
      (state) => ({
        chats: state,
      }),
    ),
  }),
)

export default chat
