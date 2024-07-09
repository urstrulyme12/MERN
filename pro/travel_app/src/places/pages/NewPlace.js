import React from "react";
import "./NewPlace.css";
import Input from "../../shared/FormElements/Input";
import { VALIDATOR_REQUIRE } from "../../shared/util/validators";

const NewPlace = (props) => {
  return (
    <>
      <form className="place-form">
        <Input
          element="input"
          type="text"
          label="Title"
          validators={[VALIDATOR_REQUIRE()]}
          errorText="Pls enter valid text"
        />
      </form>
    </>
  );
};

export default NewPlace;
