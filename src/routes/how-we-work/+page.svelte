<script>
  import { _ } from 'svelte-i18n';
</script>

<section class="p-24 bg-gray-100 flex h-screen">
  <h1 class="text-4xl flex-1 px-16 font-bold text-primary-orange md:text-5xl lg:text-6xl">{$_('section_title')}</h1>
  <div class="container flex-1 px-16">
      <div></div> <!-- Empty space for the large text -->
      <div class="text-left text-lg text-primary-orange space-y-6">
          <p>{@html $_('platform_description')}</p>
          <p>{@html $_('consultation_description')}</p>
      </div>
  </div>
</section>