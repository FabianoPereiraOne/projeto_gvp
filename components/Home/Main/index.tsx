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
  Img,
  MenuMobile,
  ButtonClose
} from './styles'
import { Anchor, LinkRedirect, P } from '../../../styles/home'
import { FaRegCalendarAlt } from 'react-icons/fa'
import { FiCornerRightUp, FiAlignJustify, FiXCircle } from 'react-icons/fi'
import { useState } from 'react'
import Link from 'next/link'
import imageBackground from '../../../public/assets/vetor_home.svg'

export const Main = () => {
  const [activeMenu, setActiveMenu] = useState(false)
  const background = imageBackground.src

  return (
    <Container id="home">
      <Header>
        <ContainerLogo>
          <FaRegCalendarAlt />
          <TextLogo>gvp</TextLogo>
        </ContainerLogo>

        <Navbar>
          <LinkRedirect
            to="home"
            smooth={true}
            animationScaleX={true}
            aria-label="Link para inicio"
          >
            Inicio
          </LinkRedirect>
          <LinkRedirect
            to="about"
            smooth={true}
            animationScaleX={true}
            aria-label="Link para sobre"
          >
            Sobre
          </LinkRedirect>
          <LinkRedirect
            to="services"
            smooth={true}
            animationScaleX={true}
            aria-label="Link para serviços"
          >
            Serviços
          </LinkRedirect>
          <LinkRedirect
            to="plans"
            smooth={true}
            animationScaleX={true}
            aria-label="Link para planos"
          >
            Planos
          </LinkRedirect>
        </Navbar>
        <NavbarSecundary>
          <Link href="/login">
            <Anchor
              borderBottom="1px solid var(--white)"
              animationScaleX={false}
              aria-label="Link para acessar painel"
            >
              Acessar
            </Anchor>
          </Link>
          <Link href="/register-payment">
            <Anchor
              border="1px solid var(--blue-normal)"
              fontWeight={500}
              borderReverse={true}
              background="var(--blue-normal)"
              borderRadius={2}
              marginLeft={1}
              padding="0.5rem 2rem"
              aria-label="Link para se registrar"
            >
              Registrar
            </Anchor>
          </Link>
        </NavbarSecundary>

        <ButtonMenu onClick={() => setActiveMenu(true)}>
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
        <LinkRedirect
          to="about"
          smooth={true}
          borderRadius={2}
          border="1px solid var(--blue-normal)"
          height={3}
          width={20}
          fontWeight={500}
          padding="0.5rem 2rem"
          animationBackground={true}
          aria-label="Link para conhecer o sistema GVP"
        >
          Quero conhecer
        </LinkRedirect>
        <Img
          src="/assets/vetor_home.svg"
          alt="Imagem ilustrativa de um sistema de controle"
        />

        <LinkRedirect to="home" smooth={true}>
          <Circle>
            <FiCornerRightUp />
          </Circle>
        </LinkRedirect>
      </ContainerMain>
      {activeMenu && (
        <MenuMobile>
          <ButtonClose onClick={() => setActiveMenu(false)}>
            <FiXCircle />
          </ButtonClose>
          <LinkRedirect
            to="home"
            smooth={true}
            animationScaleX={true}
            aria-label="Link para inicio"
          >
            Inicio
          </LinkRedirect>

          <LinkRedirect
            to="about"
            smooth={true}
            animationScaleX={true}
            aria-label="Link para sobre"
          >
            Sobre
          </LinkRedirect>
          <LinkRedirect
            to="services"
            smooth={true}
            animationScaleX={true}
            aria-label="Link para serviços"
          >
            Serviços
          </LinkRedirect>
          <LinkRedirect
            to="plans"
            smooth={true}
            animationScaleX={true}
            aria-label="Link para planos"
          >
            Planos
          </LinkRedirect>
        </MenuMobile>
      )}
    </Container>
  )
}
