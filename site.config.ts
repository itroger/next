const host =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:3000'
    : 'https://next.itroger.design'

export default host
