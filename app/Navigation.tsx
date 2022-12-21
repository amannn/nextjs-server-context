import Link from 'next/link';

export default function Navigation() {
  return (
    <div style={{display: 'flex', gap: 20}}>
      <Link href="/">Home</Link>
      <Link href="/nested">Nested</Link>
      <Link href="/sibling">Sibling</Link>
    </div>
  );
}
