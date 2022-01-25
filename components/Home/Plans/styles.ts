import styled from 'styled-components'

export const Container = styled.section`
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background-color: var(--blue-dark);
  padding: 0 2rem;
  display: flex;
`
export const ContainerTextPlans = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
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
`
export const TitlePlans = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 0.2rem;

  & svg {
    font-size: var(--size-l);
    color: var(--blue-light);
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
    color: var(--orange-light);
  }
`
