import { createDirectus, rest, readItems } from '@directus/sdk';

const url = import.meta.env.DIRECTUS_URL;

if (!url) {
    console.warn('⚠️ DIRECTUS_URL não está definida nas variáveis de ambiente!');
}

export const DIRECTUS_URL = url || 'http://localhost:8055';

export const directus = createDirectus(DIRECTUS_URL).with(rest());

export { readItems };

