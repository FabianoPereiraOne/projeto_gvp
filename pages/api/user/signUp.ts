import { PrismaClient } from '@prisma/client'
import { NextApiRequest, NextApiResponse } from 'next'
import { sign } from 'jsonwebtoken'

export default async (request: NextApiRequest, response: NextApiResponse) => {
  if (request.method !== 'POST') {
    throw new Error('Metodo não aceito!')
  }

  const { email, password } = JSON.parse(request.body)
  const prisma = new PrismaClient()

  const isExistsUserEmail = await prisma.user.findUnique({
    where: {
      email
    }
  })

  if (!!isExistsUserEmail) {
    const errorMessage = 'Usuario já existe!'
    response.json({
      errorMessage
    })
    throw new Error(errorMessage)
  }

  prisma.user
    .create({
      data: {
        email,
        password
      }
    })
    .then(user => {
      const { id } = user
      const token = sign({}, process.env.NEXT_PUBLIC_VERCEL_SECRET_KEY, {
        expiresIn: '3600s',
        subject: id
      })

      return response.status(200).json({
        token
      })
    })
    .catch(() => {
      const errorMessage = 'Falha ao criar usuario!'
      response.json({
        errorMessage
      })
      throw new Error(errorMessage)
    })
}
