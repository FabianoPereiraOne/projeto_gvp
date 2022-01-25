import styled from 'styled-components'

export const Container = styled.section<{
  Illustration: string
  Wave: string
}>`
  margin-top: 5rem;
  width: 100%;
  min-height: 100vh;
  background: url(${props => props.Illustration && props.Illustration}),
    url(${props => props.Wave && props.Wave});
  background-position: left 110%, bottom;
  background-size: 50rem auto, cover;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
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
  padding: 0 2rem 2rem 0;

  & p:last-of-type {
    margin-top: 0.5rem;
  }
`
