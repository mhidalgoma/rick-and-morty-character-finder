import '../styles/components/Filters.scss';
const Filters = (props) => {
  const handleInputChange = (ev) => {
    ev.preventDefault();
    props.handleInputName(ev.target.value);
  };

  const handleSpeciesChange = (ev) => {
    props.handleSpeciesFilter(ev.target.value);
  };
  return (
    <>
      <h1 className="main__h1">Búsqueda de personajes</h1>
      <form className="filters">
        <div className="filters__name">
          <label>Escribe un nombre:</label>
          <input
            className="filters__name--input"
            onChange={handleInputChange}
            type="text"
            value={props.inputNameFilter}
          />
        </div>
        <div className="filters__species">
          <legend>Elije la especie:</legend>
          <div className="filters__species--boxes">
            <div>
              <input
                onChange={handleSpeciesChange}
                type="checkbox"
                value="Human"
                checked={props.speciesFilter.includes('Human')}
              />
              <label htmlFor="human">Humana</label>
            </div>
            <div>
              <input
                onChange={handleSpeciesChange}
                type="checkbox"
                value="Alien"
                checked={props.speciesFilter.includes('Alien')}
              />
              <label htmlFor="alien">Alien</label>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};
export default Filters;
