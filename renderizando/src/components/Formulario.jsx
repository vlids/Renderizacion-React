import React, {useState} from 'react';

const Formulario = ({lstColaboradores, setLstColaboradores, setLstFiltrada}) => {
    
    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    
    const agregarColaborador = (e) => {
        e.preventDefault();
        setLstColaboradores([...lstColaboradores,{nombre: nombre, correo: email}]);
        setLstFiltrada([...lstColaboradores,{nombre: nombre, correo: email}])
    }

  return (
    <div>
          <form  className='error' onSubmit={agregarColaborador}>
            <div className='form-group'>
                    <input type='text' id='nombre' name='nombre' placeholder='Nombre Colaborador' onChange={(e) => setNombre(e.target.value)} className='form-control mt-3 ms-5'/>
            </div>
            <div className='form-group'>
                    <input type='email' id='email' name='email' placeholder='Email Colaborador'onChange={(e) => setEmail(e.target.value)} className='form-control mt-3 ms-5'/>
            </div>
            <button className='btn btn-dark mt-3 ms-5' type='submit'>
                  Agregar Colaborador
            </button>

          </form>
    </div>
  )
}

export default Formulario