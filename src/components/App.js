import '../styles/App.css';

function App() {
  //VARIABLES ESTADO
  const [data, setData] = useState([]);
  //USE EFFECT
  useEffect(() => {
    // Dentro de useEffect llamamos a la API
    fetch('https://rickandmortyapi.com/api/character')
      .then((response) => response.json())
      .then((data) => {
        setData(data.results);
      });
  }, []);

  //FUNCIONES HANDLER
  return (
    <div>
      <h1>Hola Mundo</h1>
    </div>
  );
}

export default App;
