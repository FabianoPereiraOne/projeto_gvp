import styled from 'styled-components'

export const Container = styled.section`
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background-color: var(--blue-light);
  padding: 1rem 3rem;
  display: flex;
  z-index: 1;

  @media screen and (min-width: 2000px) {
    margin-top: -1rem;
  }

  @media screen and (max-width: 1200px) {
    padding: 1rem 1.5rem;
  }

  @media screen and (max-width: 900px) {
    flex-direction: column;
    padding: 5rem 1.5rem;
  }
`
export const ContainerTextPlans = styled.div`
  width: 50%;
  max-width: 900px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  @media screen and (max-width: 900px) {
    width: 100%;

    & p:last-of-type {
      max-width: 70%;
    }
  }

  @media screen and (max-width: 900px) {
    width: 100%;

    & p:last-of-type {
      max-width: 100%;
    }
  }
`
export const Card = styled.article`
  width: 25rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--white);
  border-radius: 0.2rem;
  padding: 1rem 2rem;
  gap: 1rem;
  @media screen and (max-width: 900px) {
    margin-top: 2rem;
  }

  @media screen and (max-width: 600px) {
    width: 100%;
    align-items: center;
    padding: 1rem;

    & p {
      font-size: 1.1rem;
    }

    & p:nth-child(3) {
      max-width: 100%;
    }
  }

  @media screen and (max-width: 345px) {
    & > p {
      margin-top: 1rem;
      max-width: 100%;
    }
  }

  @media screen and (max-width: 300px) {
    & > p {
      margin-top: 4rem;
      max-width: 100%;
    }
  }
`
export const TitlePlans = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 0.2rem;

  & svg {
    font-size: 2rem;
    color: var(--white);
  }
`
export const ContentBenefits = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  max-height: 6em;
  gap: 1rem;

  & p {
    width: auto;
    display: flex;
    align-items: center;
  }

  & p svg {
    margin-right: 0.2rem;
    color: var(--blue-dark);
  }
`
