// src/components/Status.tsx

import React from 'react';
import { useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

// Define the type for the state
interface StatusState {
  requestType?: string;
  immediateManager?: string;
  reason?: string;
}

const Status: React.FC = () => {
  const location = useLocation();
  
  // Use a type assertion to tell TypeScript about the state type
  const { requestType, immediateManager, reason } = location.state as StatusState;

  return (
    <div className="container mt-5">
      <h2>Status</h2>
      <div className="alert alert-info" role="alert">
        Your request has been <strong>accepted</strong>, <strong>rejected</strong>, or <strong>held</strong> by your immediate manager.
      </div>
      <div className="mt-3">
        <ul>
          <li><strong>Request Type:</strong> {requestType}</li>
          <li><strong>Immediate Manager:</strong> {immediateManager}</li>
          <li><strong>Reason:</strong> {reason}</li>
        </ul>
        <p>Please check back later for updates.</p>
      </div>
    </div>
  );
};

export default Status;
