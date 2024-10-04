import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { database } from './firebase'; // Ensure you have this setup correctly
import { ref, onValue } from 'firebase/database';

// Define the type for an employee object
interface Employee {
  employeeId: string;
  employeeName: string;
}

const EmployeeList: React.FC = () => {
  const navigate = useNavigate();
  const [employees, setEmployees] = useState<Employee[]>([]);

  useEffect(() => {
    const employeesRef = ref(database, 'employees');
    onValue(employeesRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const employeeList: Employee[] = Object.keys(data).map((key) => ({
          employeeId: key,
          employeeName: data[key].employeeName,
        }));
        setEmployees(employeeList);
      } else {
        setEmployees([]);
      }
    });
  }, []);

  const handleRowClick = (employeeId: string) => {
    console.log('Navigating to details of employee ID:', employeeId); // Debugging
    navigate(`/home/employee-details/${employeeId}`);
  };

  return (
    <div className="container">
      <h2 className="text-center mt-5">Employee List</h2>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Employee Name</th>
            <th>Employee ID</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr
              key={employee.employeeId}
              onClick={() => handleRowClick(employee.employeeId)}
              style={{ cursor: 'pointer' }}
            >
              <td>{employee.employeeName}</td>
              <td>{employee.employeeId}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeList;
