import logo from './logo.svg';
import './App.css';
import 'materialize-css/dist/css/materialize.min.css';
import table from './components/table';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          <code>React Directory</code>
        </h1>
      </header>

      <table />

    </div>
  );
}

export default App;
