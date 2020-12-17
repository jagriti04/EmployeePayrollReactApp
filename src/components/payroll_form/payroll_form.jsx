import React from "react";
import "./payroll_form.css";

class PayrollForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      fields: {}
      // name: "",
      // department: [],
      // gender: "",
      // salary: 40000,
      // startDate: "",
      // notes: "",
      // profileUrl: ""
    };
  }
  // handleName = event => {
  //   console.log(event.target.value);
  //   this.setState({
  //     name: event.target.value
  //   });
  // };

  handleChange = e => {
    let fields = this.state.fields;
    fields[e.target.name] = e.target.value;
    this.setState({
      fields
    });
  };

  forSalaryRange = event => {
    this.setState({
      salary: event.target.value
    });
  };

  validDataForm = async () => {};

  handleSubmit = () => {
    let Employee = {
      employeeName: this.state.fields.name,
      employeeDept: this.state.fields.department,
      employeeGender: this.state.fields.gender
    };
    console.log(Employee);
  };

  render() {
    return (
      <div className="payroll_div">
        <header class="header-content header">
          <div class="logo-content">
            <img src="../assets/images/logo.png" />
            <div>
              <span class="emp-text"> EMPLOYEE </span> <br />
              <span class="emp-text emp-payroll">PAYROLL</span>
            </div>
          </div>
        </header>

        <div class="form-content">
          <form
            class="form"
            action="#"
            onreset="resetForm()"
            onsubmit="save(); return false"
          >
            <div class="form-head">Employee Payroll Form</div>
            <div class="row-content">
              <label class="label text" for="name">
                Name
              </label>
              <input
                class="input"
                type="text"
                id="name"
                name="name"
                placeholder="Your name..."
                required
                onChange={event => {
                  this.handleChange(event);
                }}
              />
              <error-output class="text-error" id="name-error" for="text" />
            </div>
            <div class="row-content">
              <label class="label text" for="profile">
                Profile image
              </label>
              <div class="profile-radio-content">
                <label>
                  <input
                    type="radio"
                    id="profile1"
                    name="profile"
                    value="../assets/profile-images/Ellipse -3.png"
                    required
                  />
                  <img
                    class="profile"
                    id="image1"
                    src="../assets/profile-images/Ellipse -3.png"
                  />
                </label>
                <label>
                  <input
                    type="radio"
                    id="profile2"
                    name="profile"
                    value="../assets/profile-images/Ellipse -1.png"
                    required
                  />
                  <img
                    class="profile"
                    id="image2"
                    src="../assets/profile-images/Ellipse -1.png"
                  />
                </label>
                <label>
                  <input
                    type="radio"
                    id="profile3"
                    name="profile"
                    value="../assets/profile-images/Ellipse -8.png"
                    required
                  />
                  <img
                    class="profile"
                    id="image3"
                    src="../assets/profile-images/Ellipse -8.png"
                  />
                </label>
                <label>
                  <input
                    type="radio"
                    id="profile4"
                    name="profile"
                    value="../assets/profile-images/Ellipse -7.png"
                    required
                  />
                  <img
                    class="profile"
                    id="image4"
                    src="../assets/profile-images/Ellipse -7.png"
                  />
                </label>
              </div>
            </div>
            <div class="row-content">
              <label class="label text" for="gender">
                Gender
              </label>
              <div>
                <input type="radio" id="male" name="gender" value="male" />
                <label class="text" for="male">
                  Male{" "}
                </label>
                <input type="radio" id="female" name="gender" value="female" />
                <label class="text" for="female">
                  Female
                </label>
              </div>
            </div>
            <div class="row-content">
              <label class="label text" for="department">
                Department
              </label>
              <div>
                <input
                  class="checkbox"
                  type="checkbox"
                  id="hr"
                  name="department"
                  value="HR"
                />
                <label class="text" for="hr">
                  HR
                </label>
                <input
                  class="checkbox"
                  type="checkbox"
                  id="sales"
                  name="department"
                  value="Sales"
                />
                <label class="text" for="sales">
                  Sales
                </label>
                <input
                  class="checkbox"
                  type="checkbox"
                  id="finance"
                  name="department"
                  value="Finance"
                />
                <label class="text" for="finance">
                  Finance
                </label>
                <input
                  class="checkbox"
                  type="checkbox"
                  id="engineer"
                  name="department"
                  value="Engineer"
                />
                <label class="text" for="engineer">
                  Engineer
                </label>
                <input
                  class="checkbox"
                  type="checkbox"
                  id="others"
                  name="department"
                  value="Others"
                />
                <label class="text" for="others">
                  Others
                </label>
              </div>
            </div>
            <div class="row-content">
              <label class="label text" for="salary">
                Choose your salary:{" "}
              </label>
              <input
                class="input slider"
                type="range"
                name="salary"
                id="salary"
                min="30000"
                max="50000"
                step="100"
                value={this.state.salary}
                onChange={event => {
                  this.forSalaryRange(event);
                }}
              />
              <output class="salary-output text" id="salaryOutput" for="salary">
                {this.state.salary}
              </output>
            </div>
            <div class="row-content">
              <label class="label text" for="startDate">
                Start Date
              </label>
              <div>
                <select id="day" name="Day">
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                  <option value="11">11</option>
                  <option value="12">12</option>
                  <option value="13">13</option>
                  <option value="14">14</option>
                  <option value="15">15</option>
                  <option value="16">16</option>
                  <option value="17">17</option>
                  <option value="18">18</option>
                  <option value="19">19</option>
                  <option value="20">20</option>
                  <option value="21">21</option>
                  <option value="22">22</option>
                  <option value="23">23</option>
                  <option value="24">24</option>
                  <option value="25">25</option>
                  <option value="26">26</option>
                  <option value="27">27</option>
                  <option value="28">28</option>
                  <option value="29">29</option>
                  <option value="30">30</option>
                  <option value="31">31</option>
                </select>
                <select id="month" name="Month">
                  <option value="0">January</option>
                  <option value="1">Febuary</option>
                  <option value="2">March</option>
                  <option value="3">April</option>
                  <option value="4">May</option>
                  <option value="5">June</option>
                  <option value="6">July</option>
                  <option value="7">August</option>
                  <option value="8">September</option>
                  <option value="9">October</option>
                  <option value="10">November</option>
                  <option value="11">December</option>
                </select>
                <select id="year" name="Year">
                  <option value="2020">2020</option>
                  <option value="2019">2019</option>
                  <option value="2018">2018</option>
                  <option value="2017">2017</option>
                  <option value="2016">2016</option>
                </select>
                <error-output class="text-error" id="date-error" for="text" />
              </div>
            </div>
            <div class="row-content">
              <label class="label text" for="notes">
                Notes
              </label>
              <textarea id="notes" class="input" name="Notes" placeholder="" />
            </div>
            <div class="buttonParent">
              <a href="./home.html" class="resetButton button cancelButton">
                Cancel
              </a>
              <div class="submit-reset">
                <button
                  type="submit"
                  class="button submitButton"
                  id="submitButton"
                >
                  Submit
                </button>
                <button type="reset" class="resetButton button">
                  Reset
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default PayrollForm;
