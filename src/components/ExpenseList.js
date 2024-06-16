import React, { useEffect, useState } from 'react';
import { getExpenses, deleteExpense } from '../api';
import ExpenseItem from './ExpenseItem';

const ExpenseList = () => {
    const [expenses, setExpenses] = useState([]);

    useEffect(() => {
        const fetchExpenses = async () => {
            const expenses = await getExpenses();
            setExpenses(expenses);
        };
        fetchExpenses();
    }, []);

    const handleDelete = async (id) => {
        const updatedExpenses = await deleteExpense(id);
        setExpenses(updatedExpenses);
    };

    return (
        <div>
            <h2>Expenses</h2>
            <ul>
                {expenses.map((expense) => (
                    <ExpenseItem key={expense.id} expense={expense} onDelete={handleDelete} />
                ))}
            </ul>
        </div>
    );
};

export default ExpenseList;

