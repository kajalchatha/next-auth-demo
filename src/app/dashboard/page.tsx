'use client';

import { useAuth } from '../../context/AuthContext';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function DashboardPage() {
  const { user, logout } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push('/login');
    }
  }, [user, router]); // ✅ now includes router
  

  if (!user) return null;

  return (
    <main style={{ maxWidth: 600, margin: '0 auto', padding: '2rem' }}>
      <h1>Welcome, {user} 🎉</h1>
      <p>This is your protected dashboard page.</p>
      <button onClick={logout} style={{ marginTop: '1rem' }}>
        Log Out
      </button>
    </main>
  );
}
