import { NextApiHandler } from 'next'

const ApiRoutes: NextApiHandler = async (req, res) => {
  switch (req.method) {
    case 'GET':
      res.status(200).json({
        method: 'GET'
      })
      break
    case 'POST':
      res.status(200).json({
        method: 'POST'
      })
      break
    case 'PUT':
      res.status(201).json({
        method: 'PUT'
      })
      break
    case 'DELETE':
      res.status(204).json({
        method: 'DELETE'
      })
  }
}

export default ApiRoutes
