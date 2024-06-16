import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
import { addExpense } from '../api';

const AllocationForm = ({ onExpenseAdded }) => {
    const [name, setName] = useState('');
    const [cost, setCost] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newExpense = { name, cost: Number(cost) };
        const updatedExpenses = await addExpense(newExpense);
        onExpenseAdded(updatedExpenses);
        setName('');
        setCost('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Expense Name:</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div>
                <label>Cost:</label>
                <input type="number" value={cost} onChange={(e) => setCost(e.target.value)} />
            </div>
            <button type="submit">Add Expense</button>
        </form>
    );
};

export default AllocationForm;
