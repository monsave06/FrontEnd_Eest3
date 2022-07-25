import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";

function EmployeePage1() {
  const history = useHistory();
  const [typeid, settypeid] = useState(1);
  const [firstName, setfirstName] = useState();
  const [lastName, setlastName] = useState();
  const [brithday, setbrithday] = useState();
  const [salary, setsalary] = useState();
  const [compensation, setcompensation] = useState();

  // useEffect(() => {
  //   addEmployee();
  // }, [input]);

  const addEmployee = () => {
    const emplyeeType = { typeid };
    const employeeBeanFull = {
      firstName,
      lastName,
      brithday,
      emplyeeType,
      salary,
    };
    const employeeBeanPart = {
      firstName,
      lastName,
      brithday,
      emplyeeType,
      compensation,
    };

    // console.log(employeeBean);
    if (typeid == 1) {
      fetch("http://localhost:8081/api/addemployee/fulltime", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(employeeBeanFull),
      })
        .then(() => {
          console.log("New postion Add");
        })
        .catch(() => {
          console.log("not add data");
        });
    } else {
      fetch("http://localhost:8081/api/addemployee/parttime", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(employeeBeanPart),
      })
        .then(() => {
          console.log("New postion Add");
          // history.replace("/EmployeePage2");
        })
        .catch(() => {
          console.log("not add data");
        });
    }

    history.replace("/EmployeePage2");
  };

  return (
    <div className="container-page1">
      <form className="form-page1">
        <table className="table-save-dateemployee">
          <tr>
            <td>ประเภทพนักงาน : </td>
            <td>
              <select
                name="Typeemp"
                onChange={(e) => settypeid(e.target.value)}
              >
                <option value={1}>พนักงานประจำ</option>
                <option value={2}>พนักงานชั่วคราว</option>
              </select>
            </td>
          </tr>
          <tr>
            <td>ชื่อ : </td>
            <td>
              <input
                name="Fname"
                onChange={(e) => setfirstName(e.target.value)}
              ></input>
            </td>
          </tr>
          <tr>
            <td>นามสกุล : </td>
            <td>
              <input
                name="Lname"
                onChange={(e) => setlastName(e.target.value)}
              ></input>
            </td>
          </tr>
          <tr>
            <td>วันเกิด : </td>
            <td>
              <input
                name="Brithday"
                type="Date"
                onChange={(e) => setbrithday(e.target.value)}
              ></input>
            </td>
          </tr>

          {typeid == 1 || typeid == 0 ? (
            <tr>
              <td>อัตราเงินเดือน : </td>
              <td>
                <input
                  name="salary"
                  type="Number"
                  onChange={(e) => setsalary(e.target.value)}
                ></input>{" "}
                บาท{" "}
              </td>
            </tr>
          ) : (
            <tr>
              <td>อัตราค่าตอบแทน : </td>
              <td>
                <input
                  name="salaryh"
                  type="Number"
                  onChange={(e) => setcompensation(e.target.value)}
                ></input>{" "}
                ต่อชั่วโมง
              </td>
            </tr>
          )}

          <tr>
            <td></td>
            <td>
              <a href="/EmployeePage2">
                <button name="adddata" onClick={addEmployee}>
                  บันทึกข้อมูล
                </button>
              </a>
            </td>
          </tr>
        </table>
      </form>
    </div>
  );
}
export default EmployeePage1;
