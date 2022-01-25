import { Container, Carousel, Slider, ContentText } from './styles'
import { P, H5 } from '../../../styles/home'
import { FiLock } from 'react-icons/fi'
import wave from '../../../public/assets/wave.svg'
import groupChat from '../../../public/assets/vetor_services.svg'

export const Services = () => {
  return (
    <Container Wave={wave} Illustration={groupChat}>
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
