import logo from './logo.svg';
import './styles/App.css';
import 'materialize-css/dist/css/materialize.min.css';
import Table from './components/Table';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          React Directory
        </h1>

      <Table />

      </header>


    </div>
  );
}

export default App;
