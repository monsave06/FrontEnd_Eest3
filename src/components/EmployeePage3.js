import React, { useEffect, useState } from "react";
import { Link ,useHistory } from "react-router-dom";
import EmployeeService from "../services/EmployeeService";

function EmployeePage3() {
  const history = useHistory();
  const [emplyeeType, setemplyeeType] = useState(1);
  const [firstName, setfirstName] = useState();
  const [lastName, setlastName] = useState();
  const [brithday, setbrithday] = useState();
  const [Salary, setSalary] = useState();


const backScreen =()=>{
    history.replace("/EmployeePage2")

}

  return (
    <div className="container-page3">
      <form className="form-page3">
        <table className="table-calates-salaryemployee" border={1}>
        <tr>
            <td>
            ชื่อ -นามสกุล ผู้ทดสอบผลตอบแทน
            </td>
          </tr>
          <tr>
            <td>ผลลัพธ์</td>
         </tr>
         <tr>
            <td>ประเภทพนักงาน</td>
         </tr>
         <tr>
            <td>ผลลัพธ์</td>
         </tr>
         <tr>
            <td><a><button>คำนวณ</button></a></td>
         </tr>
          <tr>
            <td>ค่าตอบแทน คือ           บาท</td>
          </tr>
      
        </table>
        <a><button name="backScreen" onClick={backScreen} >กลับ</button></a>
      </form>


    </div>
  );
}
export default EmployeePage3;
