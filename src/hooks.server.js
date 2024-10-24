import { locale } from 'svelte-i18n';

export async function handle({event, resolve}) {
    const lang = event.request.headers.get('accept-language')?.split(',')[0]?.split('-')[0];
    console.log('lang', lang);
    if (lang) {
        locale.set(lang);
    } else {
        locale.set('es');
    }
    return resolve(event);
}