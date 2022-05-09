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
        <P $color="var(--blue-light)">Conheças nossos planos.</P>
        <P>
          Estamos com planos imperdiveis, aproveite esse super descontão e tenha
          hoje um sistema alinhado ao gosto e sem gasta muito. Oferta por tempo
          limitado!
        </P>
      </ContainerTextPlans>
      <Card>
        <TitlePlans>
          <FiAward />
          <Strong $size={2}>Basico</Strong>
        </TitlePlans>
        <ContentBenefits>
          <P>
            <FiCheckCircle />
            Painel
          </P>
          <P>
            <FiCheckCircle />
            Atualizações
          </P>
          <P>
            <FiCheckCircle />
            Segurança
          </P>
          <P>
            <FiCheckCircle />
            Notificações
          </P>
        </ContentBenefits>
        <P $justify={false}>
          Tenha 7 dias de teste para você conhecer nossas funcionalidades e e
          outros serviços que desenvolvemos com muito carinho para nossos
          clientes. Aproveite!!!
        </P>
        <Strong $cor="var(--white)">R$ 20,99</Strong>
        <Link href="/register-payment">
          <Anchor
            $background="var(--blue-normal)"
            $border="1px solid var(--blue-normal)"
            $borderRadius={2}
            $borderReverse={true}
            $borderHover="var(--white)"
            $padding="0.5rem 2.5rem"
          >
            Assinar
          </Anchor>
        </Link>
      </Card>
    </Container>
  )
}
