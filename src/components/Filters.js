const Filters = (props) => {
  const handleInputChange = (ev) => {
    ev.preventDefault();
    props.handleInputName(ev.target.value);
  };
  return (
    <form>
      <input onChange={handleInputChange} type="text" />
    </form>
  );
};
export default Filters;
