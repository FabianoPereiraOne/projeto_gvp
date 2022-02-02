import Link from 'next/link'
import {
  Container,
  ContainerLogo,
  Header,
  NavbarSecundary,
  Navbar,
  ContainerMain,
  H1,
  Circle,
  Span,
  TextLogo,
  ButtonMenu,
  Img
} from './styles'
import { Anchor, P } from '../../../styles/home'
import { FaRegCalendarAlt } from 'react-icons/fa'
import { FiCornerRightUp, FiAlignJustify } from 'react-icons/fi'
import imageBackground from '../../../public/assets/vetor_home.svg'

export const Main = () => {
  const background = imageBackground.src

  return (
    <Container>
      <Header>
        <ContainerLogo>
          <FaRegCalendarAlt />
          <TextLogo>gvp</TextLogo>
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
              fontWeight={500}
              border={'1px solid var(--blue-normal)'}
              borderReverse={true}
              background="var(--blue-normal)"
              borderRadius={2}
              marginLeft={1}
              padding="0.5rem 2rem"
              aria-label="Anchor para se registrar"
            >
              Registrar
            </Anchor>
          </Link>
        </NavbarSecundary>

        <ButtonMenu>
          <FiAlignJustify />
        </ButtonMenu>
      </Header>
      <ContainerMain background={background}>
        <H1>
          <Span color="var(--orange-light)">G</Span>erenciador de{' '}
          <Span color="var(--orange-light)">v</Span>alidade de{' '}
          <Span color="var(--orange-light)">p</Span>
          rodutos
        </H1>
        <P marginTop={1}>
          Forneça uma melhor experiência aos seus clientes fazendo um melhor
          controle da validade de seus produtos.
        </P>
        <Link href="about">
          <Anchor
            borderRadius={2}
            border="1px solid var(--blue-normal)"
            marginTop={2}
            height={3}
            width={20}
            fontWeight={500}
            padding="0.5rem 2rem"
            animationBackground={true}
            aria-label="link para conhecer o sistema validay"
          >
            Quero conhecer
          </Anchor>
        </Link>
        <Img
          src="/assets/vetor_home.svg"
          alt="Imagem ilustrativa de um sistema de controle"
        />

        <Link href="home">
          <Circle>
            <FiCornerRightUp />
          </Circle>
        </Link>
      </ContainerMain>
    </Container>
  )
}
