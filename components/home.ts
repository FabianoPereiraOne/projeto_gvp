import styled from 'styled-components'
import wave from '../public/assets/wave.svg'
import groupChat from '../public/assets/vetor_services.svg'

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
export const Strong = styled.strong<{
  size?: number | string
  cor?: string
}>`
  text-transform: uppercase;
  font-family: var(--font-primary), sans-serif;
  font-size: ${props => (props.size ? `${props.size}rem` : 'var(--size-l)')};
  margin-top: 0.4rem;
  font-weight: normal;
  color: ${props => (props.cor ? props.cor : 'var(--white)')};
`
export const Navbar = styled.nav`
  width: auto;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`

export const Anchor = styled.a<{
  marginTop?: number
  marginBottom?: number
  marginLeft?: number
  marginRight?: number
  width?: number
  height?: number
  padding?: string
  size?: string
  color?: string
  background?: string
  border?: string
  colorHover?: string
  backgroundHover?: string
  animationScaleX?: boolean
  borderBottom?: string
  borderLeft?: string
  borderRight?: string
  borderTop?: string
  borderRadius?: number
  animationBackground?: boolean
  borderReverse?: boolean
  borderHover?: string
}>`
  width: ${props => (props.width ? `${props.width}rem` : 'auto')};
  height: ${props => (props.height ? `${props.height}rem` : 'auto')};
  background: ${props => (props.background ? props.background : 'none')};
  padding: ${props => (props.padding ? props.padding : '0.3rem 1.5rem')};
  margin-top: ${props => (props.marginTop ? `${props.marginTop}rem` : 0)};
  margin-bottom: ${props =>
    props.marginBottom ? `${props.marginBottom}rem` : 0};
  margin-left: ${props => (props.marginLeft ? `${props.marginLeft}rem` : 0)};
  margin-right: ${props => (props.marginRight ? `${props.marginRight}rem` : 0)};
  text-transform: uppercase;
  font-weight: 500;
  color: var(--white);
  font-size: ${props => (props.size ? props.size : 'var(--size-md)')};
  transition: 0.3s;
  text-align: center;
  vertical-align: middle;
  position: relative;
  ${props => props.borderBottom && `border-bottom: ${props.borderBottom};`}
  ${props => props.borderLeft && `border-left: ${props.borderLeft};`}
  ${props => props.borderRight && `border-right: ${props.borderRight};`}
  ${props => props.borderTop && `border-top: ${props.borderTop};`}
  ${props => props.border && `  border: 1px solid ${props.border};`}
  ${props => props.borderRadius && `border-radius: ${props.borderRadius}rem;`}

  ${props =>
    props.animationScaleX &&
    `&:hover::after {
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
    }`}

  ${props =>
    props.animationBackground &&
    `&:hover {
      background-color: var(--orange-normal);
      ${props => props.border && `border: 1px solid var(--orange-normal);`}
      : ;
    }`}


    ${props =>
    props.borderReverse &&
    `
    &:hover { 
      ${props => props.borderHover && `border: 1px solid black;`}
      background: none; 
    }
    `}
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
  justify?: boolean
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
  text-align: ${props => (props.justify ? 'justify' : 'left')};
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

//==> About
export const About = styled.section<{
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
export const Img = styled.img`
  max-width: 70%;
  max-height: 100vh;
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
export const H5 = styled.h5`
  text-transform: uppercase;
  color: var(--white);
  font-family: var(--font-primary), sans-serif;
  font-size: var(--size-l);
  font-weight: 500;
  letter-spacing: 0.3rem;
  z-index: 2;
`

export const Services = styled.section`
  margin-top: 5rem;
  width: 100%;
  min-height: 100vh;
  background: url(${groupChat.src}), url(${wave.src});
  background-position: left 110%, bottom;
  background-size: 50rem auto, cover;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
`

export const Carousel = styled.article`
  width: 30rem;
  height: 12rem;
  background-color: var(--blue-dark);
  position: absolute;
  left: 50%;
  top: 1rem;
  transform: translate(-50%, 0);
  border-radius: 0.2rem;
`
export const Slider = styled.div`
  width: 100%;
  height: 100%;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  & svg {
    color: var(--white);
    font-size: var(--size-l);
  }

  & p {
    max-height: 4.5em;
    text-align: center;
    overflow: hidden;
  }
`
export const ContentText = styled.div`
  max-width: 50%;
  height: auto;
  position: absolute;
  right: 0;
  bottom: 0;
  padding: 0 2rem 2rem 0;

  & p:last-of-type {
    margin-top: 0.5rem;
  }
`

export const Plans = styled.section`
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
export const Footer = styled.div``
export const Button = styled.div``
export const Span = styled.div``
