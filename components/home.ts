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

export const Anchor = styled.a`
  color: var(--white);
  font-size: var(--size-md);
  position: relative;
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

export const AnchorBlue = styled.a<{
  marginTop?: number
  marginBottom?: number
  marginLeft?: number
  marginRight?: number
  width?: number
  height?: number
}>`
  width: ${props => (props.width ? `${props.width}rem` : 'auto')};
  height: ${props => (props.height ? `${props.height}rem` : 'auto')};
  background-color: var(--blue-dark);
  border-radius: 2rem;
  padding: 0.3rem 1.5rem;
  margin-top: ${props => (props.marginTop ? `${props.marginTop}rem` : 0)};
  margin-bottom: ${props =>
    props.marginBottom ? `${props.marginBottom}rem` : 0};
  margin-left: ${props => (props.marginLeft ? `${props.marginLeft}rem` : 0)};
  margin-right: ${props => (props.marginRight ? `${props.marginRight}rem` : 0)};
  text-transform: uppercase;
  font-weight: 500;
  color: var(--white);
  font-size: var(--size-md);
  transition: 0.3s;
  text-align: center;
  vertical-align: middle;

  &:hover {
    background-color: var(--orange-normal);
  }
`

export const NavbarSecundary = styled.div`
  width: auto;
  height: 100%
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Main = styled.main<{
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
export const H3 = styled.h3<{
  color?: string
}>`
  color: ${props => (props.color ? props.color : 'var(--gray)')};
  font-family: var(--font-secundary), sans-serif;
  font-weight: 400;
  font-size: var(--size-l);
`
export const P = styled.p<{
  marginTop?: number
  marginBottom?: number
  marginLeft?: number
  marginRight?: number
  width?: number
  height?: number
  color?: string
}>`
  color: ${props => (props.color ? props.color : 'var(--gray)')};
  font-family: var(--font-secundary), sans-serif;
  font-size: var(--size-sm);
  max-width: 25rem;
  margin-top: 2rem;
  margin-top: ${props => (props.marginTop ? `${props.marginTop}rem` : 0)};
  margin-bottom: ${props =>
    props.marginBottom ? `${props.marginBottom}rem` : 0};
  margin-left: ${props => (props.marginLeft ? `${props.marginLeft}rem` : 0)};
  margin-right: ${props => (props.marginRight ? `${props.marginRight}rem` : 0)};
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
  font-size: ${props => (props.fontSize ? `${props.fontSize}rem` : '1.6rem')};
  transition: 0.3s;
  &:hover {
    transform: scale(1.1, 1.1);
  }
`

//==> About
export const Section = styled.section`
  width: 100%;
  min-height: 100vh;
  background-color: var(--white);
  display: flex;
  align-items: center;
  justify-content: space-between;
`
export const Img = styled.img`
  max-width: 70%;
  max-height: 100vh;
`
export const BannerVertical = styled.article<{
  background: string
}>`
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
export const H5 = styled.h5`
  text-transform: uppercase;
  color: var(--white);
  font-family: var(--font-primary), sans-serif;
  font-size: var(--size-l);
  font-weight: 500;
  letter-spacing: 0.3rem;
  z-index: 2;
`
