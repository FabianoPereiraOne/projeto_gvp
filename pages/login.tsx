import { GetServerSideProps } from 'next'
import { parseCookies } from 'nookies'
import { FormEvent, useState } from 'react'
import { useAuthContext } from '../context/authContext'
import { Form, FormGroup, Label, Input, ButtonSubmit } from '../styles/login'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const { handleSignIn } = useAuthContext()

  const handleLogin = (event: FormEvent) => {
    event.preventDefault()
    if (email.length > 0 && password.length > 0) {
      try {
        handleSignIn(email, password)
      } catch (error) {
        console.log(error)
      }
    } else {
      alert('Preencha todos os campos!')
    }
  }

  return (
    <>
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
