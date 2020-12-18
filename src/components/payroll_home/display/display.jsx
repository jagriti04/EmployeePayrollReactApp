import React from "react";
import { withRouter } from "react-router-dom";
import EmployeeService from "../../../services/employee-service";
import "./display.scss"

const Display = props => {
  const employeeService = new EmployeeService();

  const remove = (empId) => {
    console.log("in remove func " + empId);
  }

  const update = (empId) => {
    console.log("in update func " + empId);
  }

  return (
    <table id="display" className="display">
      <tbody>
        <tr key={-1}>
          <th> Profile Image </th>
          <th> Name </th>
          <th> Gender </th>
          <th> Department </th>
          <th> Salary </th>
          <th> Start Date </th>
          <th> Actions </th>
        </tr>
        {props.employeeArray &&
          props.employeeArray.map((element, ind) => (
            <tr key={ind}>
              <td>
                <img className="profile" src={} alt="profile" />
              </td>
              <td> {element.name} </td>
              <td> {element.gender} </td>
              <td>
                {element.departMent &&
                  element.departMent.map(dept => (
                    <div className="dept-label"> {dept}</div>
                  ))}
              </td>
              <td> {element.salary} </td>
              <td> {element.startDate} </td>
              <td> <img onClick={() => remove(element.id)} src={} alt="delete" /> 
                  <img onClick={()=> update(element.id)} src={} alt="edit" />
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};

export default withRouter(Display);
