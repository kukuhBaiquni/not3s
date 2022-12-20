import '../styles/globals.css'
import 'nprogress/nprogress.css'
import 'react-toastify/dist/ReactToastify.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import PropTypes from 'prop-types'
import NProgress from 'nprogress'
import Router from 'next/router'
import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient()

Router.events.on('routeChangeStart', () => NProgress.start())
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page)
  return getLayout(

    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
    </QueryClientProvider>,
  )
}

MyApp.propTypes = {
  Component: PropTypes.elementType,
  pageProps: PropTypes.object,
}

export default MyApp
