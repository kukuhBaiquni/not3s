import Image from 'next/image'
import useUiRelated from 'store/ui-related'

export default function ChatHead() {
  const {
    toggleChatPanel, isChatPanelExpanded, toggleChatPanelExpanded, isSignProcess,
  } = useUiRelated((state) => state)

  return (
    <header
      className='lg:flex hidden items-center chat-head justify-between py-4 px-6 w-full h-[75px] bg-indigo-300'
      id='chat-head'
    >
      <div className='flex items-center gap-2'>
        <Image
          alt='logo'
          height={70}
          priority
          src='/images/lenna.svg'
          width={45}
        />
        <h6 className='text-xl'>Lenna</h6>
      </div>
      <div className='flex items-center gap-2'>
        {!isSignProcess && (
          <i
            className='bx bx-expand text-xl cursor-pointer hover:opacity-70 transition-all'
            title='Expand Chat'
            onClick={() => toggleChatPanelExpanded(true)}
          />
        )}
        {!isChatPanelExpanded && (
          <i
            className='bx bx-x text-4xl cursor-pointer hover:opacity-70 transition-all'
            title='close'
            onClick={toggleChatPanel}
          />
        )}
      </div>
    </header>
  )
}
