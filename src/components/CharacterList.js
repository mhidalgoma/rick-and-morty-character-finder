import CharacterCard from './CharacterCard';
import '../styles/components/CharacterList.scss';

const CharacterList = ({ data }) => {
  console.log(data);
  const characterCards = data.map((character) => {
    return (
      <CharacterCard key={character.id} character={character}></CharacterCard>
    );
  });
  const errorMsg =
    characterCards.length === 0 ? 'No hay personajes con ese nombre' : '';

  return (
    <section className="characters">
      <p className="characters__error-msg">{errorMsg}</p>
      <ul className="characters__list">{characterCards}</ul>
    </section>
  );
};
export default CharacterList;
