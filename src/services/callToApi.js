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
      const sortedCleanData = cleanData.sort((a, b) => {
        let fa = a.name.toLowerCase();
        let fb = b.name.toLowerCase();

        if (fa < fb) {
          return -1;
        }
        if (fa > fb) {
          return 1;
        }
        return 0;
      });

      return sortedCleanData;
    });
};
export default callToApi;
