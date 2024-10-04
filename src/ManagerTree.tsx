import React, { useEffect, useState } from 'react';
import { ref, onValue } from 'firebase/database';
import { database } from './firebase';
import './styles/ManagerTree.css';

interface Manager {
  name: string;
  level: number;
}

interface Tree {
  [key: number]: string[];
}

const ManagerTree: React.FC = () => {
  const [hierarchy, setHierarchy] = useState<Manager[]>([]);

  useEffect(() => {
    // Fetch the manager data from Firebase
    const managersRef = ref(database, 'managers');
    onValue(managersRef, (snapshot) => {
      const data = snapshot.val();
      const managersArray: Manager[] = data ? Object.values(data) : [];
      setHierarchy(managersArray);
    });
  }, []);

  const buildTree = (managers: Manager[]): Tree => {
    if (!managers.length) return {};

    const tree: Tree = {};
    managers.forEach(({ name, level }) => {
      if (!tree[level])
        {
            tree[level] = [];

        } 
      tree[level].push(name);
    });

    return tree;
  };

  const tree = buildTree(hierarchy);

  return (
    <div
      style={{
        padding: '20px',
        backgroundColor: '#f9f9f9',
        borderRadius: '10px',
        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
        maxWidth: '600px',
        margin: '30px auto',
      }}
    >
      {Object.keys(tree).map(level => (
        <div
          key={level}
          className="tree-level"
          style={{
            marginBottom: '20px',
            padding: '10px',
            backgroundColor: '#ffffff',
            borderRadius: '8px',
            border: '1px solid #ddd',
          }}
        >
          <h3
            style={{
              color: '#333',
              marginBottom: '10px',
              textAlign: 'center',
              textTransform: 'uppercase',
              fontWeight: 'bold',
              fontSize: '18px',
            }}
          >
            Level {level}
          </h3>
          <ul
            style={{
              listStyleType: 'none',
              padding: '0',
              display: 'flex',
              justifyContent: 'center',
              flexWrap: 'wrap',
            }}
          >
            {tree[Number(level)].map((name, index) => (
              <li
                key={index}
                style={{
                  margin: '5px 15px',
                  padding: '10px 20px',
                  backgroundColor: '#007bff',
                  color: '#ffffff',
                  borderRadius: '5px',
                  boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
                  fontWeight: '500',
                  fontSize: '16px',
                }}
              >
                {name}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default ManagerTree;
