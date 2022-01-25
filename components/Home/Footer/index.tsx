import { Container, Span, Button } from './styles'
import { FiHelpCircle } from 'react-icons/fi'
import { FaCommentAlt } from 'react-icons/fa'

export const Footer = () => {
  return (
    <Container>
      <Button>
        <FaCommentAlt />
      </Button>
      <Span>Desenvolvido por Fabiano Pereira &copy;2021</Span>
      <Button>
        <FiHelpCircle />
      </Button>
    </Container>
  )
}
