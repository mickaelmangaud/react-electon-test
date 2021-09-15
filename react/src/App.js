import logo from './logo.svg';
import './App.css';
import appRuntime from './appRuntime';

console.log(appRuntime);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Electron React</p>
      </header>
    </div>
  );
}

export default App;
