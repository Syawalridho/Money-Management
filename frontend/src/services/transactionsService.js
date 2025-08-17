const BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3001/api';

export async function createTransaction(payload) {
  const res = await fetch(`${BASE_URL}/transactions`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });
  if (!res.ok) throw new Error(await res.text());
  return res.json();
}

export async function listTransactions() {
  const res = await fetch(`${BASE_URL}/transactions`);
  if (!res.ok) throw new Error(await res.text());
  return res.json();
}

export async function deleteTransaction(id) {
  const res = await fetch(`${BASE_URL}/transactions/${id}`, {
    method: "DELETE",
  });
  if (!res.ok && res.status !== 204) throw new Error(await res.text());
  return true;
}
