import { GetStaticProps } from 'next'
import host from '../site.config'

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      data: await fetch(`${host}/api/api-routes`).then(res => res.json())
    }
  }
}

const StaticGenerationWithData = props => {
  const { data } = props

  return (
    <div>
      <h1>Static Generation With Data</h1>
      <div>
        <p>Static Generation Pages With Data 使用 getStaticProps 传递数据</p>
        <p>HTTP Request Method: {data?.method}</p>
      </div>
    </div>
  )
}

export default StaticGenerationWithData
