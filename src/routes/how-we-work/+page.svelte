<script>
  import { _ } from 'svelte-i18n';
</script>

<section class="md:p-24 p-12 bg-gray-100 flex md:flex-row flex-col md:h-screen">
  <h1 class="text-2xl md:text-4xl mb-20 md:flex-1 md:px-16 font-bold text-primary-orange md:text-5xl lg:text-6xl">{$_('section_title')}</h1>
  <div class="container md:flex-1 md:px-16">
      <div></div> <!-- Empty space for the large text -->
      <div class="text-left md:text-2xl text-primary-orange space-y-8">
          <p class="leading-relaxed">{@html $_('platform_description')}</p>
          <p class="leading-relaxed">{@html $_('pricing_description')}</p>
          <p class="leading-relaxed pt-14">{@html $_('consultation_description')}</p>
      </div>
  </div>
</section>