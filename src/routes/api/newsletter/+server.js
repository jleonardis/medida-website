import { addContact } from "$lib/mail";
import { json } from "@sveltejs/kit"

export async function POST({ request }) {
    const body = await request.json();
    const { email } = body;
    
    try {
        await addContact(email)
        return json({ status: 200, body: { message: "Success" } });
    } catch (error) {
        return json({ status: 500, body: { message: error.message } });
    }
}
