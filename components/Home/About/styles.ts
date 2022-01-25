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
  justify-content: space-between;
`
export const BannerVertical = styled.article`
  width: 30%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 1rem 3rem;
  background-color: var(--blue-normal);
  position: relative;

  & p:first-of-type {
    font-size: var(--size-md);
    z-index: 2;
  }

  & p:last-of-type {
    margin-top: 1rem;
    text-align: justify;
    color: var(--gray);
  }

  & a {
    font-size: var(--size-md);
    margin: 0 auto;
    margin-top: 2rem;
  }

  &::before {
    content: '';
    width: 100%;
    height: 7rem;
    background-color: var(--orange-light);
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 0 0 90% 90%;
    z-index: 1;
  }
`
