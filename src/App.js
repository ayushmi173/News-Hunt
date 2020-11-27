import "./App.css";
import CardsUI from "./Componant/CardsUI";
import AxiosFile from "./Componant/AxiosFile";
import { Route, Switch } from "react-router-dom";
import { useEffect } from "react";
function App(props) {
  useEffect(() => {
    document.title = "News Hunt";
  });

  return (
    <>
      <Switch>
        <Route exact path="/News-Api" component={CardsUI} />
        <Route exact path="/News" component={AxiosFile} />
      </Switch>
    </>
  );
}

export default App;

///By using our site, you acknowledge that you have read and understand our Cookie Policy, Privacy Policy, and our Terms of Service.
