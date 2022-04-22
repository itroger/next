import { AppProps } from 'next/app'
import Layout from '@components/Layout'
import '@styles/globals.css'

const App = ({ pageProps, Component }: AppProps) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default App