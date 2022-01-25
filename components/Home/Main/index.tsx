import Link from 'next/link'
import {
  Container,
  ContainerLogo,
  Header,
  NavbarSecundary,
  Navbar,
  ContainerMain,
  H1,
  Circle
} from './styles'
import { Anchor, H3, P, Strong } from '../../../styles/home'
import { FaRegCalendarAlt } from 'react-icons/fa'
import { FiCornerRightUp } from 'react-icons/fi'
import imageBackground from '../../../public/assets/vetor_home.svg'

export const Main = () => {
  const background = imageBackground.src

  return (
    <Container>
      <Header>
        <ContainerLogo>
          <FaRegCalendarAlt />
          <Strong>Validay</Strong>
        </ContainerLogo>

        <Navbar>
          <Link href="home">
            <Anchor animationScaleX={true} aria-label="Anchor para inicio">
              Inicio
            </Anchor>
          </Link>
          <Link href="about">
            <Anchor animationScaleX={true} aria-label="Anchor para sobre">
              Sobre
            </Anchor>
          </Link>
          <Link href="services">
            <Anchor animationScaleX={true} aria-label="Anchor para serviços">
              Serviços
            </Anchor>
          </Link>
          <Link href="plans">
            <Anchor animationScaleX={true} aria-label="Anchor para planos">
              Planos
            </Anchor>
          </Link>
        </Navbar>
        <NavbarSecundary>
          <Link href="/login">
            <Anchor
              animationScaleX={false}
              borderBottom="1px solid var(--white)"
              aria-label="Anchor para acessar painel"
            >
              Acessar
            </Anchor>
          </Link>
          <Link href="/register">
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
      <ContainerMain background={background}>
        <H1>Validay</H1>
        <H3>Uma solução moderna.</H3>
        <P marginTop={1}>
          Forneça uma melhor experiência aos seus clientes fazendo um melhor
          controle da validade de seus produtos.
        </P>
        <Link href="about">
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
      </ContainerMain>
    </Container>
  )
}
