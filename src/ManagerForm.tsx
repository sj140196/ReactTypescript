import React, { useState, ChangeEvent, FormEvent } from 'react';
import { ref, push } from 'firebase/database';
import { database } from './firebase';

const ManagerForm: React.FC = () => {
    const [name, setName] = useState<string>('');
    const [level, setLevel] = useState<string>('');

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // Save the manager data to Firebase
        const managersRef = ref(database, 'managers');
        push(managersRef, { name, level: parseInt(level, 10) });

        setName('');
        setLevel('');
    };

    const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    };

    const handleLevelChange = (e: ChangeEvent<HTMLInputElement>) => {
        setLevel(e.target.value);
    };

    return (
        <form 
            onSubmit={handleSubmit}
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                padding: '20px',
                backgroundColor: '#f4f4f4',
                borderRadius: '10px',
                boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
                maxWidth: '400px',
                margin: '20px auto'
            }}
        >
            <h2 style={{ marginBottom: '20px', color: '#333' }}>Add Manager</h2>
            <input
                type="text"
                placeholder="Manager Name"
                value={name}
                onChange={handleNameChange}
                required
                style={{
                    width: '100%',
                    padding: '10px',
                    marginBottom: '15px',
                    borderRadius: '5px',
                    border: '1px solid #ccc',
                    fontSize: '16px'
                }}
            />
            <input
                type="number"
                placeholder="Level"
                value={level}
                onChange={handleLevelChange}
                required
                style={{
                    width: '100%',
                    padding: '10px',
                    marginBottom: '15px',
                    borderRadius: '5px',
                    border: '1px solid #ccc',
                    fontSize: '16px'
                }}
            />
            <button
                type="submit"
                style={{
                    padding: '10px 20px',
                    backgroundColor: '#007bff',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer',
                    fontSize: '16px',
                    transition: 'background-color 0.3s ease',
                }}
                onMouseOver={(e) => (e.target as HTMLButtonElement).style.backgroundColor = '#0056b3'}
                onMouseOut={(e) => (e.target as HTMLButtonElement).style.backgroundColor = '#007bff'}
            >
                Add Manager
            </button>
        </form>
    );
};

export default ManagerForm;
