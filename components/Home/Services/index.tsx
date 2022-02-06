import { Container, ContentText, ContentImageGroup, Img } from './styles'
import { P, H5 } from '../../../styles/home'
import { FiLock, FiDatabase, FiLayout } from 'react-icons/fi'
import { CarouselProvider, Slider, Slide } from 'pure-react-carousel'
import styles from './services.module.css'
import 'pure-react-carousel/dist/react-carousel.es.css'

export const Services = () => {
  return (
    <Container id="services">
      <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={125}
        totalSlides={3}
        className={styles.carousel}
        isPlaying={true}
        touchEnabled={false}
        dragEnabled={false}
        interval={7000}
        infinite={true}
      >
        <Slider className={styles.slider}>
          <Slide index={0} className={styles.slide}>
            <FiLock />
            <P marginTop={0.3}>
              Aproveite de um sistema incrivel, que prioriza a segurança dos
              dados da sua empresa e também dos seus produtos.
            </P>
          </Slide>
          <Slide index={1} className={styles.slide}>
            <FiDatabase />
            <P marginTop={0.3}>
              Tenha acesso a grandes bancos de dados para armazenar todos os
              seus produtos e ter um facil acesso a ele.
            </P>
          </Slide>
          <Slide index={2} className={styles.slide}>
            <FiLayout />
            <P marginTop={0.3}>
              Navegue por um sistema com design moderno, responsivo e que foi
              planejado para oferecer o melhor aos clientes.
            </P>
          </Slide>
        </Slider>
      </CarouselProvider>

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
          Nosso sistema possui o máximo de funcionalidades como: Sistema seguro,
          Layout responsivo e moderno, Banco de dados e outros. Tudo isso para
          que você ofereça ao seu cliente um produto "Top de linha".
        </P>
      </ContentText>
    </Container>
  )
}
