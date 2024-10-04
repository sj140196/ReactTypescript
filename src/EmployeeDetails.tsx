import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { database } from './firebase';
import { ref, onValue } from 'firebase/database';

// Define the type for employee details
interface EmployeeDetailsType {
  employeeName: string;
  employeeId: string;
  mobileNo: string;
  email: string;
  address: string;
  bloodGroup: string;
  gender: string;
  immediateManager: string;
}

const EmployeeDetails: React.FC = () => {
  const { employeeId } = useParams<{ employeeId: string }>();
  const [employeeDetails, setEmployeeDetails] = useState<EmployeeDetailsType | null>(null);

  useEffect(() => {
    console.log('Fetching details for employee ID:', employeeId); // Debugging
    if (employeeId) {
      const employeeRef = ref(database, 'employees/' + employeeId);
      onValue(employeeRef, (snapshot) => {
        if (snapshot.exists()) {
          console.log('Employee data found:', snapshot.val()); // Debugging
          setEmployeeDetails(snapshot.val());
        } else {
          console.error('No data available for the selected employee');
          setEmployeeDetails(null);
        }
      });
    }
  }, [employeeId]);

  if (!employeeDetails) {
    return <div className="container"><h2 className="text-center mt-5">No Employee Selected</h2></div>;
  }

  return (
    <div className="container">
      <h2 className="text-center mt-5">Employee Details</h2>
      <dl className="row">
        <dt className="col-sm-3">Employee Name</dt>
        <dd className="col-sm-9">{employeeDetails.employeeName}</dd>
        <dt className="col-sm-3">Employee ID</dt>
        <dd className="col-sm-9">{employeeDetails.employeeId}</dd>
        <dt className="col-sm-3">Mobile No</dt>
        <dd className="col-sm-9">{employeeDetails.mobileNo}</dd>
        <dt className="col-sm-3">Email</dt>
        <dd className="col-sm-9">{employeeDetails.email}</dd>
        <dt className="col-sm-3">Address</dt>
        <dd className="col-sm-9">{employeeDetails.address}</dd>
        <dt className="col-sm-3">Blood Group</dt>
        <dd className="col-sm-9">{employeeDetails.bloodGroup}</dd>
        <dt className="col-sm-3">Gender</dt>
        <dd className="col-sm-9">{employeeDetails.gender}</dd>
        <dt className="col-sm-3">Immediate Manager</dt>
        <dd className="col-sm-9">{employeeDetails.immediateManager}</dd>
      </dl>
    </div>
  );
};

export default EmployeeDetails;
