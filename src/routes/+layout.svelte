<script>
	import '../app.css';
	import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
	import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
	import { faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons';
	import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';
	// src/lib/i18n/index.ts
	import { browser } from '$app/environment';
	import { init, register, locale, _ } from 'svelte-i18n';
	import { scheduleLink } from '$lib/links';


	const defaultLocale = 'es'

	register('en', () => import('../lang/en.json'))
	register('es', () => import('../lang/es.json'))

	init({
		fallbackLocale: defaultLocale,
		initialLocale: browser ? window.navigator.language?.split('-')?.[0] : defaultLocale,
	});

	function changeLanguage(lang) {
		locale.set(lang);
	}
	
	let { children } = $props();

	const contactEmail = 'contact@medida.io';
	const whatsappNumber = '1234567890';
</script>

<!-- Navbar -->
<nav class="flex items-center justify-between px-10 py-4">
	<div><a href="/"><img class="h-14 mt-2" src="/images/logo.png" /></a></div>
	<div class="flex flex-col">
		<div class="flex text-right ml-auto mb-1 items-center space-x-2">
			{#if $locale === 'es'}
				<span on:click={() => changeLanguage('en')} class="text-gray-700 hover:text-primary-blue text-xs">English</span>
			{:else}
				<span on:click={() => changeLanguage('es')} class="text-gray-700 hover:text-primary-blue text-xs">Español</span>
			{/if}
		</div>
		<div class="flex items-center space-x-4 my-4">
			<ul class="flex space-x-8 text-xl mx-2 text-gray-700">
				<li><a href="/how-we-work" class="hover:text-primary-blue">{$_('how_we_work')}</a></li>
				<li><a href="/vision" class="hover:text-primary-blue mr-10">{$_('our_vision')}</a></li>
			<li>
				<a href="mailto:example@example.com">
					<FontAwesomeIcon icon={faEnvelope} class="text-2xl text-gray-700" />
				</a>
			</li>
			<li>
				<a href="https://wa.me/1234567890" class="mr-10">
					<FontAwesomeIcon icon={faWhatsapp} class="text-2xl text-green-500" />
				</a>
			</li>
			</ul>
			<a href="{scheduleLink}" class="px-6 py-2 bg-primary-blue text-white rounded-lg hover:bg-primary-orange">Book a free consultation</a>
		</div>
	</div>
  </nav>

  {@render children()}

  <!-- Footer -->
  <footer class="bg-primary-blue text-white text-center py-8">
	<div class="flex justify-center space-x-4">
		<a href="mailto:contact@medida.io" class="text-2xl"><FontAwesomeIcon icon={faEnvelope} /></a>
		<a href="https://wa.me/1234567890" class="text-2xl"><FontAwesomeIcon icon={faWhatsapp} /></a>
		<a href="https://www.facebook.com" class="text-2xl"><FontAwesomeIcon icon={faFacebook} /></a>
		<a href="https://www.linkedin.com" class="text-2xl"><FontAwesomeIcon icon={faLinkedin} /></a>
	</div>
	<p class="text-xs mt-4">contact@medida.io</p>
	<p class="text-xs my-2"> +502 3215 3645</p>
  </footer>
