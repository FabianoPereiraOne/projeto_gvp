import {
  Container,
  ContainerLogo,
  Header,
  Navbar,
  NavbarSecundary,
  Strong,
  Anchor
} from '../components/home'
import { FaRegCalendarAlt } from 'react-icons/fa'

const Home = () => {
  return (
    <Container>
      <Header>
        <ContainerLogo>
          <FaRegCalendarAlt />
          <Strong>Validay</Strong>
        </ContainerLogo>

        <Navbar>
          <Anchor href="home" aria-label="Anchor para inicio">
            Inicio
          </Anchor>
          <Anchor href="about" aria-label="Anchor para sobre">
            Sobre
          </Anchor>
          <Anchor href="services" aria-label="Anchor para serviços">
            Serviços
          </Anchor>
          <Anchor href="plans" aria-label="Anchor para planos">
            Planos
          </Anchor>
        </Navbar>
        <NavbarSecundary>
          <Anchor href="/login" aria-label="Anchor para acessar painel">
            Acessar
          </Anchor>
          <Anchor
            custumizable={true}
            href="/register"
            aria-label="Anchor para se registrar"
          >
            Registrar
          </Anchor>
        </NavbarSecundary>
      </Header>
    </Container>
  )
}

export default Home
