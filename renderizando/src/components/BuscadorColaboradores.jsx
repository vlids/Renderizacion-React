import React, {useState} from 'react'

const BuscadorColaboradores = () => {

    const [colaborador, setColaborador] = useState('')

  return (
    <div className='text-bg-dark'>
        <nav className="navbar bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand text-light">Buscador Colaboradores</a>
    <form className="d-flex" role="search">
      <input className="form-control me-2" type="search" placeholder="Nombre Colaborador" onChange={(c) => setColaborador(c.target.value)}/>
    </form>
  </div>
</nav>
    </div>
  )
}

export default BuscadorColaboradores