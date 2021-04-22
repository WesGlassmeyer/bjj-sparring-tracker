// import './App.css';
import { Route } from "react-router-dom";
import LandingPage from "../LandingPage/LandingPage";
import LogPage from "../LogPage/LogPage";
import DetailPage from "../DetailPage/DetailPage";

function App() {
  return (
    <main className="App">
      <Route exact path="/" component={LandingPage} />
      <Route exact path="/sparring_log" component={LogPage} />
      <Route exact path="/sparring_details" component={DetailPage} />
    </main>
  );
}

export default App;
