import React from "react";
import "./style.css";

function EmployeeCard(props) {
  return (
    <div className="card" id={props.id}>
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Name:</strong> {props.firstName} {props.lastName}
          </li>
          <li>
            <strong>Gender:</strong> {props.gender}
          </li>
          <li>
            <strong>Email:</strong> {props.email}
          </li>
          <li>
            <strong>Age:</strong> {props.age}
          </li>
        </ul>
      </div>
      <span className="remove" id={props.id}>𝘅</span>
    </div>
  );
}

{/* <span className="remove" id={props.id} onClick={() => props.removeFriend(props.id)}>𝘅</span> */}

export default EmployeeCard;
