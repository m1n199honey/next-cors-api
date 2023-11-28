// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { runMiddleware } from '@/_cors';
type Data = { message: string }
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  await runMiddleware(req, res);
  res.status(200).json({ message: 'without cors' })
}
