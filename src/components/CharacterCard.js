import { Link } from 'react-router-dom';
import '../styles/components/CharacterCard.scss';

const CharacterCard = ({ character }) => {
  return (
    <li key={character.id} className="card">
      <Link className="card__link" to={`character/${character.id}`}>
        <img
          className="card__link__img"
          src={character.image}
          alt={character.name}
        />
        <div className="card__link__text">
          <p className="card__link__text--name">{character.name}</p>
          <p className="card__link__text--species">{character.species}</p>
        </div>
      </Link>
    </li>
  );
};
export default CharacterCard;
