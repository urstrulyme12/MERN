import React from "react";
import "./UserLists.css";
import UserItem from "./UserItem";
import Card from "../../shared/UIElements/Card";

function UsersList(props) {
  if (props.items.length === 0) {
    return (
      <div className="center">
        <Card>
        <h2>No users found</h2>
        </Card>
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
