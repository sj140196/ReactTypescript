import React, { useState, ChangeEvent, FormEvent } from 'react';
import { useDispatch } from 'react-redux';
import { setHierarchy } from './store/employeeSlice';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const ManagerHierarchyForm: React.FC = () => {
  const [level1, setLevel1] = useState<string>('');
  const [level2, setLevel2] = useState<string>('');
  const [level3, setLevel3] = useState<string>('');
  const [level4, setLevel4] = useState<string>('');
  const [level5, setLevel5] = useState<string>('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const hierarchy = [level1, level2, level3, level4, level5].filter(Boolean) as string[];
    dispatch(setHierarchy(hierarchy));

    navigate('/home/hierarchy-tree');
  };

  const handleLevelChange = (index: number) => (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    switch (index) {
      case 0:
        setLevel1(value);
        break;
      case 1:
        setLevel2(value);
        break;
      case 2:
        setLevel3(value);
        break;
      case 3:
        setLevel4(value);
        break;
      case 4:
        setLevel5(value);
        break;
    }
  };

  return (
    <div className="container mt-5">
      <h2>Manager Hierarchy Form</h2>
      <form onSubmit={handleSubmit}>
        {[level1, level2, level3, level4, level5].map((value, index) => (
          <div className="mb-3" key={index}>
            <label className="form-label">Level {index + 1}</label>
            <input
              type="text"
              className="form-control"
              value={value}
              onChange={handleLevelChange(index)}
            />
          </div>
        ))}
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default ManagerHierarchyForm;
