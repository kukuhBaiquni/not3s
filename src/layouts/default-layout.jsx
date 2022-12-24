import React from 'react'
import PropTypes from 'prop-types'
import dynamic from 'next/dynamic'
import { ToastContainer } from 'react-toastify'

const Header = dynamic(
  () => import('components/block/header'),
  { ssr: false },
)

export default function DefaultLayout({ children }) {
  return (
    <div className='tm-base'>
      <Header />
      {/* <div className='root'>
        <div className='flex gap-x-2 justify-between'>
          <Sidebar />
          {children}
          <Feed />
        </div>
      </div> */}
      {/* <div className='root'>
      </div> */}
      {children}
      <ToastContainer />
    </div>
  )
}

DefaultLayout.propTypes = {
  children: PropTypes.node,
}
