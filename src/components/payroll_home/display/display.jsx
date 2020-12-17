import React from "react";
import { withRouter } from "react-router-dom";

const Display = props => {
  return (
    <table id="display" className="display">
      <tr>
        <th />
        <th> Name </th>
        <th> Gender </th>
        <th> Department </th>
        <th> Salary </th>
        <th> Start Date </th>
        <th> Actions </th>
      </tr>
      {props.employeeArray &&
        props.employeeArray.map((element, ind) => {
          <tr key={ind}>
            <td>
              {" "}
              <img className="profile" src={ } alt="" />{" "}
            </td>
          </tr>;
        })}
    </table>
  );
};

export default withRouter(Display);
