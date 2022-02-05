import { Container, Span, Button } from './styles'
import { FiHelpCircle, FiMessageSquare } from 'react-icons/fi'

export const Footer = () => {
  return (
    <Container>
      <Button>
        <FiMessageSquare />
      </Button>
      <Span>Copyright &copy;2021 | Desenvolvido por Fabiano Pereira</Span>
      <Button>
        <FiHelpCircle />
      </Button>
    </Container>
  )
}
