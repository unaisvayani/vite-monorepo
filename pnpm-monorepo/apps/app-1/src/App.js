import logo from "./logo.svg";
import "./App.css";
import { Button } from "shared-ui";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Running App 1</p>
        <Button/>
      </header>
    </div>
  );
}

export default App;
