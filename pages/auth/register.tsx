import { verify } from 'jsonwebtoken'
import { GetServerSideProps } from 'next'
import Head from 'next/head'
import { destroyCookie, parseCookies } from 'nookies'
import { FormEvent, useState } from 'react'
import { toast } from 'react-toastify'
import { UseAuthContext } from '../../context/authContext'
import {
  ButtonSubmit,
  Form,
  FormGroup,
  Input,
  Label
} from '../../styles/register'

const Register = () => {
  const [email, setEmail] = useState<string>('')
  const [name, setName] = useState<string>('')
  const [surname, setSurname] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(false)

  const { handleSignUp } = UseAuthContext()

  const handleRegister = (event: FormEvent) => {
    event.preventDefault()
    setLoading(true)
    if (
      email.length > 0 &&
      password.length > 0 &&
      name.length > 0 &&
      surname.length > 0
    ) {
      handleSignUp(email, password, name, surname).finally(() =>
        setLoading(false)
      )
    } else {
      toast.error('Preencha todos os campos!')
    }
  }

  return (
    <>
      <Head>
        <title>GVP | Registre-se</title>
      </Head>
      <Form onSubmit={handleRegister}>
        <FormGroup>
          <Label>Nome</Label>
          <Input
            type="text"
            value={name}
            onChange={event => setName(event.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label>Sobrenome</Label>
          <Input
            type="text"
            value={surname}
            onChange={event => setSurname(event.target.value)}
          />
        </FormGroup>
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
        {loading ? 'carregando....' : ''}
      </Form>
    </>
  )
}

export default Register

export const getServerSideProps: GetServerSideProps = async context => {
  const cookies = parseCookies(context)

  if (cookies['auth.tokenAccess']) {
    try {
      verify(
        cookies['auth.tokenAccess'],
        process.env.NEXT_PUBLIC_VERCEL_SECRET_KEY
      )

      return {
        redirect: {
          permanent: false,
          destination: '/dashboard'
        },
        props: {}
      }
    } catch (error) {
      console.log(error)
      destroyCookie(context, 'auth.tokenAccess')
    }
  }

  return {
    props: {}
  }
}
