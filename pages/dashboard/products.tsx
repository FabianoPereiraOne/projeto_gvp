import { verify } from 'jsonwebtoken'
import { GetServerSideProps, NextPage } from 'next'
import { destroyCookie, parseCookies } from 'nookies'
import { FormEvent, useState } from 'react'
import { toast } from 'react-toastify'
import { useProductContext } from '../../context/productContext'

const Products: NextPage = () => {
  const [name, setName] = useState<string>('')
  const [barCode, setBarCode] = useState<string>('')
  const [validity, setValidity] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(false)
  const { handleCreateProduct } = useProductContext()

  const handleProducts = (event: FormEvent) => {
    event.preventDefault()
    const checked = handleCheckValueStates([name, barCode, validity])
    setLoading(true)
    if (checked) {
      const result = handleCreateProduct(name, barCode, validity)
      result.finally(() => {
        setLoading(false)
      })
    } else {
      toast.error('Preencha todos os campos!')
    }
  }

  const handleCheckValueStates = (listValuesStates: Array<string>) => {
    const listValuesChecked = listValuesStates.map(state => {
      if (state.length > 0) {
        return true
      } else {
        return false
      }
    })

    if (listValuesChecked.includes(false)) {
      return false
    }

    return true
  }

  return (
    <form onSubmit={handleProducts}>
      <h1> Add New Product </h1>
      <p>{loading && 'Adicionando...'}</p>
      <div>
        <label>Nome</label>
        <input
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
        />
      </div>
      <div>
        <label>Codigo de barras</label>
        <input
          type="number"
          maxLength={13}
          value={barCode}
          onChange={e => setBarCode(e.target.value)}
        />
      </div>
      <div>
        <label>Vencimento</label>
        <input
          type="date"
          value={validity}
          onChange={e => setValidity(e.target.value)}
        />
      </div>
      <button type="submit">Adicionar</button>
    </form>
  )
}

export default Products

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
