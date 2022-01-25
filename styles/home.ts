import styled from 'styled-components'

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
export const Img = styled.img`
  max-width: 70%;
  max-height: 100vh;
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