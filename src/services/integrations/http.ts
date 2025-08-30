export async function fetchWithRetry(url: string, init: RequestInit = {}, opts: { retries?: number; backoffMs?: number } = {}) {
  const retries = opts.retries ?? 3;
  const backoffMs = opts.backoffMs ?? 500;
  let attempt = 0;
  // eslint-disable-next-line no-constant-condition
  while (true) {
    try {
      const res = await fetch(url, init);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      return res;
    } catch (e) {
      attempt++;
      if (attempt > retries) throw e;
      const delay = backoffMs * Math.pow(2, attempt - 1);
      await new Promise(r => setTimeout(r, delay));
    }
  }
}



