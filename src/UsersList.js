import React, { useState, useContext } from "react";
import User from "./User";
import { FormContext } from "./FormContext";

const UsersList = () => {
  const [users, setUsers] = useContext(FormContext);

  return (
    <div className="form-wrapper">
      <h1
        style={
          ({ color: "black" },
          { borderBottom: "3px dotted rgb(212, 212, 212)" })
        }
      >
        Details
      </h1>
      <h3>
        Name :{" "}
        {users.map((user) => (
          <React.Fragment>
            <User name={user.name} />
          </React.Fragment>
        ))}
      </h3>

      <h3>
        Email :
        {users.map((user) => (
          <React.Fragment>
            <User email={user.email} />
          </React.Fragment>
        ))}
      </h3>
    </div>
  );
};

export default UsersList;
