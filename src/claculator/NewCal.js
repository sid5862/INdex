import React, { useState } from "react";
import "../App.css";
import { Input } from "@material-ui/core";
import { Button, Col } from "react-bootstrap";

const NewCal = () => {
  const [result, setresult] = useState("");
  const values = (e) => {
    setresult(result.concat(e.target.value));
    // }
  };

  const click = () => {
    setresult("");
  };

  const backSpace = () => {
    setresult(result.slice(0, result.length - 1));
  };

  const calculate = () => {
    try {
      setresult(eval(result).toString());
    } catch (err) {
      setresult("Error..");
    }
  };
  return (
    <div className="caldiv">
      <div className="calMain">
        <h2 className="calHead">Calculator</h2>
        <Input className="calInput" value={result} />
        <Col>
          <Button className="calBtn clear" onClick={click}>
            Clear
          </Button>
          <Button className="calBtn sign" onClick={backSpace}>
            C
          </Button>
          <Button className="calBtn sign" value="+" onClick={values}>
            +
          </Button>
        </Col>
        <Col>
          <Button className="calBtn" value="7" onClick={values}>
            7
          </Button>
          <Button className="calBtn" value="8" onClick={values}>
            8
          </Button>
          <Button className="calBtn" value="9" onClick={values}>
            9
          </Button>
          <Button className="calBtn sign" value="-" onClick={values}>
            -
          </Button>
        </Col>
        <Col>
          <Button className="calBtn" value="4" onClick={values}>
            4
          </Button>
          <Button className="calBtn" value="5" onClick={values}>
            5
          </Button>
          <Button className="calBtn" value="6" onClick={values}>
            6
          </Button>
          <Button className="calBtn sign" value="*" onClick={values}>
            *
          </Button>
        </Col>
        <Col>
          <Button className="calBtn" value="1" onClick={values}>
            1
          </Button>
          <Button className="calBtn" value="2" onClick={values}>
            2
          </Button>
          <Button className="calBtn" value="3" onClick={values}>
            3
          </Button>
          <Button className="calBtn sign" value="/" onClick={values}>
            /
          </Button>
        </Col>
        <Col>
          <Button className="calBtn" value="0" onClick={values}>
            0
          </Button>
          <Button className="calBtn" value="." onClick={values}>
            .
          </Button>
          <Button className="calBtn clear" value="=" onClick={calculate}>
            =
          </Button>
        </Col>
      </div>
    </div>
  );
};

export default NewCal;
