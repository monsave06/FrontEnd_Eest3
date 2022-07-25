import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import EmployeeService from "../services/EmployeeService";
import _map from "lodash/map";

function EmployeePage2() {
  const history = useHistory();
  const [emplyeeType, setemplyeeType] = useState(1);
  const [firstName, setfirstName] = useState();
  const [lastName, setlastName] = useState();
  const [brithday, setbrithday] = useState();
  const [Salary, setSalary] = useState();
  // const [data ,setdata] =useState([]);
  let [data, setdata] = useState(null);

  // useEffect(async () => {
  //   await fetch("http://localhost:8081/api/getdataemployee", {
  //     method: "GET",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify(),
  //   })
  //     .then((res) => {
  //     res.json();
  //   //     console.log(res.result.length)
  //   //     setdata(res);
  //   //  console.log(data+"122121212")
  //     }).then((ress)=>{
  //    console.log(ress)
  //    console.log(ress.length)
  //    console.log(ress.data)
  //   //     setdata(res);
  //     })
  //     .catch(() => {
  //       console.log("not add data");
  //     });
  // }, []);

  var i = 0;

  useEffect(() => {
    fetch("http://localhost:8081/api/getdataemployee")
      .then((response) => response.json())
      .then((data) => setdata(data.result));

    console.log(data);
  }, []);

  console.log(data);

  const backScreen = () => {
    history.replace("/EmployeePage1");
  };

  const calculate = () => {
    history.replace("/EmployeePage3");
  };
  return (
    <div className="container-page2">
      <form className="form-page2">
        <table className="table-Get-dateemployee" border={1}>
          <tr>
            <td>ลำดับ</td>
            <td>รหัสพนักงาน</td>
            <td>ชื่อ - นามสกุล</td>
            <td>อายุ</td>
            <td>ประเภท</td>
            <td>-</td>
          </tr>
          {_map(data, (d) => (
            <tr key={d.id}  >
              <td >  {d.empid}  </td>
              <td>  EMP-00{d.empid}  </td>
              <td>
                  {d.firstName}
                        {d.lastName}  
              </td>
              <td>{d.brithday}</td>
              {d.emplyeeType.typeid == 1 ? (
              <td>พนักงานประจำ</td>
              ) : (
                <td>พนักงานชั่วคราว</td>
                )}
              <td>
                <a onClick={calculate}> <u color="#3734eb"> คำนวณค่าตอบแทน  </u> </a>
              </td>
            </tr>
          ))}
        </table>
        <br></br>
        <a>
          <button name="backScreen" onClick={backScreen}>
            กลับ
          </button>
        </a>
      </form>
    </div>
  );
}
export default EmployeePage2;
