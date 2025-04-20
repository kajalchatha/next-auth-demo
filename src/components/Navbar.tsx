'use client';

import Link from 'next/link';
import { useAuth } from '../context/AuthContext';

export default function Navbar() {
  const { user, logout } = useAuth();

  return (
    <nav style={{ padding: '1rem', background: '#222', color: '#fff', display: 'flex', gap: '1rem' }}>
      <Link href="/">Home</Link>
      {!user ? (
        <Link href="/login">Login</Link>
      ) : (
        <>
          <Link href="/dashboard">Dashboard</Link>
          <button onClick={logout} style={{ background: 'transparent', color: '#fff', border: 'none', cursor: 'pointer' }}>
            Log Out
          </button>
        </>
      )}
    </nav>
  );
}
