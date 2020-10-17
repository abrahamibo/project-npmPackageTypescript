import React, { Component } from "react";
import { add } from "../../helpers/utils";
import Button from "../Button";

export default class MyReactAppClass extends Component {

  render(): JSX.Element {
    return (
      <div>
        {add(1, 1)}
        <Button />
      </div>
    );
  }
}

