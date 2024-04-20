import 'dotenv/config';
import { get } from 'env-var';

export const envs = {
    API_KEY: get('API_KEY').required().asString(),
    AUTH_DOMAIN: get('AUTH_DOMAIN').required().asString(),
    PROJECT_ID: get('PROJECT_ID').required().asString(),
    STORAGE_BUCKET: get('STORAGE_BUCKET').required().asString(),
    MESSAGING_SENDER_ID: get('MESSAGING_SENDER_ID').required().asString(),
    APP_ID: get('APP_ID').required().asString(),
};