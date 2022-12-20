import Image from 'next/image'
import PropTypes from 'prop-types'
import useUiRelated from 'store/ui-related'

/**
 * Parent component:
 *  -components/common/chat-panel.jsx
 *
 * @param isSignProcess bool = State yang menentukan apakah sedang proses registrasi atau tidak
 *
 */

export default function ChatHead({
  isSignProcess,
}) {
  const {
    toggleChatPanel, isChatPanelExpanded, toggleChatPanelExpanded,
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

ChatHead.propTypes = {
  isSignProcess: PropTypes.bool,
}
