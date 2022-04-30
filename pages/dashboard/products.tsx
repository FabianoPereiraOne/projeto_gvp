import { NextPage } from 'next'
import { FormEvent, useState } from 'react'

const Products: NextPage = () => {
  const [name, setName] = useState<string>('')
  const [barCode, setBarCode] = useState<string>('')
  const [validity, setValidity] = useState<string>('dd/mm/aaaa')

  const handleProducts = (event: FormEvent) => {
    event.preventDefault()
    console.log(name, barCode, validity)
  }

  return (
    <form onSubmit={handleProducts}>
      <h1> Add New Product </h1>
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
