import { GetServerSideProps } from 'next'
import { parseCookies, destroyCookie } from 'nookies'
import { useAuthContext } from '../context/authContext'
import { verify } from 'jsonwebtoken'
import Head from 'next/head'

const dashboard = ctx => {
  const { handleSignOut } = useAuthContext()
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
