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
          This app was coded by Suzanna Wallis and is open-sourced on{" "}
          <a href="https://github.com/SuzannaW-web/dictionary-app">GitHub</a>{" "}
          and hosted on{" "}
          <a href="https://dictionary-by-suzanna.netlify.app/">Netlify</a>
        </footer>
      </div>
    </div>
  );
}

export default App;
