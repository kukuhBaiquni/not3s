import DefaultLayout from 'layouts/default-layout'
import ChatPanel from 'components/common/chat-panel'
import useUiRelated from 'store/ui-related'
import { getProducts } from 'api/product'
import useProduct from 'store/products'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import Button from 'components/common/button'
import Input from '../components/form/input'
/**
 * Ini adalah halaman utama pada path '/'
 */

export default function Home() {
  const { setProducts } = useProduct((state) => state)
  const { register, handleSubmit, formState: { errors } } = useForm()

  return (
    <div className='min-h-screen max-w-screen-xl mx-auto'>
      <div className='w-[400px] h-[400px] border dark:border-primary mx-auto translate-y-[150px] rounded relative shadow-lg'>
        <div className='px-10'>
          <h3 className='my-8 text-xl text-center'>Login to your account</h3>
          <div className='flex flex-col gap-2'>

            <Input
              errorMessage='Email is required'
              isError={errors.email}
              label='Email'
              name='email'
              register={register}
            />
            <Input
              errorMessage='Password not match'
              isError={errors.password}
              label='Password'
              name='password'
              register={register}
            />
          </div>
        </div>
        <div className='absolute bottom-8 w-full px-10'>
          <label>
            <input type='checkbox' />
            Remember Me
          </label>
          <Button
            className='bg-primary rounded w-full text-secondary py-1.5 mt-auto'
            onClick={handleSubmit((data) => {})}
          >
            Login
          </Button>
        </div>
      </div>
    </div>
  )
}

Home.getLayout = (page) => (
  <DefaultLayout>
    {page}
  </DefaultLayout>
)
