import React from 'react';
import {useState} from 'react';
import { BaseColaboradores } from './data/BaseColaboradores';
import Formulario from './components/Formulario';
import ListaColaboradores from './components/ListaColaboradores';
import BuscadorColaboradores from './components/BuscadorColaboradores';
import 'bootstrap/dist/css/bootstrap.min.css'


function App() {
  const [lstColaboradores, setLstColaboradores] = useState(BaseColaboradores);
  const [colaborador, setColaborador] = useState(lstColaboradores)

  return (
    <div className="App">
      <BuscadorColaboradores>
          setColaborador={setColaborador}
      </BuscadorColaboradores>
      <Formulario 
          lstColaboradores={lstColaboradores}
          setLstColaboradores={setLstColaboradores}>
      </Formulario>
      <ListaColaboradores 
          lstColaboradores={lstColaboradores}
          setLstColaboradores={setLstColaboradores}>

      </ListaColaboradores>

    </div>
  );
}

export default App;
