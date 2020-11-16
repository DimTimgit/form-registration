import React from "react";

const User = (props) => {
  return (
    <div>
      <h3 style={{ color: "black" }}> {props.name}</h3>
      <h3 style={{ color: "black" }}> {props.email}</h3>
    </div>
  );
};

export default User;
