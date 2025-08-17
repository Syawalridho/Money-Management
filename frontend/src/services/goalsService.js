import { api } from './apiClient';

// Ambil semua goals
export const listGoals = () => api('/goals');

// Buat goal baru
export const createGoal = (payload) =>
  api('/goals', {
    method: 'POST',
    body: JSON.stringify(payload),
  });

// Update goal
export const updateGoal = (id, payload) =>
  api(`/goals/${id}`, {
    method: 'PATCH',
    body: JSON.stringify(payload),
  });

// Hapus goal
export const deleteGoal = (id) =>
  api(`/goals/${id}`, { method: 'DELETE' });
