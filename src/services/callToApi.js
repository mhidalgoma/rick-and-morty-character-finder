const callToApi = () => {
  return fetch('https://rickandmortyapi.com/api/character')
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
      return cleanData;
    });
};
export default callToApi;
