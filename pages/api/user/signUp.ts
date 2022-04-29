import { PrismaClient } from '@prisma/client'
import { sign } from 'jsonwebtoken'
import { NextApiRequest, NextApiResponse } from 'next'

export default async (request: NextApiRequest, response: NextApiResponse) => {
  if (request.method !== 'POST') {
    throw new Error('Metodo não aceito!')
  }

  const { email, password, name, surname } = JSON.parse(request.body)
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
    .then(async user => {
      const { id } = user

      await prisma.profile
        .create({
          data: {
            name,
            surname,
            user: {
              connect: {
                id
              }
            }
          }
        })
        .catch(async () => {
          await prisma.user
            .delete({
              where: {
                id
              }
            })
            .catch(() => {
              const errorMessage = 'Falha ao deletar perfil!'
              response.json({
                errorMessage
              })
              throw new Error(errorMessage)
            })

          const errorMessage = 'Falha ao criar perfil!'
          response.json({
            errorMessage
          })
          throw new Error(errorMessage)
        })

      const token = sign({}, process.env.NEXT_PUBLIC_VERCEL_SECRET_KEY, {
        expiresIn: '3600s',
        subject: id
      })

      return response.status(200).json({
        token
      })
    })
    .catch(() => {
      const errorMessage = 'Falha ao criar usuario ou token de acesso!'
      response.json({
        errorMessage
      })
      throw new Error(errorMessage)
    })
}
