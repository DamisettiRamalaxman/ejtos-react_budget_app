import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Currency = () => {
  const { dispatch } = useContext(AppContext);

  const changeLocation = (val) => {
    dispatch({
      type: "CHG_CURRENCY",
      payload: val,
    });
  };

  const containerStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    backgroundColor: '#f8f9fa'
  };

  const labelStyle = {
    marginRight: '10px',
    fontWeight: 'bold'
  };

  const selectStyle = {
    width: '75%',
    padding: '5px',
    borderRadius: '5px',
    border: '1px solid #ccc'
  };

  const optionStyle = {
    backgroundColor: '#d4edda',
    color: '#155724'
  };

  return (
    <div style={containerStyle}>
      <span style={labelStyle}>Currency</span>
      <select
        style={selectStyle}
        name="Currency"
        id="Currency"
        onChange={(event) => changeLocation(event.target.value)}
      >
        <option style={optionStyle} value="$">$ Dollar</option>
        <option style={optionStyle} value="£">£ Pound</option>
        <option style={optionStyle} value="€">€ Euro</option>
        <option style={optionStyle} value="₹">₹ Rupee</option>
      </select>
    </div>
  );
};

export default Currency;
