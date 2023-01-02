import React from 'react';
import {useState} from 'react';
import { BaseColaboradores } from './data/BaseColaboradores';
import Formulario from './components/Formulario';
import ListaColaboradores from './components/ListaColaboradores';
import BuscadorColaboradores from './components/BuscadorColaboradores';
import 'bootstrap/dist/css/bootstrap.min.css'


function App() {
  const [lstColaboradores, setLstColaboradores] = useState(BaseColaboradores);
  const [lstFiltrada, setLstFiltrada] = useState(BaseColaboradores);
  



  return (
    <div className="App">
      <BuscadorColaboradores 
          lstColaboradores={lstColaboradores}
          setLstFiltrada={setLstFiltrada}>
          
      </BuscadorColaboradores>
      <Formulario 
          lstColaboradores={lstColaboradores}
          setLstColaboradores={setLstColaboradores}
          setLstFiltrada={setLstFiltrada}>
      </Formulario>
      <ListaColaboradores 
          lstColaboradores={lstFiltrada}
          >

      </ListaColaboradores>

    </div>
  );
}

export default App;
