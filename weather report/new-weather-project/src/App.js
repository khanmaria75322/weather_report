import "./App.css";
import { useState } from "react";
import Home from "./components/home/Home";
import Loader from './components/loader/Loader';

function App() {
  const [timer, setTimer] = useState(false);

  setTimeout(() => {
    setTimer(true);
  }, 3000);

  return (
    <div className="App">
      <header>
        {timer ? <Home /> : <Loader/>}
      </header>
    </div>
  );
}

export default App;
