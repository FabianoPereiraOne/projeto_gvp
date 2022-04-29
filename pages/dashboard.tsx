import { verify } from 'jsonwebtoken'
import { GetServerSideProps } from 'next'
import Head from 'next/head'
import { destroyCookie, parseCookies } from 'nookies'
import { UseAuthContext } from '../context/authContext'

const dashboard = ctx => {
  const { handleSignOut } = UseAuthContext()

  return (
    <div>
      <Head>
        <title>GVP | Dashboard Inicial</title>
      </Head>
      <h1>Pagina dashboard</h1>
      <button onClick={handleSignOut}>Deslogar</button>
    </div>
  )
}

export default dashboard

export const getServerSideProps: GetServerSideProps = async context => {
  const cookies = parseCookies(context)

  if (!cookies['auth.tokenAccess']) {
    return {
      redirect: {
        permanent: false,
        destination: '/login'
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
        destination: '/login'
      },
      props: {}
    }
  }

  return {
    props: {}
  }
}
