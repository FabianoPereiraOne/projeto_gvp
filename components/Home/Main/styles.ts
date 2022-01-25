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

  & NavbarSecundary {
    display: none;
  }
`
export const ContainerLogo = styled.div`
  min-width: 20%;
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

export const NavbarSecundary = styled.div`
  width: auto;
  height: 100%
  display: flex;
  align-items: center;
  justify-content: center;
`
export const Navbar = styled.nav`
  width: auto;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`
export const ContainerMain = styled.main<{
  background: string
}>`
  width: 100%;
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  background: url(${props => (props.background ? props.background : '')});
  background-position: 100% 100%;
  background-size: 60%;
  background-repeat: no-repeat;
`
export const H1 = styled.h1`
  color: var(--white);
  font-family: var(--font-primary), sans-serif;
  font-weight: 500;
  font-size: var(--size-xl);
`

export const Circle = styled.a<{
  width?: number
  height?: number
  color?: string
  background?: string
  fontSize?: string
}>`
  width: ${props => (props.width ? `${props.width}rem` : '3.5rem')};
  height: ${props => (props.height ? `${props.height}rem` : '3.5rem')};
  border-radius: 50%;
  color: ${props => (props.color ? props.color : 'var(--white)')};
  background: ${props =>
    props.background ? props.background : 'var(--orange-light)'};
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  z-index: 50;
  font-size: ${props => (props.fontSize ? `${props.fontSize}rem` : '1.6rem')};
  transition: 0.3s;
  &:hover {
    transform: scale(1.1, 1.1);
  }
`
