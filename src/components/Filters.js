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
      <h1 className="main__h1">Find characters from Rick and Morty:</h1>
      <form className="filters">
        <div className="filters__name">
          <label className="filters__name--label">Write a name:</label>
          <input
            className="filters__name--input"
            onChange={handleInputChange}
            type="text"
            value={props.inputNameFilter}
            placeholder="Ej: Rick Sanchez"
          />
        </div>
        <div className="filters__species">
          <legend className="filters__species--label">
            Choose the species:
          </legend>
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
