import { verify } from 'jsonwebtoken'
import { GetServerSideProps } from 'next'
import Head from 'next/head'
import { destroyCookie, parseCookies } from 'nookies'
import { FormEvent, useState } from 'react'
import { UseAuthContext } from '../../context/authContext'
import { ButtonSubmit, Form, FormGroup, Input, Label } from '../../styles/login'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const { handleSignIn } = UseAuthContext()

  const handleLogin = (event: FormEvent) => {
    event.preventDefault()
    if (email.length > 0 && password.length > 0) {
      handleSignIn(email, password)
    } else {
      alert('Preencha todos os campos!')
    }
  }

  return (
    <>
      <Head>
        <title>GVP | Entrar no sistema</title>
      </Head>
      <Form onSubmit={handleLogin}>
        <FormGroup>
          <Label>Email</Label>
          <Input
            type="email"
            value={email}
            onChange={event => setEmail(event.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label>Senha</Label>
          <Input
            type="password"
            value={password}
            onChange={event => setPassword(event.target.value)}
          />
        </FormGroup>
        <ButtonSubmit type="submit">Entrar</ButtonSubmit>
      </Form>
    </>
  )
}

export default Login

export const getServerSideProps: GetServerSideProps = async context => {
  const cookies = parseCookies(context)

  if (cookies['auth.tokenAccess']) {
    try {
      verify(
        cookies['auth.tokenAccess'],
        process.env.NEXT_PUBLIC_VERCEL_SECRET_KEY
      )
    } catch (error) {
      console.log(error)
      destroyCookie(context, 'auth.tokenAccess')
      return
    }

    return {
      redirect: {
        permanent: false,
        destination: '/dashboard'
      },
      props: {}
    }
  }

  return {
    props: {}
  }
}
