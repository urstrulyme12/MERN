import React from "react";
import { Link } from "react-router-dom";
import "./UserItem.css";
import Avatar from "../../shared/Avatar";

function UserItem(props) {
  console.log(props.image);
  return (
    <li className="user-item">
      <div className="user-item__content">
        <Link to={`/${props.id}/places`}> 
        <div className="user-item__image">
          <Avatar image={props.image} alt={props.name} />
          <img />
        </div>
        <div className="user-item__info">
          <h2>{props.name}</h2>
          <h3>
            {props.placesCount} {props.placesCount === 1 ? "place" : "places"}
          </h3>
        </div>
        </Link>
      </div>
    </li>
  );
}

export default UserItem;
