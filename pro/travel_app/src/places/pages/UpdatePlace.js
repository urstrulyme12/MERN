import React from "react";

import { useParams } from "react-router-dom";
import Input from "../../shared/FormElements/Input";
import Button from "../../shared/FormElements/Button";
import { VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE } from "../../shared/util/validators";

const Dummy_Places = [
  {
    id: 1,
    title: "Emire state Building",
    description: "One of the most famous sky scrapers in the world!",
    imageUrl:
      "https://www.esbnyc.com/sites/default/files/2020-01/ESB%20Day.jpg",
    address: "20 W 34th St., New York, NY 10001, United States",
    location: {
      lat: 40.7484,
      lng: -73.9857,
    },
    creator: "u1",
  },
  {
    id: 2,
    title: "Emire state Building",
    description: "One of the most famous sky scrapers in the world!",
    imageUrl:
      "https://www.esbnyc.com/sites/default/files/2020-01/ESB%20Day.jpg",
    address: "20 W 34th St., New York, NY 10001, United States",
    location: {
      lat: 40.7484,
      lng: -73.9857,
    },
    creator: "u2",
  },
];

const UpdatePlace = () => {
  const placeId = useParams().placeId;
  const identifiedPlace = Dummy_Places.find((p) => p.id === placeId);

  if (!identifiedPlace) {
    return (
      <div className="center">
        <h2>Could not find place!</h2>
      </div>
    );
  }

  return (
    <form>
      <Input
        id="title"
        element="input"
        type="text"
        label="Title"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid title"
        onInput={() => {}}
        value={identifiedPlace.title}
        valid={true}
      />

      <Input
        id="description"
        element="textarea"
        
        label="Description"
        validators={[VALIDATOR_MINLENGTH()]}
        errorText="Please enter a valid description(minimum 5 characters"
        onInput={() => {}}
        value={identifiedPlace.description}
        valid={true}
      />
      <Button type="submit" disabled={true} >UPDATE PLACE</Button>
    </form>
  );
};

export default UpdatePlace;
