import '../styles/App.scss';
import '../styles/layout/Header.scss';
import logo from '../images/logo.png';
import { useState, useEffect } from 'react';
import CharacterList from './CharacterList';
import CharacterDetail from './CharacterDetail';
import Filters from './Filters';
import callToApi from '../services/callToApi';
import { Routes, Route, matchPath, useLocation } from 'react-router-dom';

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
  const url = useLocation();
  const dataUrl = matchPath('/character/:characterId', url.pathname);
  const characterId = dataUrl !== null ? dataUrl.params.characterId : null;
  const characterClicked = data.find(
    (character) => character.id === parseInt(characterId)
  );
  // console.log(characterId);
  // console.log(characterClicked);

  //FUNCIONES RENDER

  return (
    <div>
      <header className="header">
        <img className="header__logo" src={logo} alt="Logo Rick and Morty" />
      </header>
      <main className="main">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Filters
                  handleInputName={handleInputName}
                  inputNameFilter={inputNameFilter}
                ></Filters>
                <CharacterList data={filteredCharacters}></CharacterList>
              </>
            }
          />

          <Route
            path="/character/:characterId"
            element={<CharacterDetail character={characterClicked} />}
          />
        </Routes>
      </main>
    </div>
  );
}

export default App;
