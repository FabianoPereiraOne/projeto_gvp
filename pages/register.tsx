import { FormEvent, useState } from 'react'
import { useAuthContext } from '../context/authContext'
import { Form, FormGroup, Label, ButtonSubmit, Input } from '../styles/register'

const Register = () => {
  const { handleSignUp } = useAuthContext()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleRegister = async (event: FormEvent) => {
    event.preventDefault()
    if (email.length > 0 && password.length > 0) {
      handleSignUp(email, password)
    } else {
      alert('Preencha todos os campos!')
    }
  }

  return (
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
  )
}

export default Register
