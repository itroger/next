import Link from 'next/link'
import useSWR from 'swr'

const Index = () => {
  // @ts-ignore
  const fetcher = (...args) => fetch(...args).then(res => res.json())

  const apiRes = useSWR('/api/api-routes', fetcher)
  const dynamicApiRes = useSWR('/api/dynamic-api-routes/123', fetcher)

  return (
    <div>
      <h1>IDEA - Examples: Next</h1>
      <p>可用于生产的 React 框架，Next.js 提供生产所需的所有特性：</p>
      <ul>
        <li>混合多种静态和服务端渲染</li>
        <li>TypeScript</li>
        <li>内置路由</li>
        <li>零配置</li>
      </ul>
      <h3>页面与路由</h3>
      <ul>
        <li>
          <Link href="/static-generation-without-data">静态生成-无数据</Link>
        </li>
        <li>
          <Link href="/static-generation-with-data">静态生成-有数据</Link>
        </li>
        <li>
          <Link href="/client-side-rendering-fetch">客户端渲染-fetch</Link>
        </li>
        <li>
          <Link href="/client-side-rendering-swr">客户端渲染-swr</Link>
        </li>
        <li>
          <Link href="/server-side-rendering-with-data">服务端渲染-有数据</Link>
        </li>
        <li>
          <Link href="/dynamic-routes/123">动态路由</Link>
        </li>
        <li>API 路由: {apiRes.data?.method}</li>
        <li>动态 API 路由: {dynamicApiRes.data?.id}</li>
      </ul>
    </div>
  )
}

export default Index
