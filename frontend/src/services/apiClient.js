const BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3001/api';

export async function api(path, opts = {}) {
  const res = await fetch(`${BASE_URL}${path}`, {
    headers: { 'Content-Type': 'application/json', ...(opts.headers || {}) },
    credentials: 'include',
    ...opts,
  });
  if (!res.ok) throw new Error(await res.text().catch(() => res.statusText));
  return res.status === 204 ? null : res.json();
}
