import logo from "./logo.png";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Some text here</p>
        <a href="/" className="btn btn-primary">
          A Button
        </a>
      </header>
    </div>
  );
}

export default App;
