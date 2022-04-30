import { verify } from 'jsonwebtoken'
import { GetServerSideProps } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { destroyCookie, parseCookies } from 'nookies'
import { UseAuthContext } from '../../context/authContext'
import { Anchor } from '../../styles/home'

const Initial = () => {
  const { handleSignOut } = UseAuthContext()

  return (
    <div>
      <Head>
        <title>GVP | Dashboard Inicial</title>
      </Head>
      <h1>Pagina dashboard</h1>
      <button onClick={handleSignOut}>Deslogar</button>
      <hr />
      <br />
      <br />
      <br />
      <Link href="/dashboard/products" passHref>
        <Anchor $background="blue" $borderRadius={50} $padding="0.5rem">
          Cadastro
        </Anchor>
      </Link>
    </div>
  )
}

export default Initial

export const getServerSideProps: GetServerSideProps = async context => {
  const cookies = parseCookies(context)

  if (!cookies['auth.tokenAccess']) {
    return {
      redirect: {
        permanent: false,
        destination: '/auth/login'
      },
      props: {}
    }
  }

  try {
    verify(
      cookies['auth.tokenAccess'],
      process.env.NEXT_PUBLIC_VERCEL_SECRET_KEY
    )
  } catch (error) {
    console.log(error)
    destroyCookie(context, 'auth.tokenAccess')
    return {
      redirect: {
        permanent: false,
        destination: '/auth/login'
      },
      props: {}
    }
  }

  return {
    props: {}
  }
}
