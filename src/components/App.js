import '../styles/App.css';
import { useState, useEffect } from 'react';

function App() {
  //VARIABLES ESTADO
  const [data, setData] = useState([]);
  //USE EFFECT
  useEffect(() => {
    // Dentro de useEffect llamamos a la API
    fetch('https://rickandmortyapi.com/api/character')
      .then((response) => response.json())
      .then((data) => {
        setData(data.results);
      });
  }, []);

  console.log(data);

  //FUNCIONES HANDLER
  return (
    <div>
      <h1>Hola Mundo</h1>
    </div>
  );
}

export default App;
