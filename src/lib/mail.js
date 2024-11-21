import sgClient from '@sendgrid/client';
import { SENDGRID_API_KEY } from '$env/static/private';

sgClient.setApiKey(SENDGRID_API_KEY);

export async function addContact(email) {
    console.log(email);
    const request = {
        body: {
            list_ids: ['71add3c0-ca67-4db9-9cdb-85fcbf3ad5b4'],
            contacts: [{ email }],
        },
        method: 'PUT',
        url: '/v3/marketing/contacts',
    };
    return sgClient.request(request);
    }
    