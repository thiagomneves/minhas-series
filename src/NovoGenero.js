import React, { useState } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'

const NovoGenero = () => {
  const [name, setName] = useState('')
  const [success, setSuccess] = useState(false)
  const onChange = evt => {
    setName(evt.target.value)
  }
  const save = () => {
    axios.post('/api/genres', {
      name
    })
    .then(res => {
      setSuccess(true)
    })
  }
  if (success) {
    return <Redirect to='/generos' />
  }
  return (
    <div className='container'>
      <h1>Novo</h1>
      <form action=''>
        <div className='form-group'>
          <label htmlFor='name'>Nome do Gênero</label>
          <input onChange={onChange} value={name} type='text' className='form-control' name='name' id='name' placeholder='Nome do Gênero' />
        </div>

        <button onClick={save} type='button' className='btn btn-primary'>Salvar</button>
      </form>
    </div>
  )
}

export default NovoGenero
