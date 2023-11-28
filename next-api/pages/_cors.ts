import type { NextApiRequest, NextApiResponse } from 'next'
import Cors from "cors"

const cors = Cors({
  origin: process.env.ORIGIN_URL,
  credentials: true,
  optionsSuccessStatus: 200,
});

export function runMiddleware(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  return new Promise((resolve, reject) => {
    cors(req, res, (result: any) => {
      if (result instanceof Error) return reject(result)
      return resolve(result)
    })
  })
}
