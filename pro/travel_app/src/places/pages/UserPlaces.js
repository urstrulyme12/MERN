import React from "react";
import { useParams } from "react-router-dom";
import PlaceList from "../components/PlaceList";

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

function UserPlaces() {
const userId = useParams().userId;
console.log(useParams.userId)
const loadedPlaces = Dummy_Places.filter(place=>place.creator === userId);

  return (
    <>
      <PlaceList items={loadedPlaces} />
    </>
  );
}

export default UserPlaces;
