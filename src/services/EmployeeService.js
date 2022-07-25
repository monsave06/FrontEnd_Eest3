import axios from "axios";

 const EMPLOYEE_RESY_API_URL ='http://localhost:8081/api/Addemployee';
class EmployeeService{

    addEmployee(results){
        return axios.post(EMPLOYEE_RESY_API_URL,results);
    }
}
export default new EmployeeService();