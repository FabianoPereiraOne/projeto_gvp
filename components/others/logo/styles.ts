import styled from 'styled-components'

export const Img = styled.img<{
  size?: number
}>`
  width: ${props => (props.size ? `${props.size}rem` : '5rem')};
  height: ${props => (props.size ? `${props.size}rem` : '5rem')};
`
