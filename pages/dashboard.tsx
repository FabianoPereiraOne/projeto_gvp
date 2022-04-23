import { GetServerSideProps } from 'next'
import { Head } from 'next/document'
import { parseCookies } from 'nookies'
import { useAuthContext } from '../context/authContext'

const dashboard = () => {
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

export const getServerSideProps: GetServerSideProps = async ctx => {
  const cookies = parseCookies(ctx)

  if (!cookies['auth.TokenAccess']) {
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
