import CharacterCard from './CharacterCard';

const CharacterList = ({ data }) => {
  const characterCards = data.map((character) => {
    return <CharacterCard character={character}></CharacterCard>;
  });

  // const renderCharacters = () => {
  //   let cards = '';
  //   if (inputNameFilter === '') {
  //     cards = data.map((character) => renderOneCharacter(character));
  //   } else {
  //     cards = filteredData.map((character) => renderOneCharacter(character));
  //   }
  //   return cards;
  // };

  return (
    <section>
      <ul>{characterCards}</ul>
    </section>
  );
};
export default CharacterList;
