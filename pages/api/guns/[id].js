import {guns} from '../../../data'

export default function handler(req, res) {
  const { id } = req.query
  const gun = guns.find(gun => gun.id === Number(id))
  res.status(200).json(gun)
}
