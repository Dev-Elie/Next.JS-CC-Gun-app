// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import {guns} from '../../../data'

export default function handler(req, res) {
  res.status(200).json(guns)
}
