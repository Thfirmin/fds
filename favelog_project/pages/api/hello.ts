// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string,
  email: string,
  cpf: Number,
  tel: number,
  pix: string,
  bikePlate: string,
  bikeModel: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const singLog: Data = req.body;
  const {name, email, cpf, tel, pix, bikePlate, bikeModel} = singLog;

  console.log(req.body)
  if (!name || !email || !cpf || !tel || !pix || !bikePlate || !bikeModel)
  {
    res.status(404).json({CourierCreated: false})
  }
  res.status(201).json({Message: "Ta na mão"});
}
