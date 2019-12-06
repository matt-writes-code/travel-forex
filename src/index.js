import React, {useState} from "react";
import ReactDOM from "react-dom";
import MalaysianCounter from './components/malaysian-counter'
import Forex from './components/forex'
import "./styles.css";

const App=()=> {

const [data, setData]=useState()
const callback=(x)=>{
  setData(x)
}

  return (
    <div className="App">
      <h1 className="title">Travel Forex</h1>
      <MalaysianCounter slot={callback}/>
      <Forex currency="IDR" date="Nov 2019" rate="0.0002975" myr={data}/>
      <Forex currency="THB" date="Aug 2019" rate="0.134" myr={data}/>
      <Forex currency="JPY" date="Dec 2018" rate="0.03663" myr={data}/>
      <Forex currency="SGD" date="Sep 2018" rate="3.00" myr={data}/>
      <br/>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
