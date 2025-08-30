export type CommonAppUniversity = {
  id: string | number;
  name: string;
  location?: { country?: string; state?: string; city?: string };
  admission?: { rate?: number };
  tuition?: { inState?: number; outState?: number };
  application?: { fee?: number };
  deadlines?: Record<string, unknown>;
};

export async function fetchCommonAppUniversities({ accessToken }: { accessToken: string }) {
  // Example real call with retries
  // const url = new URL("https://api.commonapp.org/v1/universities");
  // const res = await fetchWithRetry(url.toString(), { headers: { Authorization: `Bearer ${accessToken}` } }, { retries: 3 });
  // const json = await res.json();
  // return { data: json.data as CommonAppUniversity[] };
  const data: CommonAppUniversity[] = [];
  return { data };
}

export function normalizeCommonApp(u: CommonAppUniversity) {
  return {
    externalId: String(u.id),
    name: u.name,
    country: u.location?.country ?? null,
    state: u.location?.state ?? null,
    city: u.location?.city ?? null,
    acceptanceRate: u.admission?.rate ?? null,
    tuitionInState: u.tuition?.inState ?? null,
    tuitionOutState: u.tuition?.outState ?? null,
    applicationFee: u.application?.fee ?? null,
    deadlines: u.deadlines ?? null,
    raw: u,
  };
}


