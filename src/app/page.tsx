'use client';
import Link from 'next/link';

export default function HomePage() {
  return (
    <main style={{ padding: '2rem', textAlign: 'center' }}>
      <h1>🛡️ Cybersecurity Facts You Should Know</h1>
      <p>Every click counts. Stay sharp, stay secure.</p>
      <ul style={{ listStyle: 'none', padding: 0, fontSize: '1.2rem' }}>
        <li>🔐 The average password is hacked in under 7 seconds if it&apos;s under 8 characters.</li>
        <li>💸 In 2023, phishing attacks caused over $10B in losses globally.</li>
        <li>👻 90% of successful hacks begin with a human mistake — not tech failure.</li>
        <li>📱 Your phone number is often the easiest way to get hacked.</li>
      </ul>

      <div style={{ marginTop: '2rem' }}>
        <Link href="/login">
          <button style={{ marginRight: '1rem' }}>Login</button>
        </Link>
        <Link href="/dashboard">
          <button>Go to Dashboard</button>
        </Link>
      </div>
    </main>
  );
}


