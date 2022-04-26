import { PrismaClient } from '@prisma/client'
import { NextApiRequest, NextApiResponse } from 'next'
import { compare } from 'bcryptjs'
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

  const resultCompare = await compare(password, isExistsUserEmail.password)
  if (!resultCompare) {
    const errorMessage = 'Email ou senha invalido!'
    response.json({
      errorMessage
    })
    throw new Error(errorMessage)
  }

  const token = sign({}, process.env.NEXT_PUBLIC_VERCEL_SECRET_KEY, {
    expiresIn: '3600s',
    subject: isExistsUserEmail.id
  })

  return response.status(200).json({
    token
  })
}
