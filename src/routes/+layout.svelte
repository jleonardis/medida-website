<script>
	import '../app.css';
	import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
	import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
	import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';
	// src/lib/i18n/index.ts
	import { browser } from '$app/environment'
	import { init, register, locale } from 'svelte-i18n'

	const defaultLocale = 'en'

	register('en', () => import('../lang/en.json'))
	register('de', () => import('../lang/es.json'))

	init({
		fallbackLocale: defaultLocale,
		initialLocale: browser ? window.navigator.language : defaultLocale,
	});

	locale.set(defaultLocale);
	
	let { children } = $props();
</script>

<!-- Navbar -->
<nav class="flex items-center justify-between px-10 py-4">
	<div><a href="/"><img class="h-14 mt-2" src="/images/logo.png" /></a></div>
	<div class="flex flex-col">
		<div class="flex text-right ml-auto mb-1 items-center space-x-2">
			<span on:click={() => changeLocale('en')} class="text-gray-700 hover:text-primary-blue text-xs">English</span>
			<span>|</span>
			<span on:click={() => changeLocale('es')} class="text-gray-700 hover:text-primary-blue text-xs">Español</span>
		</div>
		<div class="flex items-center space-x-4 my-4">
			<ul class="flex space-x-8 text-xl mx-2 text-gray-700">
				<li><a href="/how-we-work" class="hover:text-primary-blue">How we work</a></li>
				<li><a href="/vision" class="hover:text-primary-blue mr-10">Our vision</a></li>
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
			<a href="#" class="px-6 py-2 bg-primary-blue text-white rounded-lg hover:bg-primary-orange">Book a free consultation</a>
		</div>
	</div>
  </nav>

  {@render children()}
