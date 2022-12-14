import { Link } from 'react-router-dom';

const CharacterCard = ({ character }) => {
  return (
    <li key={character.id}>
      <Link to={`character/${character.id}`}>
        <img src={character.image} alt={character.name} />
        <p>{character.name}</p>
        <p>{character.species}</p>
      </Link>
    </li>
  );
};
export default CharacterCard;
