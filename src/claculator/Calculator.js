import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
// import { Input } from "@material-ui/core";
import "../App.css";

function Calculator() {
  const [InpVal, setInpVal] = useState([]);

  const clicked = (e) => {
    const a = InpVal;
    setInpVal([a, e.target.value].toString().replace(",", " "));
    // console.log("hlo");
  };

  const clear = () => {
    setInpVal("");
  };

  const sub = () => {
    console.log("hlo");
  };

  const sum = () => {};

  return (
    <div className="div">
      <input className="calInp" value={InpVal} maxLength="7" />
      <Col>
        <Button className="btn clear" onClick={clear}>
          Clear
        </Button>
        <Button className="btn" value="=" onClick={sub}>
          =
        </Button>
        <Button className="btn" onClick={sum} value="+">
          +
        </Button>
      </Col>
      <Col>
        <Button className="btn" onClick={clicked} value="7">
          7
        </Button>
        <Button className="btn" onClick={clicked} value="8">
          8
        </Button>
        <Button className="btn" onClick={clicked} value="9">
          9
        </Button>
        <Button className="btn" onClick={clicked} value="-">
          -
        </Button>
      </Col>
      <Col>
        <Button className="btn" onClick={clicked} value="4">
          4
        </Button>
        <Button className="btn" onClick={clicked} value="5">
          5
        </Button>
        <Button className="btn" onClick={clicked} value="6">
          6
        </Button>
        <Button className="btn" onClick={clicked} value="*">
          *
        </Button>
      </Col>
      <Col>
        <Button className="btn" onClick={clicked} value="1">
          1
        </Button>
        <Button className="btn" onClick={clicked} value="2">
          2
        </Button>
        <Button className="btn" onClick={clicked} value="3">
          3
        </Button>
        <Button className="btn" onClick={clicked} value="/">
          /
        </Button>
      </Col>
    </div>
  );
}

export default Calculator;
