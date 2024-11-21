<script>
    import { onMount } from 'svelte';
    import { _, locale } from 'svelte-i18n';
    import { scheduleLink } from '$lib/links';

    onMount(() => {
      const video = document.getElementById("demo-video");

      // Create the observer function
      const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            // Start playing the video when it enters the viewport
            video.play();
          } else {
            // Pause the video when it leaves the viewport
            video.pause();
          }
        });
      }, {
        threshold: 0.5 // Start playing when 50% of the video is in the viewport
      });

      // Observe the video element
      observer.observe(video);
    });


    let showThankYouMessage = false;
    function signupForNewsletter(event) {
      event.preventDefault();
      const email = event.target.querySelector('input').value;
      fetch('/api/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email })
      });
      showThankYouMessage = true;
      window.setTimeout(() => {
        showThankYouMessage = false;
      }, 2000);
    }

</script>

<main class="bg-white font-sans">
  <!-- Hero Section -->
  <section class="relative bg-cover bg-center" style="background-image: url('/images/front-image.jpg');">
    <div class="absolute inset-0 bg-opacity-60 bg-primary-orange"></div>
    <div class="relative z-10 flex flex-col items-center justify-center px-6 text-center text-white" style="height: 500px;">
      <h1 class="text-4xl font-bold md:text-6xl lg:text-7xl">{$_('hero_section_title')}</h1>
    </div>
  </section>

  <!-- Services Section -->
  <section class="py-12 md:py-16 text-center">
    <h1 class="md:text-4xl text-2xl font-semibold text-primary-blue md:text-5xl">{$_('services_section_title')}</h1>
    <div class="flex flex-wrap justify-center mt-16 space-y-8 md:space-y-0 md:space-x-8">
      <div class="w-full px-4 md:w-1/3">
        <h3 class="md:text-3xl text-xl font-bold text-primary-blue"><a href="/monitoring-and-evaluation">{$_('me_consulting_title')}</a></h3>
        <p class="mt-4 md:text-2xl text-primary-orange">{$_('me_consulting_description')}</p>
      </div>
      <div class="w-full px-4 md:w-1/3">
        <h3 class="md:text-3xl text-xl font-bold text-primary-blue"><a href="/platform">{$_('database_platform_title')}</a></h3>
        <p class="mt-4 md:text-2xl text-primary-orange">{$_('database_platform_description')}</p>
      </div>
    </div>
  </section>

  <!-- Demo video -->
   <section class="py-16 md:my-16 w-full px-8">
    <video id="demo-video" class="md:w-1/2 mx-auto" controls muted playsinline>
      <source src={`/videos/demo-video-${$locale === 'en' ? 'english' : 'spanish'}.mp4`} type="video/mp4">
      Your browser does not support the video tag.
    </video>
   </section>

   <!-- CTA book a meeting-->
    <section class="my-8 md:my-16 md:py-16 text-center">
      <p class="text-center md:text-2xl mb-10">{$_('cta_title')}</p>
      <a href="{scheduleLink}" class="px-2 md:px-8 py-4 bg-primary-blue text-white text-xs md:text-base rounded-lg hover:bg-primary-orange">{$_('cta_button_text')}</a>
    </section>

    <!-- newsletter signup -->
     <section class="py-8 px-2 bg-primary-orange text-white text-center">
      <h4 class="md:text-2xl font-semibold">{$_('newsletter_section_title')}</h4>
      <div class="flex flex-col items-center justify-center mt-4" style="min-height: 100px;">
        {#if showThankYouMessage}
          <p class="mt-4 text-2xl">{$_('newsletter_thank_you_message')}</p>
        {:else}
          <form class="flex flex-col items-center justify-center w-full" on:submit={signupForNewsletter}>
            <input type="email" class="w-full md:w-1/4 px-4 py-2 bg-white text-black rounded-lg" placeholder="{$_('newsletter_email_placeholder')}">
            <button type="submit" class="px-4 py-2 bg-primary-blue text-white rounded-lg mt-4">{$_('newsletter_submit_button')}</button>
          </form>
        {/if}
      </div>
    </section>
</main>