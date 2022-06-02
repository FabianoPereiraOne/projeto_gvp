import Link from 'next/link'
import { useState } from 'react'
import { FiAlignJustify, FiCornerRightUp, FiXCircle } from 'react-icons/fi'
import imageBackground from '../../../public/assets/vetor_home.svg'
import { Anchor, LinkRedirect, P } from '../../../styles/home'
import { Logo } from '../../others/logo'
import {
  ButtonClose,
  ButtonMenu,
  Circle,
  Container,
  ContainerLogo,
  ContainerMain,
  H1,
  Header,
  Img,
  MenuMobile,
  Navbar,
  NavbarSecundary,
  Span
} from './styles'

export const Main = () => {
  const [activeMenu, setActiveMenu] = useState(false)
  const background = imageBackground.src

  return (
    <Container id="home">
      <Header>
        <ContainerLogo>
          <Logo />
        </ContainerLogo>

        <Navbar>
          <LinkRedirect
            to="home"
            smooth={true}
            $animationScaleX={true}
            $color="var(--gray)"
            aria-label="Link para inicio"
          >
            Inicio
          </LinkRedirect>
          <LinkRedirect
            to="about"
            smooth={true}
            $animationScaleX={true}
            $color="var(--gray)"
            aria-label="Link para sobre"
          >
            Sobre
          </LinkRedirect>
          <LinkRedirect
            to="services"
            smooth={true}
            $color="var(--gray)"
            $animationScaleX={true}
            aria-label="Link para serviços"
          >
            Serviços
          </LinkRedirect>
          <LinkRedirect
            to="plans"
            $color="var(--gray)"
            smooth={true}
            $animationScaleX={true}
            aria-label="Link para planos"
          >
            Planos
          </LinkRedirect>
        </Navbar>
        <NavbarSecundary>
          <Link href="/auth/login" passHref>
            <Anchor
              $borderBottom="1px solid var(--black)"
              aria-label="Link para acessar painel"
              $colorHover="var(--orange-normal)"
            >
              Acessar
            </Anchor>
          </Link>
          <Link href="/auth/register" passHref>
            <Anchor
              $border="1px solid var(--blue-normal)"
              $fontWeight={500}
              $borderReverse={true}
              $background="var(--blue-normal)"
              $borderRadius={2}
              $marginLeft={1}
              $color="var(--white)"
              $colorHover="var(--blue-light)"
              $padding="0.5rem 2rem"
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
      <ContainerMain $background={background}>
        <H1>
          <Span $color="var(--orange-light)">G</Span>erenciador de{' '}
          <Span $color="var(--orange-light)">v</Span>alidade de{' '}
          <Span $color="var(--orange-light)">p</Span>
          rodutos
        </H1>
        <P $marginTop={1}>
          Forneça uma melhor experiência aos seus clientes fazendo um melhor
          controle da validade de seus produtos.
        </P>
        <LinkRedirect
          to="about"
          smooth={true}
          $border="1px solid var(--blue-normal)"
          $fontWeight={500}
          $borderReverse={true}
          $background="var(--blue-normal)"
          $borderRadius={2}
          $marginLeft={1}
          $color="var(--white)"
          $colorHover="var(--blue-light)"
          $padding="0.5rem 2rem"
          $height={3}
          $width={20}
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
            $animationScaleX={true}
            aria-label="Link para inicio"
            $color="var(--gray)"
            onClick={() => setActiveMenu(false)}
          >
            Inicio
          </LinkRedirect>

          <LinkRedirect
            to="about"
            smooth={true}
            $animationScaleX={true}
            $color="var(--gray)"
            aria-label="Link para sobre"
            onClick={() => setActiveMenu(false)}
          >
            Sobre
          </LinkRedirect>
          <LinkRedirect
            to="services"
            smooth={true}
            $animationScaleX={true}
            $color="var(--gray)"
            aria-label="Link para serviços"
            onClick={() => setActiveMenu(false)}
          >
            Serviços
          </LinkRedirect>
          <LinkRedirect
            to="plans"
            smooth={true}
            $animationScaleX={true}
            $color="var(--gray)"
            aria-label="Link para planos"
            onClick={() => setActiveMenu(false)}
          >
            Planos
          </LinkRedirect>
          <Link href="/auth/login" passHref>
            <Anchor
              $position="absolute"
              $right="-1.2rem"
              $top="1.2rem"
              $background="var(--blue-light)"
              $padding="0.3rem 2rem 0.3rem 1.4rem"
              $borderRadius={2}
              $fontWeight={500}
              $color="var(--white)"
              aria-label="Link para acessar painel"
            >
              Acessar
            </Anchor>
          </Link>
          <Link href="/auth/register" passHref>
            <Anchor
              $fontWeight={500}
              $background="var(--gray)"
              $borderRadius={2}
              $padding="0.3rem 2rem 0.3rem 1.6rem"
              $color="var(--white)"
              $position="absolute"
              $right="-1.2rem"
              $animationBackground={true}
              $backgroundHover="var(--orange-normal)"
              $top="4.5rem"
              aria-label="Link para se registrar"
            >
              Registrar
            </Anchor>
          </Link>
        </MenuMobile>
      )}
    </Container>
  )
}
