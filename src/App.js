import React from 'react';
import './App.css';
import { Route , Switch} from 'react-router-dom';
import { BrowserRouter as Router } from "react-router-dom";
import EmployeePage1 from './components/EmployeePage1';
import EmployeePage2 from './components/EmployeePage2';
import EmployeePage3 from './components/EmployeePage3';
import EmployeePage4 from './components/EmployeePage4';

function App() {
  return (
    <Router>
       <Switch>
      <Route exact path="/" ><EmployeePage1/></Route>
      <Route exact path="/EmployeePage1" ><EmployeePage1/></Route>
      <Route exact path="/EmployeePage2" ><EmployeePage2/></Route>
      <Route exact path="/EmployeePage3" ><EmployeePage3/></Route>
      <Route exact path="/EmployeePage4" ><EmployeePage4/></Route>
      
      </Switch>
   </Router>
  );
}

export default App;
