import React from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'

/**
 * Parent component:
 *  -components/form/module/sign.jsx
 *
 * @param register func = Fungsi React Hook Form untuk registrasi input form
 * @param label string = Label dari input form
 * @param name string = Unik id untuk registrasi input form
 * @param errorMessage string = Pesan yang akan ditampilkan jika validasi tidak sesuai
 * @param isError bool = State yang menentukan apakah input form valid atau tidak
 * @param placeholder string = Placeholder pada input form
 * @param disabled bool = State yang menentukan apakah input form dapat digunakan atau tidak
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
}) {
  return (
    <React.Fragment>
      <label>
        {label}<span className='text-red-400'>&nbsp;*</span>
        <input
          {...register(name, { required: errorMessage })}
          className={clsx(
            'w-full bg-slate-300 px-2 py-1.5 mt-1 rounded dark:text-gray-100 dark:bg-gray-700',
            disabled && 'opacity-70',
          )}
          defaultValue=''
          disabled={disabled}
          placeholder={placeholder}
          type='text'
        />
      </label>
      <p className='mb-2 text-sm text-red-400 mt-2'>{isError ? errorMessage : ''}</p>
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
}
