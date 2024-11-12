<script>
	import '../app.css';
	import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
	import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
	import { faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons';
	import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';
	// src/lib/i18n/index.ts
	import { browser } from '$app/environment';
	import { init, register, locale, _, waitLocale } from 'svelte-i18n';
	import { scheduleLink, whatsappLink, facebookLink, emailLink, linkedinLink } from '$lib/links';
    import { onMount, tick } from 'svelte';
	import { get } from 'svelte/store';


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
	const whatsappNumber = '+502 5218 8826';

	let isOpen = $state(false);
	
	const closeMenu = () => {
		isOpen = false;
	};

	let loading = $state(true);
	let whatsappLinkWithText = $state('');
	let emailLinkWithSubject = $state('');
	onMount(async () => {
		await waitLocale();
		await (new Promise(resolve => setTimeout(resolve, 0))); // wait for the next tick to let the translation strings properly update

		loading = false;
		
		whatsappLinkWithText = whatsappLink + `?text=${encodeURIComponent(get(_)('whatsapp_text'))}`;
		emailLinkWithSubject = emailLink + `?subject=${encodeURIComponent(get(_)('email_subject'))}&body=${encodeURIComponent(get(_)('email_body'))}`;
	});

	
</script>

{#if !loading}
	<!-- Navbar -->
	<nav class="flex flex-row items-center justify-between p-4 md:px-10 md:py-4">
		<div class="absolute block md:hidden top-0 right-2 text-primary-orange">
			{#if $locale === 'es'}
				<span onclick={() => changeLanguage('en')} class="hover:text-primary-blue text-xs cursor-pointer">English</span>
			{:else}
				<span onclick={() => changeLanguage('es')} class="hover:text-primary-blue text-xs cursor-pointer">Español</span>
			{/if}
		</div>
		<div><a href="/"><img class="md:h-20 mt-4 md:mt-2" src="/images/logo.png" /></a></div>
		<!-- Hamburger Button -->
		<button
			class="mt-6 flex flex-col items-center justify-center w-8 h-8 space-y-1 md:hidden"
			onclick={() => (isOpen = true)}
			>
			<div class="w-8 h-1 bg-gray-800 transition-transform duration-300" class:hamburger-top-line={isOpen}></div>
			<div class="w-8 h-1 bg-gray-800 transition-opacity duration-300" class:hamburger-middle-line={isOpen}></div>
			<div class="w-8 h-1 bg-gray-800 transition-transform duration-300" class:hamburger-bottom-line={isOpen}></div>
		</button>

		<!-- Mobile Menu -->
		<div class="fixed inset-0 z-40 flex flex-col items-center justify-center bg-white md:hidden" class:hidden={!isOpen}>
			<div class="absolute top-0 right-0 p-4">
				<button
					onclick={closeMenu}
					class="text-2xl"
					>
					&times;
				</button>
			</div>
			<a href="/" onclick={closeMenu} class="text-2xl my-4">{$_('home')}</a>
			<a href="/how-we-work" onclick={closeMenu} class="text-2xl my-4">{$_('how_we_work')}</a>
			<a href="/vision" onclick={closeMenu} class="text-2xl my-4">{$_('our_vision')}</a>
			<!-- <a href="/pricing" onclick={closeMenu} class="text-2xl my-4">{$_('pricing')}</a> -->
			<div class="space-x-8 my-4">
				<a href="{emailLinkWithSubject}" class="text-2xl my-4"><FontAwesomeIcon icon={faEnvelope} class="md:text-2xl text-gray-700" /></a>
				<a href="{whatsappLinkWithText}" class="text-2xl my-4"><FontAwesomeIcon icon={faWhatsapp} class="text-green-500"/></a>
			</div>
			<a href="{scheduleLink}" class="px-6 py-2 my-4 bg-primary-blue text-white rounded-lg hover:bg-primary-orange">{$_('book_consultation')}</a>
		</div>
		<div class="md:flex flex-col hidden">
			<div class="flex text-right ml-auto mb-1 items-center space-x-2 text-primary-orange">
				{#if $locale === 'es'}
					<span onclick={() => changeLanguage('en')} class="hover:text-primary-blue text-xs cursor-pointer">English</span>
				{:else}
					<span onclick={() => changeLanguage('es')} class="hover:text-primary-blue text-xs cursor-pointer">Español</span>
				{/if}
			</div>
			<div class="flex items-center my-4 text-weight-900">
				<ul class="flex space-x-8 md:text mx-2 text-primary-orange">
					<li><a href="/how-we-work" class="hover:text-primary-blue">{$_('how_we_work')}</a></li>
					<li><a href="/vision" class="hover:text-primary-blue">{$_('our_vision')}</a></li>
					<!-- <li><a href="/pricing" class="hover:text-primary-blue">{$_('pricing')}</a></li> -->
					<li>
						<a href="{emailLinkWithSubject}">
							<FontAwesomeIcon icon={faEnvelope} class="md:text text-primary-orange" />
						</a>
					</li>
					<li>
						<a href="{whatsappLinkWithText}" class="mr-5">
							<FontAwesomeIcon icon={faWhatsapp} class="md:text text-primary-orange" />
						</a>
					</li>
				</ul>
				<a href="{scheduleLink}" class="px-6 py-2 bg-primary-blue text-white rounded-lg hover:bg-primary-orange">{$_('book_consultation')}</a>
			</div>
		</div>
	</nav>

	{@render children()}

	<!-- Footer -->
	<footer class="bg-primary-blue text-white text-center pt-3 pb-1 md:py-8">
		<div class="flex justify-center space-x-4">
			<a href="{emailLinkWithSubject}" class="text-2xl"><FontAwesomeIcon icon={faEnvelope} /></a>
			<a href="{whatsappLinkWithText}" class="text-2xl"><FontAwesomeIcon icon={faWhatsapp} /></a>
			<a href="{facebookLink}" class="text-2xl"><FontAwesomeIcon icon={faFacebook} /></a>
			<a href="{linkedinLink}" class="text-2xl"><FontAwesomeIcon icon={faLinkedin} /></a>
		</div>
		<p class="text-xs mt-2 md:mt-4">{contactEmail}</p>
		<p class="text-xs my-2">{whatsappNumber}</p>
	</footer>
{/if}

  <style>
	hamburger-top-line {
		transform: rotate(-45deg) translateY(1.5px);
	}
	hamburger-middle-line {
		opacity: 0;
	}
	hamburger-bottom-line {
		transform: rotate(45deg) translateY(-1.5px);
	}
  </style>
