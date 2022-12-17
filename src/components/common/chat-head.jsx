import Image from 'next/image'
import PropTypes from 'prop-types'

export default function ChatHead({
  toggleChatPanel,
  toggleExpand,
  isExpanded,
}) {
  return (
    <header className='lg:flex hidden items-center chat-head justify-between py-4 px-6 w-full h-[75px]' id='chat-head'>
      <div className='flex items-center gap-2'>
        <Image
          alt='logo'
          height={70}
          src='/images/lenna.svg'
          width={45}
        />
        <h6 className='text-xl'>Lenna</h6>
      </div>
      <div className='flex items-center gap-2'>
        <i
          className='bx bx-expand text-xl cursor-pointer hover:opacity-70 transition-all'
          title='Expand Chat'
          onClick={toggleExpand}
        />
        {!isExpanded && (
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
  toggleChatPanel: PropTypes.func,
  toggleExpand: PropTypes.func,
  isExpanded: PropTypes.bool,
}
