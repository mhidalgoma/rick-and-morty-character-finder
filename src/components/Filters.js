import '../styles/components/Filters.scss';
const Filters = (props) => {
  const handleInputChange = (ev) => {
    ev.preventDefault();
    props.handleInputName(ev.target.value);
  };

  const handleSpeciesChange = (ev) => {
    props.handleSpeciesFilter(ev.target.value);
    console.log(ev.target.value);
  };

  const handleGenderChange = (ev) => {
    props.handleGenderFilter(ev.target.value);
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
              <label htmlFor="human">Human</label>
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
        <div className="filters__gender">
          <label className="filters__gender--label" htmlFor="gender">
            Choose a gender:
          </label>
          <select
            className="filters__gender--select"
            onChange={handleGenderChange}
            name="gender"
            id="gender"
            value={props.genderFilter}
          >
            <option value="all">All</option>
            <option value="unknown">Unknown</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>
      </form>
    </>
  );
};
export default Filters;
