import '../styles/App.css';
import { useState, useEffect } from 'react';

function App() {
  //VARIABLES ESTADO
  const [data, setData] = useState([]);
  const [inputNameFilter, setInputNameFilter] = useState('');
  const [filteredData, setFilteredData] = useState([]);

  //USE EFFECT
  useEffect(() => {
    // Dentro de useEffect llamamos a la API
    fetch('https://rickandmortyapi.com/api/character')
      .then((response) => response.json())
      .then((data) => {
        const cleanData = data.results.map((character) => {
          return {
            id: character.id,
            image: character.image,
            name: character.name,
            species: character.species,
            planet: character.origin.name,
            episodes: character.episode.length,
            status: character.status,
          };
        });
        setData(cleanData);
      });
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
  const renderOneCharacter = (character) => {
    return (
      <li key={character.id}>
        <img src={character.image} alt={`Image of ${character.name}`} />
        <p>{character.name}</p>
        <p>{character.species}</p>
      </li>
    );
  };

  const renderCharacters = () => {
    let cards = '';
    if (inputNameFilter === '') {
      cards = data.map((character) => renderOneCharacter(character));
    } else {
      cards = filteredData.map((character) => renderOneCharacter(character));
    }
    return cards;
  };

  return (
    <div>
      <header>
        <h1>Rick y Morty</h1>
      </header>
      <main>
        <form>
          <input onChange={handleInputName} type="text" />
        </form>
        <ul>{renderCharacters()}</ul>
      </main>
    </div>
  );
}

export default App;
