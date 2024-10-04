import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { database } from './firebase';
import { ref, get } from 'firebase/database';
import { Button } from '../node_modules/bloom-main/src/components/button';

const Authentication: React.FC = () => {
  const [employeeId, setEmployeeId] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const navigate = useNavigate();

  const fetchUserData = async (userId: string) => {
    const userRef = ref(database, 'users/' + userId);
    const snapshot = await get(userRef);
    if (snapshot.exists()) {
      return snapshot.val();
    } else {
      return null;
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const userData = await fetchUserData(employeeId);
    if (userData && userData.password === password) {
      alert('Login successful');
      navigate('/home'); // Redirect to home page after successful login
    } else {
      alert('Invalid employee ID or password');
    }
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card mt-5">
            <div className="card-body">
              <h2 className="card-title text-center">Login</h2>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="employeeId" className="form-label">Employee ID</label>
                  <input
                    type="text"
                    className="form-control"
                    id="employeeId"
                    placeholder="Enter Employee ID"
                    value={employeeId}
                    onChange={(e) => setEmployeeId(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder="Enter Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                {/* <button type="submit" className="btn btn-primary w-100 mt-3">
                  Login
                </button> */}
                <Button aria-label="click me" mode="primary">Click me</Button>
              </form>
              <div className="text-center mt-3">
                <Link to="/signup">New user? Signup here</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Authentication;
