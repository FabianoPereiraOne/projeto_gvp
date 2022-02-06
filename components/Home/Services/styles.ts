import styled from 'styled-components'

export const Container = styled.section`
  margin-top: 5rem;
  width: 100%;
  min-height: 100vh;
  background: url('/assets/vetor_services.svg'), url('/assets/wave.svg');
  background-position: left 110%, bottom;
  background-size: 45rem auto, cover;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  z-index: 2;

  @media screen and (max-width: 1430px) {
    background: url('/assets/vetor_services.svg'),
      url('/assets/vetor_services_responsive_3.svg');
    background-position: left 110%, bottom;
    background-size: 45rem auto, cover;
    background-repeat: no-repeat;
  }

  @media screen and (max-width: 1100px) {
    background-size: 30rem auto, cover;
  }

  @media screen and (max-width: 900px) {
    background-position: center 60%, bottom;
    background-size: 30rem auto, cover;
  }

  @media screen and (max-width: 600px) {
    background: url('/assets/vetor_services_responsive_3.svg');
    background-position: bottom;
    background-size: cover;
    background-repeat: no-repeat;

    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: flex-end;
  }
`

export const Carousel = styled.article`
  width: 30rem;
  height: 12rem;
  background-color: var(--blue-dark);
  position: absolute;
  left: 50%;
  top: 1rem;
  transform: translate(-50%, 0);
  border-radius: 0.2rem;

  @media screen and (max-width: 600px) {
    width: 80%;
  }
`
export const Slider = styled.div`
  width: 100%;
  height: 100%;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  & svg {
    color: var(--white);
    font-size: var(--size-l);
  }

  & p {
    max-height: 4.5em;
    text-align: center;
    overflow: hidden;
  }
`

export const ContentText = styled.div`
  max-width: 50%;
  height: auto;
  position: absolute;
  right: 0;
  bottom: 0;
  padding: 0 4rem 2rem 0;

  & p:last-of-type {
    margin-top: 0.5rem;
  }

  @media screen and (max-width: 900px) {
    max-width: 100%;
    left: 0;
    padding: 1rem 1.5rem;

    & p {
      max-width: 100%;
    }
  }

  @media screen and (max-width: 600px) {
    margin-top: 1rem;
    display: block;
    position: relative;
  }
`

export const ContentImageGroup = styled.div`
  display: none;

  @media screen and (max-width: 600px) {
    display: block;
    width: 100%;
    height: auto;
    margin-top: 12rem;
  }
`
export const Img = styled.img`
  display: none;

  @media screen and (max-width: 600px) {
    max-width: 100%;
    display: block;
  }
`
