import React from "react";
import css from './estilo.css'

const Root = () => {
  console.log('Renderizando la app');
  return <main  className='react-calculator' >  

     <h1>Iframe test </h1>
     <iframe src="https://calculator-react-ugbq6sejbq-uc.a.run.app/" title="test">  </iframe>
  </main>
}


export default Root;
// exportacion
