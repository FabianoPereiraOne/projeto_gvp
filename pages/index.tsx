import '../components/home'
import * as C from '../components/home'
import * as Fa from 'react-icons/fa'
import * as Fi from 'react-icons/fi'
import Link from 'next/link'
import bg from '../public/assets/vetor_home.svg'
import bannerVertical from '../public/assets/vetor_message_about.svg'
import groupTi from '../public/assets/vetor_about.svg'

const Home = () => {
  return (
    <>
      <C.Container>
        <C.Header>
          <C.ContainerLogo>
            <Fa.FaRegCalendarAlt />
            <C.Strong>Validay</C.Strong>
          </C.ContainerLogo>

          <C.Navbar>
            <Link href="home">
              <C.Anchor aria-label="Anchor para inicio">Inicio</C.Anchor>
            </Link>
            <Link href="about">
              <C.Anchor aria-label="Anchor para sobre">Sobre</C.Anchor>
            </Link>
            <Link href="services">
              <C.Anchor aria-label="Anchor para serviços">Serviços</C.Anchor>
            </Link>
            <Link href="plans">
              <C.Anchor aria-label="Anchor para planos">Planos</C.Anchor>
            </Link>
          </C.Navbar>
          <C.NavbarSecundary>
            <Link href="/login">
              <C.Anchor aria-label="Anchor para acessar painel">
                Acessar
              </C.Anchor>
            </Link>
            <Link href="/register">
              <C.AnchorBlue
                marginLeft={1}
                aria-label="Anchor para se registrar"
              >
                Registrar
              </C.AnchorBlue>
            </Link>
          </C.NavbarSecundary>
        </C.Header>
        <C.Main background={bg.src}>
          <C.H1>Validay</C.H1>
          <C.H3>Uma solução moderna.</C.H3>
          <C.P marginTop={1}>
            Forneça uma melhor experiência aos seus clientes fazendo um melhor
            controle da validade de seus produtos.
          </C.P>
          <Link href="about">
            <C.AnchorBlue
              marginTop={5}
              height={3}
              width={20}
              aria-label="link para conhecer o sistema validay"
            >
              Quero conhecer
            </C.AnchorBlue>
          </Link>
          <Link href="home">
            <C.Circle>
              <Fi.FiCornerRightUp />
            </C.Circle>
          </Link>
        </C.Main>
      </C.Container>
      <C.Section>
        <C.Img
          src={groupTi.src}
          alt="Imagem de jovens de tecnologia trabalhando."
        />
        <C.BannerVertical background={bannerVertical.src}>
          <C.H5>Sobre</C.H5>
          <C.P color="var(--blue-dark)">Conheça nosso sistema.</C.P>
          <C.P>
            Forneça uma melhor experiência aos seus clientes fazendo um melhor
            controle da validade de seus produtos.Forneça uma melhor experiência
            aos seus clientes fazendo um melhor controle da validade de seus
            produtos. Forneça uma melhor experiência aos seus clientes fazendo
            um melhor controle da validade de seus produtos.Forneça uma melhor
            experiência aos seus clientes fazendo um melhor controle da validade
            de seus produtos. Forneça uma melhor experiência aos seus clientes
            fazendo um melhor controle da validade de seus produtos.
          </C.P>
          <Link href="plans">
            <C.AnchorBlue>Conhecer planos</C.AnchorBlue>
          </Link>
        </C.BannerVertical>
      </C.Section>
    </>
  )
}

export default Home
