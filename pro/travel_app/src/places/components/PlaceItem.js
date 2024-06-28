import React, { useState } from "react";
import "./PlaceItem.css";
import Card from "../../shared/UIElements/Card";
import Button from "../../shared/FormElements/Button";
import Modal from "../../shared/UIElements/Modal";
import Map from '../../shared/UIElements/Map';

function PlaceItem(props) {
  const [showMap, setShowMap] = useState(false);

  const handleModelOpen = () => {
    setShowMap(true);
  };

  const handleModelClose = () => {
    setShowMap(false);
  };

  return (
    <>
      <Modal
        show={showMap}
        onCancel={handleModelClose}
        header={props.address}
        contentClass="place-item__modal-content"
        footerClass="place-item__modal-actions"
        footer={<Button onClick={handleModelClose}>CLOSE</Button>}
      >
        <div className="map-container">
        <Map center={props.coordinates} zoom={16} />
        </div>
      </Modal>
      <li className="place-item">
        <Card className="place-item__content">
          <div className="place-item__image">
            <img src={props.image} alt={props.title} />
          </div>
          <div className="place-item__info">
            <h2>{props.title}</h2>
            <h3>{props.address}</h3>
            <p>{props.description}</p>
          </div>
          <div className="place-item__actions">
            <Button inverse onClick={handleModelOpen}>VIEW ON MAP</Button>
            <Button to={`/places/${props.id}`}>EDIT</Button>
            <Button danger>Delete</Button>
          </div>
        </Card>
      </li>
    </>
  );
}

export default PlaceItem;
