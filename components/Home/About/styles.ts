import styled from 'styled-components'

export const Container = styled.section<{
  section?: string
  background?: string
}>`
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

  @media screen and (min-width: 600px) and (max-width: 1200px) {
    padding: 1rem 2rem;
  }

  @media screen and (max-width: 600px) {
    padding: 1rem;
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

  @media screen and (max-width: 1200px) {
    width: 100%;
  }

  @media screen and (max-width: 600px) {
    & a {
      width: 90%;
      font-size: 1.1rem;
    }
    & p {
      max-width: 100%;
      text-align: justify;
    }
  }
`
