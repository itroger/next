import { GetStaticPaths, GetStaticProps } from 'next'
import host from '../../site.config'

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [
      {
        params: {
          id: '123'
        }
      }
    ],
    fallback: true
  }
}

export const getStaticProps: GetStaticProps = async context => {
  const { id } = context.params

  const data = await fetch(`${host}/api/api-routes`)
    .then(res => res.json())
    .catch(err => {
      console.error(err)
      return Promise.resolve(null)
    })

  return {
    props: { id, data },
    revalidate: 10
  }
}

const DynamicRoutes = props => {
  const { id, data } = props

  return (
    <div>
      <h1>Dynamic Routes</h1>
      <div>
        <p>Dynamic Routes Pages 使用 getStaticPaths 针对特定路由获取数据</p>
        <p>Dynamic Routes Pages 使用 getStaticProps 针对特定路由传递数据</p>
        <p>id: {id}</p>
        <p>HTTP Request Method: {data?.method}</p>
      </div>
    </div>
  )
}

export default DynamicRoutes
