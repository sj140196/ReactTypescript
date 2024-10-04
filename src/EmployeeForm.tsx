import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addEmployee } from './store/employeeSlice';
import 'bootstrap/dist/css/bootstrap.min.css';
import { database } from './firebase'; // Ensure you have this setup correctly
import { ref, set } from 'firebase/database';

// Define the type for the employee object
interface Employee {
  employeeId: string;
  employeeName: string;
  mobileNo: string;
  email: string;
  address: string;
  bloodGroup: string;
  gender: string;
  immediateManager: string;
}

const EmployeeForm: React.FC = () => {
  const [employeeName, setEmployeeName] = useState<string>('');
  const [employeeId, setEmployeeId] = useState<string>('');
  const [mobileNo, setMobileNo] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [address, setAddress] = useState<string>('');
  const [bloodGroup, setBloodGroup] = useState<string>('');
  const [gender, setGender] = useState<string>('');
  const [immediateManager, setImmediateManager] = useState<string>('');

  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const employee: Employee = {
      employeeId,
      employeeName,
      mobileNo,
      email,
      address,
      bloodGroup,
      gender,
      immediateManager,
    };

    // Dispatch action to add employee to Redux store
    // dispatch(addEmployee(employee));

    // Save data to Firebase
    set(ref(database, 'employees/' + employeeId), employee)
      .then(() => {
        alert('Employee added successfully!');
      })
      .catch((error) => {
        console.error('Error writing to Firebase Database:', error);
      });

    // Clear the form
    setEmployeeName('');
    setEmployeeId('');
    setMobileNo('');
    setEmail('');
    setAddress('');
    setBloodGroup('');
    setGender('');
    setImmediateManager('');
  };

  return (
    <div className="container">
      <h2 className="text-center mt-5">Add Employee</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="employeeName">Employee Name</label>
          <input
            type="text"
            className="form-control"
            id="employeeName"
            value={employeeName}
            onChange={(e) => setEmployeeName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="employeeId">Employee ID</label>
          <input
            type="text"
            className="form-control"
            id="employeeId"
            value={employeeId}
            onChange={(e) => setEmployeeId(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="mobileNo">Mobile No</label>
          <input
            type="text"
            className="form-control"
            id="mobileNo"
            value={mobileNo}
            onChange={(e) => setMobileNo(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            className="form-control"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="address">Address</label>
          <textarea
            className="form-control"
            id="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="bloodGroup">Blood Group</label>
          <input
            type="text"
            className="form-control"
            id="bloodGroup"
            value={bloodGroup}
            onChange={(e) => setBloodGroup(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="gender">Gender</label>
          <select
            className="form-control"
            id="gender"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="immediateManager">Immediate Manager</label>
          <input
            type="text"
            className="form-control"
            id="immediateManager"
            value={immediateManager}
            onChange={(e) => setImmediateManager(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary btn-block mt-3">
          Add Employee
        </button>
      </form>
    </div>
  );
};

export default EmployeeForm;
