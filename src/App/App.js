// import './App.css';
import { Route } from "react-router-dom";
import LandingPage from "../LandingPage/LandingPage";
import LogPage from "../LogPage/LogPage";

function App() {
  return (
    <main className="App">
      <Route exact path="/" component={LandingPage} />
      <Route exact path="/sparring_log" component={LogPage} />
    </main>
  );
}

export default App;
