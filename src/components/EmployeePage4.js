import React, { useEffect, useState } from "react";
import { Link ,useHistory } from "react-router-dom";
import EmployeeService from "../services/EmployeeService";

function EmployeePage4() {
  const history = useHistory();
  const [emplyeeType, setemplyeeType] = useState(1);
  const [firstName, setfirstName] = useState();
  const [lastName, setlastName] = useState();
  const [brithday, setbrithday] = useState();
  const [Salary, setSalary] = useState();


const backScreen =()=>{
    history.replace("/EmployeePage1")

}

  return (
    <div className="container-page4">
      <form className="form-page4">
        <table className="table-History-calculatesemployee" border={1}>
        <tr>
          <td>ลำดับ</td>
          <td>รหัสพนักงาน</td>
          <td>ชื่อ - นามสกุล</td>
          <td>ผลการคำนวณ</td>
          <td>วันเวลา</td>
         
        </tr>
        </table>
        <a><button name="backScreen" onClick={backScreen} >กลับ</button></a>
      </form>


    </div>
  );
}
export default EmployeePage4;
