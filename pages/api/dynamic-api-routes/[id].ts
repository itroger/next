import { NextApiHandler } from 'next'

const DynamicApiRoutes: NextApiHandler = async (req, res) => {
  const { id } = req.query
  res.status(200).json({ id })
}

export default DynamicApiRoutes
