// CM316 landing page. cycle_n=oneshot fix-forward.
// (page.tsx was in additive_paths_extra but file didn't exist on disk;
// v17 _is_additive_edit returned False; auto-fixup skipped because
// existing_content was empty — v18 candidate B18.2.)
import Link from 'next/link';

const KJV_JOHN_3_16 =
  'For God so loved the world, that he gave his only begotten Son, that whosoever believeth in him should not perish, but have everlasting life.';

export default function Home() {
  return (
    <main
      style={{
        minHeight: '100vh',
        backgroundColor: '#1a1f2e',
        color: '#e8e5d8',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem',
        fontFamily: 'sans-serif',
      }}
    >
      <h1
        style={{
          fontFamily: 'serif',
          fontSize: '4rem',
          color: '#a87c4a',
          marginBottom: '0.5rem',
          letterSpacing: '0.05em',
        }}
      >
        CM316
      </h1>
      <p style={{ marginBottom: '2rem', opacity: 0.85 }}>
        Chess Master 3:16 — for chess players 600-1600 ELO who want to improve.
      </p>
      <Link
        href="/game/solo"
        style={{
          backgroundColor: '#a87c4a',
          color: '#1a1f2e',
          padding: '0.75rem 1.5rem',
          textDecoration: 'none',
          fontWeight: 'bold',
          borderRadius: '0.25rem',
        }}
      >
        Play Solo
      </Link>
      <footer
        style={{
          marginTop: 'auto',
          paddingTop: '4rem',
          fontFamily: 'serif',
          fontSize: '0.85rem',
          opacity: 0.7,
          maxWidth: '40rem',
          textAlign: 'center',
        }}
      >
        {KJV_JOHN_3_16}
      </footer>
    </main>
  );
}
