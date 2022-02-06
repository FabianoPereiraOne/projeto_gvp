import {
  Container,
  Carousel,
  Slider,
  ContentText,
  ContentImageGroup,
  Img
} from './styles'
import { P, H5 } from '../../../styles/home'
import { FiLock } from 'react-icons/fi'

export const Services = () => {
  return (
    <Container id="services">
      <Carousel>
        <Slider>
          <FiLock />
          <P marginTop={0.3}>
            Forneça uma melhor experiência aos seus clientes fazendo um melhor
            controle da validade de seus produtos.Forneça uma melhor experiência
            aos seus clientes fazendo um melhor controle da validade de seus
          </P>
        </Slider>
      </Carousel>

      <ContentImageGroup>
        <Img
          src="/assets/vetor_services.svg"
          alt="Imagem de equipe testando o nosso sistema"
        />
      </ContentImageGroup>

      <ContentText>
        <H5>Serviços</H5>
        <P color="var(--blue-light)">Veja nossos serviços.</P>
        <P>
          Forneça uma melhor experiência aos seus clientes fazendo um melhor
          controle da validade de seus produtos.Forneça uma melhor experiência
          aos seus clientes fazendo um melhor controle da validade de seus
          produtos.
        </P>
      </ContentText>
    </Container>
  )
}
