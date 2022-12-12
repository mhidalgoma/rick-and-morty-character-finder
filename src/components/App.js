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

  console.log(data);

  //FUNCIONES HANDLER
  //FUNCIONES RENDER
  const renderCharacters = () => {
    const card = data.map((character) => {
      return (
        <li>
          <img src={character.image} alt={`Image of ${character.name}`} />
          <p>{character.name}</p>
          <p>{character.species}</p>
        </li>
      );
    });
    return card;
  };

  return (
    <div>
      <header>
        <h1>Rick y Morty</h1>
      </header>
      <main>
        <ul>{renderCharacters()}</ul>
      </main>
    </div>
  );
}

export default App;
