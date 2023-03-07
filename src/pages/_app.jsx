import '@/styles/globals.scss'
import { ToastContainer } from 'react-toastify'
import { appWithTranslation } from 'next-i18next'
import LayoutsNavbar from '@/components/navbar'
import appWithSession from '@/hoc/appWithSession'
import { ScrollProvider } from '@/contexts/scroll'
import SSRProvider from 'react-bootstrap/SSRProvider'

function MyApp({ Component, pageProps }) {
  return (
    <SSRProvider>
      <ScrollProvider>
        <LayoutsNavbar />
        <Component {...pageProps} />
        <ToastContainer
          position="bottom-left"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </ScrollProvider>
    </SSRProvider>
  )
}

export default appWithSession(appWithTranslation(MyApp))
