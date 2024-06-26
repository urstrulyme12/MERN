import React from "react";
import "./UserLists.css";
import UserItem from "./UserItem";

function UsersList(props) {
  if (props.items.length === 0) {
    return (
      <div className="center">
        <h2>No users found</h2>
      </div>
    );
  }
  return (
    <ul className="users-list">
      {props.items.map((item) => {
        return (
          <UserItem
            key={item.id}
            id={item.id}
            name={item.name}
            image={item.image}
            placesCount={item.places}
          />
        );
      })}
    </ul>
  );
}

export default UsersList;
