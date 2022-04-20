import { GetServerSideProps } from 'next'
import host from '../site.config'

export const getServerSideProps: GetServerSideProps = async context => {
  return {
    props: {
      data: await fetch(`${host}/api/api-routes`).then(res => res.json())
    }
  }
}

const ServerSideRenderingWithData = props => {
  const { data } = props

  return (
    <div>
      <h1>Server-side Rendering With Data</h1>
      <div>
        <p>Server-side Rendering With Data 使用 getServerSideProps 传递数据</p>
        <p>HTTP Request Method: {data?.method}</p>
      </div>
    </div>
  )
}

export default ServerSideRenderingWithData
