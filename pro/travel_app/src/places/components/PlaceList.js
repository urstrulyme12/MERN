import React from "react";
import Card from "../../shared/UIElements/Card";
import "./PlaceList.css";
import PlaceItem from "./PlaceItem";

function PlaceList(props) {
  if (props.items.length === 0) {
    return (
      <div className="place-list center">
        <Card>
          <h2>NO Places Found ! May be create one?</h2>
          <button> Share Place</button>
        </Card>
      </div>
    );
  }
  return (
    <>
      <ul className="place-list">
        {props.items.map((place) => {
          return (
            <PlaceItem
              key={place.id}
              id={place.id}
              image={place.imageUrl}
              title={place.title}
              description={place.description}
              address={place.address}
              creatorId={place.creator}
              coordinates={place.location}
            />
          );
        })}
      </ul>
    </>
  );
}

export default PlaceList;
