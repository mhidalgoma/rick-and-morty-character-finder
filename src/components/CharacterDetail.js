import { Link } from 'react-router-dom';
import '../styles/components/CharacterDetail.scss';
import tape from '../images/tape.png';
import error from '../images/error.png';
import portal from '../images/portal.png';
const CharacterDetail = (character) => {
  if (character.character !== undefined) {
    return (
      <article className="box">
        <Link className="return-link" to="/">
          Volver a personajes
        </Link>
        <div className="detail">
          <img className="detail__tape" src={tape} alt="" />
          <img
            className="detail__img"
            src={character.character.image}
            alt={character.character.name}
          />
          <div className="detail__text">
            <p className="detail__text--name">{character.character.name}</p>
            <p className="detail__text--status">
              <span className="detail__text--bold">Status: </span>
              {character.character.status}
            </p>
            <p className="detail__text--species">
              <span className="detail__text--bold">Species: </span>
              {character.character.species}
            </p>
            <p className="detail__text--planet">
              <span className="detail__text--bold">Origin: </span>
              {character.character.planet}
            </p>
            <p className="detail__text--episodes">
              <span className="detail__text--bold">Episodes: </span>
              {character.character.episodes}
            </p>
          </div>
        </div>
      </article>
    );
  } else {
    return (
      <article className="error-url">
        <img className="error-url__img" src={error} alt="Rick and Morty" />
        <div className="error-url__text">
          <div className="error-url__text__404">
            <p>4</p>
            <img
              className="error-url__text__404--img"
              src={portal}
              alt="Green portal"
            />
            <p>4</p>
          </div>
          <p className="error-url__text__msg">
            El personaje que intentas buscar no existe
          </p>
          <Link className="error-url__text__btn" to="/">
            Volver a personajes
          </Link>
        </div>
      </article>
    );
  }
};
export default CharacterDetail;
