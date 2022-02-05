import Link from 'next/link'
import {
  Container,
  ContainerTextPlans,
  Card,
  TitlePlans,
  ContentBenefits
} from './styles'
import { P, H5, Strong, Anchor } from '../../../styles/home'
import { FiAward, FiCheckCircle } from 'react-icons/fi'

export const Plans = () => {
  return (
    <Container>
      <ContainerTextPlans>
        <H5>Planos</H5>
        <P color="var(--blue-light)">Conheças nossos planos.</P>
        <P>
          Forneça uma melhor experiência aos seus clientes fazendo um melhor
          controle da validade de seus produtos.Forneça uma melhor experiência
          aos seus clientes fazendo um melhor controle da validade de seus
          produtos.
        </P>
      </ContainerTextPlans>
      <Card>
        <TitlePlans>
          <FiAward />
          <Strong size={2}>Basico</Strong>
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
        <P justify={true}>
          Forneça uma melhor experiência aos seus clientes fazendo um melhor
          controle da validade de seus produtos.Forneça uma melhor experiência
          aos seus clientes fazendo um melhor controle da validade de seus
          produtos.
        </P>
        <Strong cor="var(--white)">R$ 20,99</Strong>

        <Link href="buy">
          <Anchor
            background="var(--blue-normal)"
            border="1px solid var(--blue-normal)"
            borderRadius={2}
            borderReverse={true}
            borderHover="var(--white)"
            size="var(--size-sm)"
            padding="0.5rem 2.5rem"
          >
            Assinar
          </Anchor>
        </Link>
      </Card>
    </Container>
  )
}
