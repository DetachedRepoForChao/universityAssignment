export type OpenDataUniversity = {
  unitid: string | number;
  instnm: string;
  country?: string;
  state?: string;
  city?: string;
  adm_rate?: number;
  tuition_in?: number;
  tuition_out?: number;
  app_fee?: number;
  deadlines?: Record<string, unknown>;
};

export async function fetchOpenDataUniversities({ apiKey, page }: { apiKey: string; page?: number }) {
  // Example real call with retries
  // const url = new URL("https://opendata.example.org/universities");
  // if (page) url.searchParams.set("page", String(page));
  // const res = await fetchWithRetry(url.toString(), { headers: { "x-api-key": apiKey } }, { retries: 3 });
  // const json = await res.json();
  // return { data: json.items as OpenDataUniversity[], nextPage: json.nextPage as number | undefined };
  const data: OpenDataUniversity[] = [];
  return { data, nextPage: undefined as number | undefined };
}

export function normalizeOpenData(u: OpenDataUniversity) {
  return {
    externalId: String(u.unitid),
    name: u.instnm,
    country: u.country ?? null,
    state: u.state ?? null,
    city: u.city ?? null,
    acceptanceRate: u.adm_rate ?? null,
    tuitionInState: u.tuition_in ?? null,
    tuitionOutState: u.tuition_out ?? null,
    applicationFee: u.app_fee ?? null,
    deadlines: u.deadlines ?? null,
    raw: u,
  };
}


