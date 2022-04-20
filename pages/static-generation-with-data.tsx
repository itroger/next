import { GetStaticProps } from 'next'
import host from '../site.config'

export const getStaticProps: GetStaticProps = async () => {
  const data = await fetch(`${host}/api/api-routes`)
    .then(res => res.json())
    .catch(err => {
      console.error(err)
      return Promise.resolve(null)
    })

  return {
    props: { data }
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
