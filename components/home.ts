import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 1rem 3rem;
  background-color: var(--blue-normal);
`
export const Header = styled.header`
  width: 100%;
  height: 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const ContainerLogo = styled.div`
  width: 20%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 0.2rem;

  & svg {
    font-size: var(--size-l);
    color: var(--blue-dark);
  }
`
export const Strong = styled.strong`
  text-transform: uppercase;
  font-family: var(--font-primary), sans-serif;
  font-size: var(--size-l);
  margin-top: 0.4rem;
  font-weight: normal;
  color: var(--white);
`
export const Navbar = styled.nav`
  width: auto;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`
export const Anchor = styled.a<{ custumizable?: boolean }>`
  color: var(--white);
  font-size: var(--size-md);
  position: relative;
  transform-origin: left;
  &:hover::after {
    visibility: visible;
    -webkit-transform: scaleX(1);
    transform: scaleX(1);
  }

  &:after {
    content: '';
    width: 100%;
    height: 0.1rem;
    background-color: var(--orange-normal);
    position: absolute;
    bottom: 0;
    left: 0;
    visibility: hidden;
    -webkit-transform: scaleX(0);
    transform: scaleX(0);
    -webkit-transition: all 0.3s ease-in-out 0s;
    transition: all 0.3s ease-in-out 0s;
    border-radius: 0.2rem;
  }
`
export const NavbarSecundary = styled.div`
  width: 20%;
  height: 100%
  display: flex;
  align-items: center;
  justify-content: center;

  & a:last-of-type {
    background-color: var(--blue-dark);
    border-radius: 2rem;
    padding: 0.3rem 1.5rem;
    margin-left: 0.6rem;
    text-transform: uppercase;
    font-weight: 500;
  }
`
