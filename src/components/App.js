import '../styles/App.css';
import { useState, useEffect } from 'react';
import CharacterList from './CharacterList';
import Filters from './Filters';
import callToApi from '../services/callToApi';

function App() {
  //VARIABLES ESTADO
  const [data, setData] = useState([]);
  const [inputNameFilter, setInputNameFilter] = useState('');

  //USE EFFECT
  useEffect(() => {
    callToApi().then((cleanData) => setData(cleanData));
  }, []);

  //FUNCIONES HANDLER
  const handleInputName = (value) => {
    setInputNameFilter(value);
  };

  const filteredCharacters = data.filter((character) =>
    character.name.toLowerCase().includes(inputNameFilter.toLowerCase())
  );

  //FUNCIONES RENDER

  return (
    <div>
      <header>
        <h1>Rick y Morty</h1>
      </header>
      <main>
        <Filters handleInputName={handleInputName}></Filters>
        <CharacterList data={filteredCharacters}></CharacterList>
      </main>
    </div>
  );
}

export default App;
