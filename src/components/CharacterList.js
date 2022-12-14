import { Link } from 'react-router-dom';
import CharacterCard from './CharacterCard';

const CharacterList = ({ data }) => {
  const characterCards = data.map((character) => {
    return <CharacterCard character={character}></CharacterCard>;
  });
  const errorMsg =
    characterCards.length === 0 ? 'No hay personajes con ese nombre' : '';

  return (
    <section>
      <p>{errorMsg}</p>
      <ul>{characterCards}</ul>
    </section>
  );
};
export default CharacterList;
