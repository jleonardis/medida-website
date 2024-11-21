import { addContact } from "$lib/mail";
import { json } from "@sveltejs/kit"

export async function POST({ request }) {
    const body = await request.json();
    const { email } = body;
    
    try {
        await addContact(email);
        const msg = {
            to: 'jake@medida.io',
            from: 'jake@medida.io',
            subject: 'Medida website newsletter signup',
            html: `
            <p>
              <strong>Email:</strong> ${email}
            </p>
            `
          };
          await sendEmail(msg);
        return json({ status: 200, body: { message: "Success" } });
    } catch (error) {
        return json({ status: 500, body: { message: error.message } });
    }
}
