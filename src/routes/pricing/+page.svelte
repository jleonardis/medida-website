<script>
    import { scheduleLink } from "$lib/links";
    import { _ } from "svelte-i18n";
    
    // Assuming translations have been set up correctly
</script>

<section class="w-screen px-24">
    <div class="mt-24 mx-24 px-24 text-2xl leading-relaxed text-primary-blue text-center">
        {$_('pricing_description')}
    </div>
</section>

<section class="my-2 md:py-16 text-center md:mb-24">
    <a href="{scheduleLink}" class="px-2 md:px-8 py-4 bg-primary-blue text-white text-xs md:text-base rounded-lg hover:bg-primary-orange">{$_('cta_simple_button_text')}</a>
  </section>
