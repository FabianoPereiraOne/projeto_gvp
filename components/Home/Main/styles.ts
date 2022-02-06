import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 1rem 3rem;
  background-color: var(--blue-dark);

  @media screen and (max-width: 1200px) {
    padding: 1rem 1.5rem;
  }
`
export const Header = styled.header`
  width: 100%;
  height: 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
`
export const ContainerLogo = styled.div`
  width: auto;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 0.2rem;

  & svg {
    font-size: var(--size-l);
    color: var(--white);
  }
`

export const Span = styled.span<{
  color?: string
}>`
  ${props => props.color && `color: ${props.color}`}
`
export const NavbarSecundary = styled.div`
  width: auto;
  height: 100%
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 1000px) {
    display: none;
  }
`
export const Navbar = styled.nav`
  width: auto;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  @media screen and (max-width: 1000px) {
    display: none;
  }
`
export const ContainerMain = styled.div<{
  background: string
}>`
  width: 100%;
  min-height: 88vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  background: url(${props => (props.background ? props.background : '')});
  background-position: 100% 100%;
  background-size: 60%;
  background-repeat: no-repeat;

  & a {
    margin-top: 2rem;
  }

  @media screen and (min-width: 600px) and (max-width: 1000px) {
    background-position: 130% 30%;
    background-size: 70%;
  }

  @media screen and (max-width: 600px) {
    align-items: center;
    background: none;
    padding: 2rem 0;

    & p {
      text-align: center;
    }

    & a::first-of-type {
      margin-top: 3rem;
      font-size: 1.1rem;
      width: 80%;
    }
  }

  @media screen and (max-width: 400px) {
    align-items: center;
    background: none;
    padding: 2rem 0;

    & p {
      text-align: center;
    }

    & > a {
      margin-top: 3rem;
      font-size: 1.1rem;
      width: 100%;
    }
  }
`
export const H1 = styled.h1`
  color: var(--white);
  font-family: var(--font-primary), sans-serif;
  font-weight: 500;
  font-size: var(--size-xl);
  max-width: 22rem;

  @media screen and (min-width: 600px) and (max-width: 1000px) {
    font-size: 3.5rem;
  }

  @media screen and (max-width: 600px) {
    text-align: center;
    font-size: 3rem;
  }
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
  bottom: 3rem;
  right: 3rem;
  z-index: 50;
  font-size: ${props => (props.fontSize ? `${props.fontSize}rem` : '1.6rem')};
  transition: 0.3s;
  &:hover {
    transform: scale(1.1, 1.1);
  }

  @media screen and (max-width: 1200px) {
    bottom: 1.5rem;
  }
`

export const TextLogo = styled.p`
  text-transform: uppercase;
  font-family: var(--font-secundary), sans-serif;
  font-size: 2rem;
  font-weight: 400;
  margin-top: 0.4rem;
  font-weight: normal;
  color: var(--white);
`

export const ButtonMenu = styled.button`
  display: none;

  @media screen and (max-width: 1000px) {
    display: inline-block;
    background: none;
    border: none;

    & svg {
      color: var(--white);
      font-size: 3rem;
    }
  }
`

export const Img = styled.img`
  display: none;

  @media screen and (max-width: 600px) {
    display: block;
    max-width: 100%;
  }
`
export const MenuMobile = styled.aside`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  background-color: var(--blue-dark);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  transition: 0.3s;
  z-index: 50;
`
export const ButtonClose = styled.button`
  background: none;
  border: none;
  color: var(--white);
  font-size: 3rem;
  position: absolute;
  left: 1rem;
  top: 1rem;
`
