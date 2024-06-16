// src/api.js
import axios from 'axios';

const API_URL = 'http://localhost:3001';

export const getBudget = async () => {
    const response = await axios.get(`${API_URL}/budget`);
    return response.data.budget;
};

export const updateBudget = async (budget) => {
    const response = await axios.post(`${API_URL}/budget`, { budget });
    return response.data.budget;
};

export const getExpenses = async () => {
    const response = await axios.get(`${API_URL}/expenses`);
    return response.data;
};

export const addExpense = async (expense) => {
    const response = await axios.post(`${API_URL}/expenses`, expense);
    return response.data;
};

export const deleteExpense = async (id) => {
    const response = await axios.delete(`${API_URL}/expenses/${id}`);
    return response.data;
};
