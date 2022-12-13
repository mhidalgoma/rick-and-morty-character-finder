const CharacterCard = ({ character }) => {
  return (
    <li key={character.id}>
      <a href={character.id}>
        <img src={character.image} alt={character.name} />
        <p>{character.name}</p>
        <p>{character.species}</p>
      </a>
    </li>
  );
};
export default CharacterCard;
