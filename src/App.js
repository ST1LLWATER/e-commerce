import "./App.css";
import { Route, Switch } from "react-router";
import Nav from "./Components/Nav";
import MainPage from "./Components/MainPage";

function App() {
  return (
    <>
      <Nav />
      <Switch>
        <Route exact path="/" component={MainPage} />
      </Switch>
    </>
  );
}

export default App;
