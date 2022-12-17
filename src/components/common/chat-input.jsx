import Image from 'next/image'

export default function ChatInput() {
  return (
    <div className='chat-head border-none sticky bottom-0 left-0 w-full'>
      <div className='h-[72px] w-full px-2 flex items-center gap-2'>
        <i className='bx bx-happy text-2xl' />
        <div className='bg-sky-50 dark:bg-gray-700 w-full rounded px-2 py-0.5 flex items-center justify-between'>
          <input
            className='w-[80%] bg-transparent'
            placeholder='Ketik disini..'
            type='text'
          />
          <i className='bx bx-paperclip text-2xl' />
        </div>
        <i className='bx bxs-send text-2xl' />
      </div>
      <div className='flex items-center justify-center gap-1 text-sm -translate-y-2'>
        <span>Powered by</span>
        <Image
          alt='logo'
          height={70}
          src='/images/lenna.svg'
          width={20}
        />
        <span>Lenna</span>
      </div>
    </div>
  )
}
