import React from 'react'
import Image from 'next/image'
import useDarkMode from 'hooks/use-dark-mode'

const menu = [
  { text: 'Home' },
  { text: 'Products' },
  { text: 'Solutions' },
  { text: 'Customers' },
  { text: 'Blog' },
  { text: 'Company' },
  { text: 'Languages' },
]

export default function Header() {
  const { theme, setTheme } = useDarkMode()
  return (
    <header className='w-full h-[75px] sticky left-0 top-0 drop-shadow-sm tm-base border-b z-50'>
      <div className='max-w-screen-xl mx-auto h-full items-center flex justify-between px-8 2xl:px-0 trans-g'>
        <div className='flex items-center gap-2'>
          <Image
            alt='logo'
            height={70}
            src='/images/lenna.svg'
            width={45}
          />
          <h6 className='text-xl'>Lenna</h6>
        </div>
        <ul className='w-[55%] lg:flex justify-between hidden font-bold'>
          {menu.map((item, index) => (
            <li key={index}>{item.text}</li>
          ))}
        </ul>
        <button
          className='px-8 py-3 bg-primary text-xs text-white rounded font-bold hover-button hidden lg:flex'
          type='button'
        >
          CONTACT US
        </button>
        <i className='bx bx-menu text-2xl flex lg:hidden' />
        <div className='hidden lg:flex'>
          {theme === 'dark' ? (
            <i
              className='bx bxs-sun text-2xl cursor-pointer'
              onClick={() => setTheme('light')}
            />
          ) : (
            <i
              className='bx bxs-moon text-2xl cursor-pointer'
              onClick={() => setTheme('dark')}
            />
          )}
        </div>
      </div>
    </header>
  )
}
