const Filters = (props) => {
  return (
    <form>
      <input onChange={props.handleInputName} type="text" />
    </form>
  );
};
export default Filters;
