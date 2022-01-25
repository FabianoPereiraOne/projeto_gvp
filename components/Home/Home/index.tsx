import Link from 'next/link'
import {
  Container,
  ContainerLogo,
  Header,
  NavbarSecundary,
  Navbar,
  Main,
  H1,
  Circle
} from './styles'
import { Anchor, H3, P, Strong } from '../../../styles/home'
import { FaRegCalendarAlt } from 'react-icons/fa'
import { FiCornerRightUp } from 'react-icons/fi'
import imageBackground from '../public/assets/vetor_home.svg'

export const Home = () => {
  const background = imageBackground.src

  return (
    <Container>
      <Header>
        <ContainerLogo>
          <FaRegCalendarAlt />
          <Strong>Validay</Strong>
        </ContainerLogo>

        <Navbar>
          <Link href="home" passHref>
            <Anchor animationScaleX={true} aria-label="Anchor para inicio">
              Inicio
            </Anchor>
          </Link>
          <Link href="about" passHref>
            <Anchor animationScaleX={true} aria-label="Anchor para sobre">
              Sobre
            </Anchor>
          </Link>
          <Link href="services" passHref>
            <Anchor animationScaleX={true} aria-label="Anchor para serviços">
              Serviços
            </Anchor>
          </Link>
          <Link href="plans" passHref>
            <Anchor animationScaleX={true} aria-label="Anchor para planos">
              Planos
            </Anchor>
          </Link>
        </Navbar>
        <NavbarSecundary>
          <Link href="/login" passHref>
            <Anchor
              animationScaleX={false}
              borderBottom="1px solid var(--white)"
              aria-label="Anchor para acessar painel"
            >
              Acessar
            </Anchor>
          </Link>
          <Link href="/register" passHref>
            <Anchor
              animationBackground={true}
              background="var(--blue-dark)"
              borderRadius={2}
              marginLeft={1}
              aria-label="Anchor para se registrar"
            >
              Registrar
            </Anchor>
          </Link>
        </NavbarSecundary>
      </Header>
      <Main background={background}>
        <H1>Validay</H1>
        <H3>Uma solução moderna.</H3>
        <P marginTop={1}>
          Forneça uma melhor experiência aos seus clientes fazendo um melhor
          controle da validade de seus produtos.
        </P>
        <Link href="about" passHref>
          <Anchor
            animationBackground={true}
            background="var(--blue-dark)"
            borderRadius={2}
            marginTop={5}
            height={3}
            width={20}
            aria-label="link para conhecer o sistema validay"
          >
            Quero conhecer
          </Anchor>
        </Link>
        <Link href="home">
          <Circle>
            <FiCornerRightUp />
          </Circle>
        </Link>
      </Main>
    </Container>
  )
}
