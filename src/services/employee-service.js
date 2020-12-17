import config from "../config/config";
import AxiosService from "./axios-service.js";

export default class EmployeeService {
  baseUrl = config.baseUrl;
  getEmployees() {
    return AxiosService.getService("${this.baseUrl}employee");
  }
}
