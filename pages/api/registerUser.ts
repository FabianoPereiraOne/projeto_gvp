import { PrismaClient } from '@prisma/client'
import { NextApiRequest, NextApiResponse } from 'next'
import { sign } from 'jsonwebtoken'

export default async (request: NextApiRequest, response: NextApiResponse) => {
  if (request.method !== 'POST') {
    response.status(405).json({
      message: 'Method Not Allowed!'
    })
  }

  const { email, password } = JSON.parse(request.body)
  const prisma = new PrismaClient()

  const isExistsUserEmail = await prisma.user.findUnique({
    where: {
      email
    }
  })

  if (!!isExistsUserEmail) {
    return response.status(404).json({
      message: 'user already exists!',
      isFailed: false
    })
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
        expiresIn: '10S',
        subject: id
      })

      return response.status(200).json({
        token,
        message: 'Token generation was successful!',
        isFailed: false
      })
    })
    .catch(() => {
      return response.status(200).json({
        message: 'Error create user!',
        isFailed: true
      })
    })
}
