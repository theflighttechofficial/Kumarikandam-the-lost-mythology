import { ComponentType, lazy } from 'react';

const loaders: (() => Promise<unknown>)[] = [];
const pending: Promise<unknown>[] = [];

/**
 * React.lazy for a named export. Every loader is also recorded so the app can
 * prefetch all sections once the first screen is idle, and so in-page anchor
 * links can wait for their target section to exist before scrolling.
 */
export function lazySection<T extends Record<string, unknown>, K extends keyof T>(
  loader: () => Promise<T>,
  name: K,
) {
  let promise: Promise<T> | null = null;
  const load = () => (promise ??= loader());
  loaders.push(load);
  return lazy(() => load().then((m) => ({ default: m[name] as ComponentType<any> })));
}

/** Starts loading every section chunk; resolves when all have settled. */
export function whenSectionsLoaded(): Promise<unknown> {
  if (pending.length === 0) pending.push(...loaders.map((load) => load().catch(() => undefined)));
  return Promise.all(pending);
}
