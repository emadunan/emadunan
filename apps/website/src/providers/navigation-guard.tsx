'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

type Props = {
  shouldBlock: boolean;
  children: React.ReactNode;
};

export default function NavigationGuard({ shouldBlock, children }: Props) {
  const router = useRouter();
  const [nextUrl, setNextUrl] = useState<string | null>(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const anchor = (e.target as HTMLElement)?.closest('a');
      if (!anchor || !shouldBlock) return;

      const href = anchor.getAttribute('href');
      if (!href || href.startsWith('http') || href.startsWith('#') || href === window.location.pathname) return;

      e.preventDefault();
      setNextUrl(href);
      setShowModal(true);
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, [shouldBlock]);

  const proceed = () => {
    if (nextUrl) {
      router.push(nextUrl);
    }
  };

  return (
    <>
      {children}
      {showModal && (
        <div style={modalOverlay}>
          <div style={modalBox}>
            <p>Speech is still processing. Are you sure you want to leave this page?</p>
            <div style={buttonRow}>
              <button onClick={() => setShowModal(false)}>Cancel</button>
              <button
                onClick={() => {
                  setShowModal(false);
                  proceed();
                }}
              >
                Continue
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

const modalOverlay: React.CSSProperties = {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100vw',
  height: '100vh',
  backgroundColor: 'rgba(0,0,0,0.5)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 1000,
};

const modalBox: React.CSSProperties = {
  backgroundColor: '#fff',
  padding: '1rem',
  borderRadius: '8px',
  width: '90%',
  maxWidth: '400px',
};

const buttonRow: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'flex-end',
  marginTop: '1rem',
  gap: '0.5rem',
};
