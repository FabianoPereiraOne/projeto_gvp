import Link from 'next/link'
import { FiAward, FiCheckCircle } from 'react-icons/fi'
import { Anchor, H5, P, Strong } from '../../../styles/home'
import {
  Card,
  Container,
  ContainerTextPlans,
  ContentBenefits,
  TitlePlans
} from './styles'

export const Plans = () => {
  return (
    <Container id="plans">
      <ContainerTextPlans>
        <H5>Planos</H5>
        <P $color="var(--blue-dark)">Conheças nossos planos.</P>
        <P $color="var(--white)">
          Estamos com planos imperdiveis, aproveite esse super descontão e tenha
          hoje um sistema alinhado ao gosto e sem gasta muito. Oferta por tempo
          limitado!
        </P>
      </ContainerTextPlans>
      <Card>
        <TitlePlans>
          <FiAward />
          <Strong $size={2} $color="var(--white)">
            Basico
          </Strong>
        </TitlePlans>
        <ContentBenefits>
          <P $color="var(--white)">
            <FiCheckCircle />
            Painel
          </P>
          <P $color="var(--white)">
            <FiCheckCircle />
            Atualizações
          </P>
          <P $color="var(--white)">
            <FiCheckCircle />
            Segurança
          </P>
          <P $color="var(--white)">
            <FiCheckCircle />
            Notificações
          </P>
        </ContentBenefits>
        <P $justify={true} $color="var(--white)">
          Tenha 7 dias de teste para você conhecer nossas funcionalidades e e
          outros serviços que desenvolvemos com muito carinho para nossos
          clientes. Aproveite!!!
        </P>
        <Strong $color="var(--orange-light)">R$ 00,00</Strong>
        <Link href="/register-payment">
          <Anchor
            $border="1px solid var(--white)"
            $borderRadius={2}
            $padding="0.5rem 3rem"
            $color="var(--white)"
            $colorHover="var(--blue-light)"
            $animationBackground={true}
            $backgroundHover="var(--white)"
            $borderHover="1px solid var(--white)"
          >
            Assinar
          </Anchor>
        </Link>
      </Card>
    </Container>
  )
}
