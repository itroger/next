import { useEffect, useState } from 'react'

const ClientSideRenderingFetch = () => {
  const [method, setMethod] = useState<string>()

  useEffect(() => {
    fetch('/api/api-routes')
      .then(res => res.json())
      .then(res => {
        setMethod(res.method)
      })
  }, [])

  return (
    <div>
      <h1>Client-side Rendering: Fetch</h1>
      <div>
        <p>Client-side Rendering: 使用 Fetch</p>
        <p>HTTP Request Method: {method}</p>
      </div>
    </div>
  )
}

export default ClientSideRenderingFetch
