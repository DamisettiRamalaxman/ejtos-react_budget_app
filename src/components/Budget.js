import React, { useEffect, useState } from 'react';
import { AppContext } from '../context/AppContext';
import { getBudget, updateBudget } from '../api';

const Budget = () => {
    const [budget, setBudget] = useState(0);
    const [newBudget, setNewBudget] = useState('');

    useEffect(() => {
        const fetchBudget = async () => {
            const budget = await getBudget();
            setBudget(budget);
        };
        fetchBudget();
    }, []);

    const handleBudgetChange = async () => {
        const updatedBudget = await updateBudget(Number(newBudget));
        setBudget(updatedBudget);
        setNewBudget('');
    };

    return (
        <div>
            <h1>Budget: ${budget}</h1>
            <input
                type="number"
                value={newBudget}
                onChange={(e) => setNewBudget(e.target.value)}
                placeholder="Enter new budget"
            />
            <button onClick={handleBudgetChange}>Update Budget</button>
        </div>
    );
};

export default Budget;
