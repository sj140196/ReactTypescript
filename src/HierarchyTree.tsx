import React from 'react';
import { useSelector } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';

// Define the shape of your state
interface RootState {
  employees: {
    hierarchy: string[];
  };
}

const HierarchyTree: React.FC = () => {
  // Type the useSelector hook with RootState
  const hierarchy = useSelector((state: RootState) => state.employees.hierarchy);

  const renderTree = (levels: string[]) => {
    return (
      <ul>
        {levels.map((level, index) => (
          <li key={index}>
            {level}
            {index < levels.length - 1 && (
              <ul>
                {levels.slice(index + 1).map((subLevel, subIndex) => (
                  <li key={subIndex}>{subLevel}</li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div className="container mt-5">
      <h2>Manager Hierarchy</h2>
      {hierarchy.length ? renderTree(hierarchy) : <p>No hierarchy available</p>}
    </div>
  );
};

export default HierarchyTree;
