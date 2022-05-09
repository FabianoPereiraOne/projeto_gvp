import styled from 'styled-components'

export const Container = styled.section`
  width: 100%;
  min-height: 100vh;
  background-color: var(--white);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 3rem;
  gap: 2%;

  @media screen and (max-width: 1200px) {
    flex-direction: column;
  }

  @media screen and (max-width: 1200px) {
    padding: 1rem 1.5rem;
  }
`

export const Img = styled.img`
  width: 49%;
  max-width: 900px;
  @media screen and (max-width: 1200px) {
    width: 100%;
  }
`
export const ContainerTextAbout = styled.main`
  width: 49%;
  max-width: 900px;
  min-height: 70vh;

  display: flex;
  flex-direction: column;
  justify-content: center;

  & p {
    max-width: 95%;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  & a {
    margin-top: 2rem;
  }

  @media screen and (max-width: 1200px) {
    width: 100%;
  }

  @media screen and (max-width: 600px) {
    & a {
      width: 100%;
      font-size: 1.1rem;
      text-align: center;
    }
    & p {
      max-width: 100%;
      text-align: justify;
    }
  }
`
