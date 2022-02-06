import groupTi from '../../../public/assets/vetor_about.svg'
import { Container, ContainerTextAbout, Img } from './styles'
import { Anchor, H5, P } from '../../../styles/home'

export const About = () => {
  return (
    <Container id="about">
      <Img
        src={groupTi.src}
        alt="Imagem de jovens de tecnologia trabalhando."
      />
      <ContainerTextAbout>
        <H5 color="var(--blue-normal)">Sobre</H5>
        <P color="var(--black)" fontWeight={500}>
          Conheça nosso sistema.
        </P>
        <P color="var(--gray)" marginTop={0.5}>
          O GVP surgiu de uma demanda no mercado de tecnologia para
          estabelecimentos que revendem produtos que usamos em nosso dia a dia.
          Apartir da experiência propria de mim, Fabiano Pereira, criador do
          sistema, que a ideia que antes era inconsebivel começou a tomar forma,
          e apartir do ano de 2022, foi iniciado a landing page que daria inicio
          ao projeto, e foi nessa ideia que hoje podemos desfrutar de um
          software que não só ajudará os donos dos Supermercados, mas também nós
          consumidores, já que a proposta do GVP é oferecer um melhor controle
          da validade dos produtos fazendo com que o consumidor final tenha um
          produto de qualidade e certificação.
        </P>
        <Anchor
          to="plans"
          smooth={true}
          borderRadius={2}
          background="var(--blue-normal)"
          marginTop={2}
          height={3}
          width={20}
          fontWeight={500}
          color="var(--white)"
          colorHover="var(--blue-normal)"
          border={'1px solid var(--blue-normal)'}
          borderReverse={true}
          padding="0.5rem 2rem"
          aria-label="link para conhecer o sistema GVP"
        >
          Conhecer planos
        </Anchor>
      </ContainerTextAbout>
    </Container>
  )
}
