import '../components/home'
import * as C from '../components/home'
import * as Fa from 'react-icons/fa'
import * as Fi from 'react-icons/fi'
import Link from 'next/link'
import bg from '../public/assets/vetor_home.svg'
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
              <C.Anchor animationScaleX={true} aria-label="Anchor para inicio">
                Inicio
              </C.Anchor>
            </Link>
            <Link href="about">
              <C.Anchor animationScaleX={true} aria-label="Anchor para sobre">
                Sobre
              </C.Anchor>
            </Link>
            <Link href="services">
              <C.Anchor
                animationScaleX={true}
                aria-label="Anchor para serviços"
              >
                Serviços
              </C.Anchor>
            </Link>
            <Link href="plans">
              <C.Anchor animationScaleX={true} aria-label="Anchor para planos">
                Planos
              </C.Anchor>
            </Link>
          </C.Navbar>
          <C.NavbarSecundary>
            <Link href="/login">
              <C.Anchor
                animationScaleX={false}
                borderBottom="1px solid var(--white)"
                aria-label="Anchor para acessar painel"
              >
                Acessar
              </C.Anchor>
            </Link>
            <Link href="/register">
              <C.Anchor
                animationBackground={true}
                background="var(--blue-dark)"
                borderRadius={2}
                marginLeft={1}
                aria-label="Anchor para se registrar"
              >
                Registrar
              </C.Anchor>
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
            <C.Anchor
              animationBackground={true}
              background="var(--blue-dark)"
              borderRadius={2}
              marginTop={5}
              height={3}
              width={20}
              aria-label="link para conhecer o sistema validay"
            >
              Quero conhecer
            </C.Anchor>
          </Link>
          <Link href="home">
            <C.Circle>
              <Fi.FiCornerRightUp />
            </C.Circle>
          </Link>
        </C.Main>
      </C.Container>
      <C.About>
        <C.Img
          src={groupTi.src}
          alt="Imagem de jovens de tecnologia trabalhando."
        />
        <C.BannerVertical>
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
            <C.Anchor
              animationBackground={true}
              background="var(--blue-dark)"
              borderRadius={2}
            >
              Conhecer planos
            </C.Anchor>
          </Link>
        </C.BannerVertical>
      </C.About>
      <C.Services>
        <C.Carousel>
          <C.Slider>
            <Fi.FiLock />
            <C.P marginTop={0.3}>
              Forneça uma melhor experiência aos seus clientes fazendo um melhor
              controle da validade de seus produtos.Forneça uma melhor
              experiência aos seus clientes fazendo um melhor controle da
              validade de seus
            </C.P>
          </C.Slider>
        </C.Carousel>

        <C.ContentText>
          <C.H5>Serviços</C.H5>
          <C.P color="var(--blue-light)">Veja nossos serviços.</C.P>
          <C.P>
            Forneça uma melhor experiência aos seus clientes fazendo um melhor
            controle da validade de seus produtos.Forneça uma melhor experiência
            aos seus clientes fazendo um melhor controle da validade de seus
            produtos.
          </C.P>
        </C.ContentText>
      </C.Services>
      <C.Plans>
        <C.ContainerTextPlans>
          <C.H5>Planos</C.H5>
          <C.P color="var(--blue-light)">Conheças nossos planos.</C.P>
          <C.P>
            Forneça uma melhor experiência aos seus clientes fazendo um melhor
            controle da validade de seus produtos.Forneça uma melhor experiência
            aos seus clientes fazendo um melhor controle da validade de seus
            produtos.
          </C.P>
        </C.ContainerTextPlans>
        <C.Card>
          <C.TitlePlans>
            <Fi.FiAward />
            <C.Strong size={2}>Basico</C.Strong>
          </C.TitlePlans>
          <C.ContentBenefits>
            <C.P>
              <Fi.FiCheckCircle />
              Painel
            </C.P>
            <C.P>
              <Fi.FiCheckCircle />
              Atualizações
            </C.P>
            <C.P>
              <Fi.FiCheckCircle />
              Segurança
            </C.P>
            <C.P>
              <Fi.FiCheckCircle />
              Notificações
            </C.P>
          </C.ContentBenefits>
          <C.P justify={true}>
            Forneça uma melhor experiência aos seus clientes fazendo um melhor
            controle da validade de seus produtos.Forneça uma melhor experiência
            aos seus clientes fazendo um melhor controle da validade de seus
            produtos.
          </C.P>
          <C.Strong cor="var(--white)">R$ 20,99</C.Strong>

          <Link href="buy">
            <C.Anchor
              background="var(--orange-normal)"
              borderRadius={2}
              borderReverse={true}
              borderHover="var(--white)"
              size="var(--size-sm)"
              padding="0.5rem 2rem"
            >
              Assinar
            </C.Anchor>
          </Link>
        </C.Card>
      </C.Plans>
      <C.Footer>
        <C.Button>
          <Fa.FaCommentAlt />
        </C.Button>
        <C.Span>Desenvolvido por Fabiano Pereira &copy;2021</C.Span>
        <C.Button>
          <Fi.FiHelpCircle />
        </C.Button>
      </C.Footer>
    </>
  )
}

export default Home
