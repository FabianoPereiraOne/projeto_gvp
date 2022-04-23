import { FormEvent, useState } from 'react'
import { useAuthContext } from '../context/authContext'
import { Form, FormGroup, Label, ButtonSubmit, Input } from '../styles/register'
import { parseCookies } from 'nookies'
import { GetServerSideProps } from 'next'
import { Head } from 'next/document'

const Register = ctx => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const { handleSignUp } = useAuthContext()

  const handleRegister = (event: FormEvent) => {
    event.preventDefault()
    if (email.length > 0 && password.length > 0) {
      try {
        handleSignUp(email, password)
      } catch (error) {
        console.log(error)
      }
    } else {
      alert('Preencha todos os campos!')
    }
  }

  return (
    <>
      <Head>
        <title>GVP | Registre-se</title>
      </Head>
      <Form onSubmit={handleRegister}>
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
        <ButtonSubmit type="submit">Registrar</ButtonSubmit>
      </Form>
    </>
  )
}

export default Register

export const getServerSideProps: GetServerSideProps = async ctx => {
  const cookies = parseCookies(ctx)
  if (cookies['auth.TokenAccess']) {
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
