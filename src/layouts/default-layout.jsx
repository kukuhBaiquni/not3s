import React from 'react'
import PropTypes from 'prop-types'
import Header from 'components/block/header'

export default function DefaultLayout({ children }) {
  return (
    <div>
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
    </div>
  )
}

DefaultLayout.propTypes = {
  children: PropTypes.node,
}
