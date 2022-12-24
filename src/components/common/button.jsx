/* eslint-disable react/button-has-type */
import React from 'react'
import { PulseLoader } from 'react-spinners'
import color from 'constants/color'

export default function Button({
  className,
  isLoading = true,
  type = 'button',
  text = 'Button',
  onClick = () => {},
  loaderColor = color.secondary,
}) {
  return (
    <button
      className={className}
      type={type}
      onClick={onClick}
    >
      {
        isLoading ? (
          <PulseLoader className='mt-1' color={loaderColor} size={10} />
        ) : (
          text
        )
      }
    </button>
  )
}
