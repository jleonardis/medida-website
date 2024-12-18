import sgClient from '@sendgrid/client';
import sgMail from '@sendgrid/mail';
import { SENDGRID_API_KEY } from '$env/static/private';

sgClient.setApiKey(SENDGRID_API_KEY);
sgMail.setApiKey(SENDGRID_API_KEY);

export async function addContact(email) {
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

export async function sendEmail(msg) {
    try {
        await sgMail.send(msg).catch(console.log);
        return { success: true };
    } catch (error) {
        return { success: false, error: error.message };
    }
}
