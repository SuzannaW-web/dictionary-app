import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="Container">
        <header className="App-header">
          <h1>Look it up</h1>
          <p>Some text here</p>
        </header>
        <main>
          <Dictionary />
        </main>
        <footer className="App-footer">Coded by Suzanna</footer>
      </div>
    </div>
  );
}

export default App;
