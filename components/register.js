import React, { useState } from "react";
//import styles from './../styles/register.module.css'
import Creatable from "react-select/creatable";

const roles = [
  { label: "admin", value: 1 },
  { label: "student", value: 2 },
  { label: "tutor", value: 3 },
  { label: "guardian", value: 4 },
];

const customStyles = {
  option: (provided, state) => ({
    ...provided,
    borderBottom: "1px dotted pink",
    color: state.isSelected ? "red" : "blue",
    padding: 20,
  }),
};


const Register = (props) => {
  const [roleValue, setRoleValue] = useState("");

  const handleChange = (field, value) => {
    switch (field) {
      case "roles":
        setRoleValue(value);
        break;

      default:
        break;
    }
  };

  return (
    <div className="container">
      <div className="register-form">
        <div className="input">
          <label>Role(s)</label>
          <Creatable
            isClearable
            isMulti
            onChange={(value) => handleChange("roles", value)}
            options={roles}
            value={roleValue}
            styles={customStyles}
          />
        </div>

        <div className="buttons">
          <button>Submit</button>
        </div>
      </div>
    </div>
  );
};

export default Register;
