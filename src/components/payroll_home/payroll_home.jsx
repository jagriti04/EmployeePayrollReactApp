import React from "react";
import Display from "./display/display";
import EmployeeService from "../../services/employee-service";
import {Link} from "react-router-dom";

class PayrollHome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchExpand: false,
      employeeArray: [
        {
          name: "Kamla",
          departMent: ["Engineer"],
          gender: "female",
          salary: "30000",
          startDate: "1 June 2020",
          notes: "",
          id: 16,
          profileUrl: "../../assets/profile-images/Ellipse -8.png"
        },
        {
          name: "Rakesh",
          departMent: ["HR", "Finance"],
          gender: "male",
          salary: "60000",
          startDate: "1 Jan 2018",
          notes: "Hello123",
          id: 17,
          profileUrl: "../../assets/profile-images/Ellipse-8.png"
        }
      ],
      AllEmployeeArray: []
    };
    this.employeeService = new EmployeeService();
  }
  openSearch = () => {
    this.setState({ searchExpand: true });
  };
  componentDidMount() {
    this.getAllEmployee();
  }

  getAllEmployee = () => {
    this.employeeService
      .getEmployees()
      .then(data => {
        console.log("data after get ", data.data);
        this.setState({
          employeeArray: data.data,
          AllEmployeeArray: data.data
        });
      })
      .catch(err => {
        console.log("err after ", err);
      });
  };
  search = async event => {
    let search = event.target.value;

    await this.setState({ employeeArray: this.state.AllEmployeeArray });
    let empArray = this.state.employeeArray;
    if (search.trim().length > 0)
      empArray = empArray.filter(
        element => element.name.toLowerCase().indexOf(search.toLowerCase()) > -1
      );

    this.setState({ employeeArray: empArray });
  };

  render() {
    return (
      <div className="home">
        <header className="header-content header">
          <div className="logo-content">
            <img src="../assets/images/logo.png" />
            <div>
              <span className="emp-text">EMPLOYEE</span> <br />
              <span className="emp-text emp-payroll">PAYROLL</span>
            </div>
          </div>
        </header>
        <div className="main-content">
          <div className="header-content">
            <div className="emp-details-text">
              Employee Details <div class="emp-count"> 10</div>
            </div>
            <Link to="form" className="add-button">
              <img src={} alt="" /> Add User
            </Link>
          </div>

          <div className="table-main">
            <Display employeeArray={this.state.employeeArray} />
          </div>
        </div>
      </div>
    );
  }
}

export default PayrollHome;
