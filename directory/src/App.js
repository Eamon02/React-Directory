import logo from './logo.svg';
import './styles/App.css';
import 'materialize-css/dist/css/materialize.min.css';
import Table from './components/Table';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <Table />

      </header>


    </div>
  );
}

export default App;
