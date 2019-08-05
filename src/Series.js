import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Series = () => {
  const [data, setData] = useState([])
  useEffect(() => {
    axios
      .get('/api/series')
      .then(res => {
        setData(res.data.data)
      })
  }, [])

  const deleteSerie = id => {
    axios
      .delete('/api/series/' + id)
      .then(res => {
        const filtrado = data.filter(item => item.id !== id)
        setData(filtrado)
      })
  }

  const renderizaLinha = record => {
    return (
      <tr key={record.id}>
        <th scope='row'>{record.id}</th>
        <td>{record.name}</td>
        <td>
          <Link className='btn btn-info btn-sm' to={'/series/' + record.id}>Info</Link>
          <button className='btn btn-danger btn-sm' onClick={() => deleteSerie(record.id)}>Remover</button>
        </td>
      </tr>
    )
  }

  if(data.length === 0) {
    return (
      <div className='container'>
        <h1>Series</h1>
        <Link className='btn btn-primary' to='/series/novo'>Nova Série</Link>
        <div className='alert alert-warning' role='alert'>
          Você não possui séries criadas.
        </div>
      </div>
    )
  }

  return (
    <div className='container'>
      <h1>Series</h1>
      <Link className='btn btn-primary' to='/series/novo'>Nova Série</Link>
      <table className='table table-dark table-hover'>
        <thead>
          <tr>
            <th scope='col'>#</th>
            <th scope='col'>Nome</th>
            <th scope='col'>Ações</th>
          </tr>
        </thead>
        <tbody>
          {data.map(renderizaLinha)}
        </tbody>
      </table>
    </div>
  )
}

export default Series
