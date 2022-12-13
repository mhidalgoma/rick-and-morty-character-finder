import '../styles/App.css';
import { useState, useEffect } from 'react';
import CharacterList from './CharacterList';
import Filters from './Filters';
import callToApi from '../services/callToApi';

function App() {
  //VARIABLES ESTADO
  const [data, setData] = useState([]);
  const [inputNameFilter, setInputNameFilter] = useState('');
  const [filteredData, setFilteredData] = useState([]);

  //USE EFFECT
  useEffect(() => {
    callToApi().then((cleanData) => setData(cleanData));
  }, []);

  //FUNCIONES HANDLER
  const handleInputName = (ev) => {
    setInputNameFilter(ev.target.value);
    const filteredCharacters = data.filter((character) =>
      character.name.toLowerCase().includes(ev.target.value.toLowerCase())
    );
    setFilteredData(filteredCharacters);
  };
  //FUNCIONES RENDER

  return (
    <div>
      <header>
        <h1>Rick y Morty</h1>
      </header>
      <main>
        <Filters handleInputName={handleInputName}></Filters>
        <CharacterList data={data}></CharacterList>
      </main>
    </div>
  );
}

export default App;
