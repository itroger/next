import useSWR from 'swr'

const ClientSideRenderingSwr = () => {
  // @ts-ignore
  const fetcher = (...args) => fetch(...args).then(res => res.json())

  const { data } = useSWR('/1api/api-routes', fetcher)

  return (
    <div>
      <h1>Client-side Rendering: SWR</h1>
      <div>
        <p>Client-side Rendering: 使用 SWR</p>
        <p>HTTP Request Method: {data?.method}</p>
      </div>
    </div>
  )
}

export default ClientSideRenderingSwr
