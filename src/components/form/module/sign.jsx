import { useForm } from 'react-hook-form'
import Input from 'components/form/input'
import { registration } from 'api/auth'
import { useMutation } from 'react-query'
import { toast } from 'react-toastify'
import { PulseLoader } from 'react-spinners'
import clsx from 'clsx'
import PropTypes from 'prop-types'

/**
 * Parent component:
 *  -components/common/chat-panel.jsx
 * @param setIsSignProcess func = Untuk mengubah tampilan chat panel dari registrasi ke chat (vice ver·sa)
 *
 */

export default function Sign({
  setIsSignProcess,
}) {
  const { register, handleSubmit, formState: { errors } } = useForm()

  const postRegistration = useMutation(registration)

  const onSubmit = (data) => {
    postRegistration.mutate({
      data,
    }, {
      onSuccess: () => setIsSignProcess(),
      onError: () => {
        toast.error('Ops Something wrong!', {
          position: 'bottom-left',
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'colored',
        })
      },
    })
  }

  return (
    <div className='h-full'>
      <div className='p-4'>
        <h6 className='font-bold'>
          Selamat datang di Lenna AI Chat.
          Silahkan mengisi formulir dibawah ini untuk menggunakan layanan Lenna AI
        </h6>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='w-full mt-6'>
            <Input
              disabled={postRegistration.isLoading}
              errorMessage='Name is required'
              isError={!!errors.name}
              label='Name'
              name='name'
              placeholder='Nama'
              register={register}
            />
            <Input
              disabled={postRegistration.isLoading}
              errorMessage='Email is required'
              isError={!!errors.email}
              label='Email'
              name='email'
              placeholder='Email'
              register={register}
            />
            <Input
              disabled={postRegistration.isLoading}
              errorMessage='Phone is required'
              isError={!!errors.phone}
              label='Telepon'
              name='phone'
              placeholder='Telepon'
              register={register}
            />
            <button
              className={clsx(
                'w-full rounded-full text-white py-2 mt-4 hover:opacity-70 trans-g',
                postRegistration.isLoading ? 'dark:bg-gray-700 bg-gray-400' : 'bg-primary',
              )}
              disabled={postRegistration.isLoading}
              type='submit'
              // onClick={toggle}
            >
              {
                postRegistration.isLoading ? (
                  <PulseLoader
                    aria-label='Loading Spinner'
                    color='white'
                    data-testid='loader'
                    loading
                    size={10}
                  />
                ) : 'Mulai Chat'
              }
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

Sign.propTypes = {
  setIsSignProcess: PropTypes.func,
}
