import { PrismaClient } from '@prisma/client'
import { NextApiRequest, NextApiResponse } from 'next'

export default (request: NextApiRequest, response: NextApiResponse) => {
  if (request.method !== 'POST') {
    response.status(405).json({
      message: 'Method Not Allowed!'
    })
  }

  const { email, password } = JSON.parse(request.body)

  if (email && password) {
    const prisma = new PrismaClient()

    prisma.user
      .create({
        data: {
          email,
          password
        }
      })
      .then(() => {
        return response.status(200).json({
          token: 'Agora é só gerar o token!'
        })
      })
      .catch(() => {
        throw new Error('Error create user!')
      })
  } else {
    response.status(405).json({
      message: 'Method Not Allowed!'
    })
  }
}
