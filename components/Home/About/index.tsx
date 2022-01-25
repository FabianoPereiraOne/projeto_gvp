import groupTi from '../../../public/assets/vetor_about.svg'
import { Container, BannerVertical } from './styles'
import { Anchor, H5, P, Img } from '../../../styles/home'
import Link from 'next/link'

export const About = () => {
  return (
    <Container>
      <Img
        src={groupTi.src}
        alt="Imagem de jovens de tecnologia trabalhando."
      />
      <BannerVertical>
        <H5>Sobre</H5>
        <P color="var(--blue-dark)">Conheça nosso sistema.</P>
        <P>
          Forneça uma melhor experiência aos seus clientes fazendo um melhor
          controle da validade de seus produtos.Forneça uma melhor experiência
          aos seus clientes fazendo um melhor controle da validade de seus
          produtos. Forneça uma melhor experiência aos seus clientes fazendo um
          melhor controle da validade de seus produtos.Forneça uma melhor
          experiência aos seus clientes fazendo um melhor controle da validade
          de seus produtos. Forneça uma melhor experiência aos seus clientes
          fazendo um melhor controle da validade de seus produtos.
        </P>
        <Link href="plans">
          <Anchor
            animationBackground={true}
            background="var(--blue-dark)"
            borderRadius={2}
          >
            Conhecer planos
          </Anchor>
        </Link>
      </BannerVertical>
    </Container>
  )
}
