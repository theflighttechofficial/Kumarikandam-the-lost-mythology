import { useEffect, useState } from 'react';

/** Announces loss and return of connectivity. Sections already loaded keep working offline. */
export function NetworkStatus() {
  const [online, setOnline] = useState(() => (typeof navigator === 'undefined' ? true : navigator.onLine));
  const [showBack, setShowBack] = useState(false);

  useEffect(() => {
    let timer = 0;
    const goOffline = () => {
      window.clearTimeout(timer);
      setShowBack(false);
      setOnline(false);
    };
    const goOnline = () => {
      setOnline(true);
      setShowBack(true);
      timer = window.setTimeout(() => setShowBack(false), 4000);
    };
    window.addEventListener('offline', goOffline);
    window.addEventListener('online', goOnline);
    return () => {
      window.clearTimeout(timer);
      window.removeEventListener('offline', goOffline);
      window.removeEventListener('online', goOnline);
    };
  }, []);

  if (online && !showBack) return null;
  return (
    <div
      role="status"
      aria-live="polite"
      className="fixed inset-x-0 bottom-0 z-[90] px-4 pb-[max(1rem,env(safe-area-inset-bottom))] pointer-events-none"
    >
      <p
        className={`mx-auto max-w-md rounded border px-4 py-3 font-serif text-base text-center pointer-events-auto ${
          online ? 'bg-[color:var(--bg-1E2A24)] border-[color:var(--bd-53665C)] text-[color:var(--fg-E6D7B9)]' : 'bg-[color:var(--bg-2B1A14)] border-[color:var(--bd-8B5E4A)] text-[color:var(--fg-E6D7B9)]'
        }`}
      >
        {online
          ? 'Back online.'
          : 'You’re offline. Sections you’ve already opened still work; your notes are saved on this device.'}
      </p>
    </div>
  );
}
