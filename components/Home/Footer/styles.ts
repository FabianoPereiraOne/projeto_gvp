import styled from 'styled-components'

export const Container = styled.footer`
  width: 100%;
  height: 7rem;
  background-color: var(--blue-dark);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`
export const Span = styled.span`
  color: var(--white);
  font-size: var(--size-sm);
  position: relative;
  &::before {
    content: '';
    width: 4rem;
    height: 0.1rem;
    background: var(--white);
    border-radius: 0.2rem;
    position: absolute;
    left: 50%;
    bottom: -0.5rem;
    transform: translate(-50%, -50%);
  }
`
export const Button = styled.button`
  height: 60%;
  background-color: var(--white);
  border: none;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;

  & svg {
    font-size: 2rem;
    color: var(--purple);
  }

  &:first-of-type {
    width: 4.5rem;
    left: 0;
    bottom: 2rem;
    border-radius: 0 50% 50% 0;
  }

  &:last-of-type {
    width: 4.2rem;
    bottom: 0;
    right: 10rem;
    border-radius: 50% 50% 0 0;
  }
`
