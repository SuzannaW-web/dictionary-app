import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="Container">
        <header className="App-header">
          <h1>Look it up</h1>
        </header>
        <main>
          <Dictionary />
        </main>
        <footer className="App-footer">
          Coded by Suzanna and open-sourced on{" "}
          <a href="https://github.com/SuzannaW-web/dictionary-app">GitHub</a>
        </footer>
      </div>
    </div>
  );
}

export default App;
