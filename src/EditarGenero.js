import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'

const EditarGenero = ({ match }) => {
  const [name, setName] = useState('')
  const [success, setSuccess] = useState(false)

  useEffect(() => {
    axios
      .get('/api/genres/' + match.params.id)
      .then(res => {
        setName(res.data.name)
      })
  }, [match.params.id])

  const onChange = evt => {
    setName(evt.target.value)
  }
  const save = () => {
    axios.put('/api/genres/' + match.params.id, {
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
      <h1>Editar Gênero</h1>
      <form action=''>
        <div className='form-group'>
          <label htmlFor='name'>Nome</label>
          <input onChange={onChange} value={name} type='text' className='form-control' name='name' id='name' placeholder='Nome do Gênero' />
        </div>

        <button onClick={save} type='button' className='btn btn-primary'>Salvar</button>
      </form>
    </div>
  )
}

export default EditarGenero
