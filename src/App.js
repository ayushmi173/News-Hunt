import "./App.css";
import CardsUI from "./Componant/CardsUI";
import AxiosFile from "./Componant/AxiosFile";
import { Route, Switch } from "react-router-dom";
import ShowNewsHeading from "./Componant/ShowNewsHeading";

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/News-Hunt" component={CardsUI} />
        <Route exact path="/News" component={AxiosFile} />
        <Route extact path ="/Catagory/Sports" component ={ShowNewsHeading} />
        <Route extact path ="/Catagory/Politics" component ={ShowNewsHeading} />
        <Route extact path ="/Catagory/Technology" component ={ShowNewsHeading} />
        <Route extact path ="/Catagory/World" component ={ShowNewsHeading} />
        <Route extact path ="/Catagory/Science" component ={ShowNewsHeading} />
        <Route extact path ="/Catagory/Entertainment" component ={ShowNewsHeading} />
        <Route extact path ="/Catagory/Weather" component ={ShowNewsHeading} />
        <Route extact path ="/Catagory/Economy" component ={ShowNewsHeading} />
        <Route extact path ="/Catagory/Romance" component ={ShowNewsHeading} />
      </
      Switch>
    </>
  );
}

export default App;
