import React, {useState} from 'react';




const ListaColaboradores = ({lstColaboradores}) => {


  return (
    <div>
        <h2 className='ms-5 mt-5'>Lista de Colaboradores</h2>
        <ul className='ms-5'>
            {lstColaboradores.map((c) => <li key={c.id}>{c.nombre}: {c.correo.toLocaleLowerCase()}</li>)}

        </ul>
    </div>
  )
}

export default ListaColaboradores