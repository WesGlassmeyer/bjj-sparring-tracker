// import './App.css';
import { Route } from "react-router-dom";
import LandingPage from "../LandingPage/LandingPage";

function App() {
  return (
    <main className="App">
      <Route exact path="/" component={LandingPage} />
    </main>
  );
}

export default App;
