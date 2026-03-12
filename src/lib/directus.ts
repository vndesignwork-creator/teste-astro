import { createDirectus, rest, readItems } from '@directus/sdk';

export const DIRECTUS_URL = import.meta.env.DIRECTUS_URL || 'http://localhost:8055';

export const directus = createDirectus(DIRECTUS_URL).with(rest());

export { readItems };
