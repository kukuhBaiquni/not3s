import DefaultLayout from 'layouts/default-layout'
import ChatPanel from 'components/common/chat-panel'
import useUiRelated from 'store/ui-related'

/**
 * Ini adalah halaman utama pada path '/'
 */

export default function Home() {
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

  const {
    isChatPanelOpen, toggleChatPanel, isChatPanelExpanded, toggleChatPanelExpanded,
  } = useUiRelated((state) => state)

  return (
    <div className='min-h-screen'>
      <ChatPanel />
      <div className='chat-collapse shade rounded-full slide-up z-50' id='chat-panel' onClick={isChatPanelExpanded ? () => toggleChatPanelExpanded(false) : toggleChatPanel}>
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
