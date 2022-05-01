import { NextApiRequest, NextApiResponse } from 'next'

export default (request: NextApiRequest, response: NextApiResponse) => {
  if (request.method !== 'POST') {
    const errorMessage = 'Metodo não aceito!'
    response.json({
      errorMessage
    })
    throw new Error(errorMessage)
  }

  // Verificar se tem token e validar
  if (!request.headers.authorization) {
    const errorMessage = 'Acesso negado!'
    response.json({
      errorMessage
    })
    throw new Error(errorMessage)
  } else {
    console.log('request.headers.authorization')
    // try {
    //   verify(
    //     request.headers.authorization,
    //     process.env.NEXT_PUBLIC_VERCEL_SECRET_KEY
    //   )
    // } catch (error) {
    //   console.log(error)
    // }
  }

  console.log('request.headers.authorization')

  // Prosseguir com o cadastro de produtos
}
