import React from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'

/**
 * Parent component:
 *  -components/form/module/sign.jsx
 *
 * @param register func = Fungsi React Hook Form untuk registrasi input form
 * @param label string = Label untuk input form
 * @param name string = Unik id untuk registrasi input form
 * @param errorMessage string = Pesan yang akan ditampilkan jika validasi tidak sesuai
 * @param isError bool = State yang menentukan apakah input form valid atau tidak
 * @param placeholder string = Placeholder pada input form
 * @param disabled bool = State yang menentukan apakah input form dapat digunakan atau tidak
 * @param type string = HTML type untuk input form
 *
 */

export default function Input({
  register,
  label,
  name,
  errorMessage,
  isError,
  placeholder,
  disabled,
  type = 'text',
}) {
  return (
    <React.Fragment>
      <label>
        {label}<span className='text-red-400'>&nbsp;*</span>
        <input
          autoComplete='off'
          {...register(name, { required: errorMessage })}
          className={clsx(
            isError && 'border-red-400',
            !isError && 'border-secondary dark:border-gray-200',
            'w-full px-2 border-b py-1.5 mt-1 bg-transparent focus:border-primary',
            disabled && 'opacity-70',
          )}
          defaultValue=''
          disabled={disabled}
          placeholder={placeholder}
          type={type}
        />
      </label>
      <p className='mb-2 font-titillium text-sm text-red-400 mt-1'>{isError ? errorMessage : ''}</p>
    </React.Fragment>
  )
}

Input.propTypes = {
  register: PropTypes.func,
  label: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  errorMessage: PropTypes.string,
  isError: PropTypes.bool,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  type: PropTypes.string,
}
