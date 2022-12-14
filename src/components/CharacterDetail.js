import { Link } from 'react-router-dom';
const CharacterDetail = (character) => {
  return (
    <article>
      <Link to="/"> Ir a inicio </Link>
      <div>
        <img src={character.image} alt={character.name} />
        <p>{character.name}</p>
        <p>{`Status: ${character.status}`}</p>
        <p>{`Species: ${character.species}`}</p>
        <p>{`Origin: ${character.planet}`}</p>
        <p>{`Episodes: ${character.episodes}`}</p>
      </div>
    </article>
  );
};
export default CharacterDetail;
