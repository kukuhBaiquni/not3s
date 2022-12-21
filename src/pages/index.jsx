import DefaultLayout from 'layouts/default-layout'
import ChatPanel from 'components/common/chat-panel'
import useUiRelated from 'store/ui-related'
import { getProducts } from 'api/product'
import useProduct from 'store/products'
import { useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

/**
 * Ini adalah halaman utama pada path '/'
 */

export default function Home() {
  const { setProducts } = useProduct((state) => state)
  /**
   * State yang menentukan chat panel sedang dibuka atau tidak, disimpan di global state
   * agar bisa menutup atau membuka chat panel dimana saja
   *
   * Penjelasan:
   *
   *  > isChatPanelOpen adalah state dengan data type boolean, yang menentukan chat panel
   *   dibuka atau ditutup
   *  > toggleChatPanel adalah fungsi yang merubah nilai dari isChatPanelOpen menjadi true/false
   *
   */

  const isLogin = () => {
    const userCredential = localStorage.getItem('user')
    const token = localStorage.getItem('access_token')
    return userCredential && token
  }

  useEffect(() => {
    const response = async () => {
      const res = await getProducts()
      setProducts(res.data)
    }
    if (isLogin()) response()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const {
    isChatPanelOpen, toggleChatPanel, isChatPanelExpanded, toggleChatPanelExpanded,
    toggleSignProcess,
  } = useUiRelated((state) => state)

  const togglePanel = () => {
    toggleChatPanel()
    const userCredential = localStorage.getItem('user')
    const token = localStorage.getItem('access_token')
    if (userCredential && token) {
      toggleSignProcess(false)
    }
  }

  return (
    <div className='min-h-screen w-full'>
      <div className='relative w-full lg:h-[600px] h-[350px]'>
        <div className='absolute h-full w-full bg-primary bg-opacity-25 z-[10]' />
        <div className='absolute text-white z-[20] lg:top-[200px] top-[40px] lg:left-[100px] left-[25px] lg:w-[400px] w-[250px]'>
          <h1 className='text-white font-titillium lg:text-6xl text-4xl font-bold'>Lenna F&B</h1>
          <p className='py-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Pariatur nihil magnam dicta alias officiis,
            quibusdam maxime tempora!
            Odio recusandae ullam eaque libero,
            quos maxime porro laborum maiores! Deserunt, nemo optio.
          </p>
          <button className='py-1.5 px-6 rounded bg-primary text-white mt-2' type='button'>
            Try now!
          </button>
        </div>
        <Image
          alt='product-image'
          className='object-cover brightness-50'
          fill
          priority
          src='/images/basic.jpg'
        />
      </div>
      <main className='grid lg:grid-cols-3 md:grid-cols-2 max-w-screen-2xl mt-6 mx-auto'>
        {
          ['Romusha', 'Lenna.ai', 'Lenna & Pawoon'].map((title) => (
            <div className='p-4' key={title}>
              <h4 className='text-2xl font-bold'>{title}</h4>
              <p className='font-titillium'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Inventore quam consequuntur alias,
                architecto ducimus maxime consectetur odio velit commodi ullam neque corrupti
                doloremque maiores repudiandae ut sequi distinctio delectus? Ipsam.
              </p>
              <Link className='text-primary underline' href='#'>
                Lihat lebih banyak
              </Link>
            </div>
          ))
        }
      </main>
      <ChatPanel />
      <div
        className='chat-collapse shade rounded-full slide-up z-50'
        id='chat-panel'
        onClick={isChatPanelExpanded ? () => toggleChatPanelExpanded(false) : togglePanel}
      >
        {!isChatPanelOpen && <i className='bx bxs-chat text-3xl text-white' />}
        {isChatPanelExpanded && <i className='bx bx-collapse text-3xl text-white' />}
      </div>
    </div>
  )
}

Home.getLayout = (page) => (
  <DefaultLayout>
    {page}
  </DefaultLayout>
)
