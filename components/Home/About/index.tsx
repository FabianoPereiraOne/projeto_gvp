import groupTi from '../../../public/assets/vetor_about.svg'
import { Container, ContainerTextAbout, Img } from './styles'
import { Anchor, H5, P } from '../../../styles/home'
import Link from 'next/link'

export const About = () => {
  return (
    <Container>
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
          Forneça uma melhor experiência aos seus clientes fazendo um melhor
          controle da validade de seus produtos.Forneça uma melhor experiência
          aos seus clientes fazendo um melhor controle da validade de seus
          produtos. Forneça uma melhor experiência aos seus clientes fazendo um
          melhor controle da validade de seus produtos.Forneça uma melhor
          experiência aos seus clientes fazendo um melhor controle da validade
          de seus produtos. Forneça uma melhor experiência aos seus clientes
          fazendo um melhor controle da validade de seus produtos. melhor
          controle da validade de seus produtos.Forneça uma melhor experiência
          aos seus clientes fazendo um melhor controle da validade de seus
          produtos. Forneça uma melhor experiência aos seus clientes fazendo um
          melhor controle d.
        </P>
        <Link href="plans">
          <Anchor
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
        </Link>
      </ContainerTextAbout>
    </Container>
  )
}
