import React, { useState } from "react";
import './App.css';
import { Button } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';



export default function App() {
  const [num, newNum] = useState(0);

  const incre = () => {
    newNum(num + 1);
  };
  const decre = () => {
    if (num === 0) {
      alert("You can not decrese the number less to 0");
      newNum(num);
    } else {
      newNum(num - 1);
    }
  };

  return (
    <div className="main_div">
      <div className="div">
        <h2 className="heading">Increment Number</h2>
        <h1 className="heading2">{num}</h1>
        <div className="btngrp">
        <Button onClick={incre} className="btn btn-green"><AddIcon/></Button>
        <Button onClick={decre} className="btn btn-red"><DeleteIcon/></Button>
        </div>
      </div>
    </div>
  );
}
