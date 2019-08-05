import React, { useState } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'

const NovaSerie = () => {
  const [name, setName] = useState('')
  const [success, setSuccess] = useState(false)
  const onChange = evt => {
    setName(evt.target.value)
  }
  const save = () => {
    axios.post('/api/series', {
      name
    })
    .then(res => {
      setSuccess(true)
    })
  }
  if (success) {
    return <Redirect to='/series' />
  }
  return (
    <div className='container'>
      <h1>Nova</h1>
      <form action=''>
        <div className='form-group'>
          <label htmlFor='name'>Nome</label>
          <input onChange={onChange} value={name} type='text' className='form-control' name='name' id='name' placeholder='Nome da Série' />
        </div>

        <button onClick={save} type='button' className='btn btn-primary'>Salvar</button>
      </form>
    </div>
  )
}

export default NovaSerie
