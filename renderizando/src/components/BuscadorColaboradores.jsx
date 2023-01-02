import React, {useState} from 'react'

const BuscadorColaboradores = ({lstColaboradores, setLstFiltrada}) => {

    const filtrarElementos = (valor) => {
        const nuevoArreglo = lstColaboradores.filter((e) => e.nombre.includes(valor));
        setLstFiltrada(nuevoArreglo);
    }

  return (
    <div className='text-bg-dark'>
        <nav className="navbar bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand text-light">Buscador Colaboradores</a>
    <form className="d-flex" role="search">
      <input className="form-control me-2" type="search" placeholder="Nombre Colaborador" onChange={(e) => filtrarElementos(e.target.value)}/>
    </form>
  </div>
</nav>
    </div>
  )
}

export default BuscadorColaboradores