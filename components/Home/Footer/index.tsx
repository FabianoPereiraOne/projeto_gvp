import { Container, Span, Button } from './styles'
import { FiHelpCircle } from 'react-icons/fi'
import { FaCommentAlt } from 'react-icons/fa'

export const Footer = () => {
  return (
    <Container>
      <Button>
        <FaCommentAlt />
      </Button>
      <Span>Copyright &copy;2021 | Desenvolvido por Fabiano Pereira</Span>
      <Button>
        <FiHelpCircle />
      </Button>
    </Container>
  )
}
