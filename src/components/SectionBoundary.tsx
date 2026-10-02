import { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  error: Error | null;
}

/**
 * Keeps one failing section from blanking the whole page. Covers render errors
 * and failed chunk downloads (for example after going offline mid-visit).
 */
export class SectionBoundary extends Component<Props, State> {
  declare props: Props;
  state: State = { error: null };

  static getDerivedStateFromError(error: Error): State {
    return { error };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error('Section failed to render', error, info.componentStack);
  }

  render() {
    if (!this.state.error) return this.props.children;
    const offline = typeof navigator !== 'undefined' && !navigator.onLine;
    return (
      <div role="alert" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="border border-[color:var(--bd-8B5E4A)]/60 rounded p-6 max-w-2xl">
          <p className="font-heading text-[color:var(--fg-E6D7B9)] text-lg">This section couldn&rsquo;t load.</p>
          <p className="mt-2 font-serif text-base text-[color:var(--fg-CDBB96)]">
            {offline
              ? 'You appear to be offline. Reconnect, then reload the page.'
              : 'Something went wrong while loading it. Reloading the page usually fixes this.'}
          </p>
          <button
            onClick={() => window.location.reload()}
            className="mt-4 inline-flex min-h-11 items-center px-5 rounded bg-[color:var(--bg-9A7B45)] hover:bg-[color:var(--bg-8B5E4A)] text-[color:var(--fg-14100D)] font-heading font-bold text-sm tracking-[0.1em] uppercase"
          >
            Reload page
          </button>
        </div>
      </div>
    );
  }
}
