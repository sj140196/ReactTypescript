import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/Home.css';  // Ensure the path is correct
import EmployeeForm from './EmployeeForm';
import EmployeeList from './EmployeeList';
import EmployeeDetails from './EmployeeDetails';
// import IRequest from './IRequest';
import Status from './Status';
import ManagerHierarchyForm from './ManagerHierarchyForm';
import HierarchyTree from './HierarchyTree';
import ManagerForm from './ManagerForm';
import ManagerTree from './ManagerTree';

const Home: React.FC = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <nav className="col-md-2 d-none d-md-block bg-light sidebar">
          <div className="sidebar-sticky">
            <ul className="nav flex-column">
              <h1>ZINNIA</h1>
              <li className="nav-item">
                <Link className="nav-link" to="employee-form">
                  Employee Form
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="employee-list">
                  Employee List
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="employee-details">
                  Employee Details
                </Link>
              </li>
              
              <li className="nav-item">
                <Link className="nav-link" to="manager-hierarchy-form">
                  Add Manager Hierarchy
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="hierarchy-tree">
                  View Manager Hierarchy
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="manager-form">
                  ManagerForm
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="manager-tree">
                  ManagerTree
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">
          <Routes>
            <Route path="employee-form" element={<EmployeeForm />} />
            <Route path="employee-list" element={<EmployeeList />} />
            <Route path="employee-details/:employeeId" element={<EmployeeDetails />} />
            {/* <Route path="request" element={<IRequest />} /> */}
            <Route path="status" element={<Status />} />
            <Route path="manager-hierarchy-form" element={<ManagerHierarchyForm />} />
            <Route path="hierarchy-tree" element={<HierarchyTree />} />
            <Route path="manager-form" element={<ManagerForm />} />
            <Route path="manager-tree" element={<ManagerTree />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default Home;
