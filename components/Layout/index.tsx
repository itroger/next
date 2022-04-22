import Head from 'next/head'

const Layout = ({ children }) => {
  return (
    <div>
      <Head>
        <title>Examples: Next.js</title>
      </Head>
      <div className="flex justify-center">
        <main className="max-w-5xl w-full">{children}</main>
      </div>
    </div>
  )
}

export default Layout
