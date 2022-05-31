import Link from 'next/link'
import logo from '../../../public/assets/logo.svg'
import { Img } from './styles'

type logoProps = {
  size?: number
}

const Logo = ({ size }: logoProps) => {
  return (
    <Link href="/">
      <a>
        <Img
          size={size}
          src={logo.src}
          alt="logo do sistema de gerenciamento de validade de produtos"
        />
      </a>
    </Link>
  )
}

export { Logo }
