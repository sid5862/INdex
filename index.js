import React from "react";
import ReactDOM from "react-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
// import { BrowserRouter } from 'react-router-dom';
import "./index.css";
// import App from './App';
// import ToDo from "./ToDo";
// import UseEffect from './UseEffect'
// import SwitchRouter from './SwitchRouter'
// import LoginForm from './LoginForm'
// import Width from './Width'
// import IncreDecre from './IncreDecre'
// import Practice from './Practice'
// import Calculator from "./claculator/Calculator";
// import ArrayFn from "./Practice/ArrayFn";
// import Percentage from "./Practice/Percentage";
// import FindPercent from "./Practice/FindPercent";
// import NewCal from "./claculator/NewCal";
// import Newcalcu from "./claculator/Newcalcu";
// import Weather from "./Weather/Weather";
// import ToDoApp from "./interview/ToDoApp";
// import Api from "./interview/Api";
// import Email from "./Practice/Email";
// import Newclk from "./Practice/Newclk";
import Dashboard from "./Dashboard/Dashboard";

ReactDOM.hydrate(
  // <BrowserRouter>
  //   {/* <App /> */}
  // <ToDo />,
  //   {/* <UseEffect/> */}
  //   {/* <SwitchRouter/> */}
  // </BrowserRouter>,

  // <LoginForm/>,
  // <Width/>,
  // <IncreDecre/>,
  // <Practice/>,
  // <Calculator />,
  // <ArrayFn />,
  // <Percentage />,
  // <FindPercent />,
  // <NewCal />,
  // <Newcalcu />,
  // <Weather />,
  // <ToDoApp />,
  // <Api />,
  // <Email />,
  // <Newclk />,
  <Dashboard />,
  document.getElementById("root")
);
