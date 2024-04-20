import { from } from 'env-var';
const { get } = from({
    API_KEY: import.meta.env.VITE_API_KEY,
    AUTH_DOMAIN: import.meta.env.VITE_AUTH_DOMAIN,
    PROJECT_ID: import.meta.env.VITE_PROJECT_ID,
    STORAGE_BUCKET: import.meta.env.VITE_STORAGE_BUCKET,
    MESSAGING_SENDER_ID: import.meta.env.VITE_MESSAGING_SENDER_ID,
    APP_ID: import.meta.env.VITE_APP_ID,
});

export const envs = {
    API_KEY: get('API_KEY').required().asString(),
    AUTH_DOMAIN: get('AUTH_DOMAIN').required().asString(),
    PROJECT_ID: get('PROJECT_ID').required().asString(),
    STORAGE_BUCKET: get('STORAGE_BUCKET').required().asString(),
    MESSAGING_SENDER_ID: get('MESSAGING_SENDER_ID').required().asInt(),
    APP_ID: get('APP_ID').required().asString(),
};

