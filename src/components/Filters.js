import '../styles/components/Filters.scss';
const Filters = (props) => {
  const handleInputChange = (ev) => {
    ev.preventDefault();
    props.handleInputName(ev.target.value);
  };
  return (
    <>
      <h1 className="main__h1">Búsqueda de personajes</h1>
      <form className="filters">
        <input
          className="filters__name"
          onChange={handleInputChange}
          type="text"
          value={props.inputNameFilter}
        />
      </form>
    </>
  );
};
export default Filters;
