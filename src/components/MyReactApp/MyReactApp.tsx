import React from "react";
import { add } from "../../helpers/utils";
import Button from "../Button";

export default function MyReactApp(): JSX.Element {
  return (
    <div>
      {add(1, 1)}
      <Button />
    </div>
  );
}

