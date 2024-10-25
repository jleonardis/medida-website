<script>
    import { _ } from 'svelte-i18n'; // Ensure svelte-i18n is properly set up
  </script>
  
  <main class="flex flex-col items-center w-full bg-white">
  
    <!-- First Section (Hero Section) -->
    <section class="w-full max-w-7xl text-center py-16">
      <h1 class="text-4xl md:text-5xl font-bold text-primary-orange mb-4">{$_('consulting_title')}</h1>
      <p class="text-lg md:text-xl text-primary-teal mb-8">{$_('consulting_subtitle')}</p>
      <div class="flex justify-center">
        <img src="/images/monitoring-and-evaluation.png" alt={$_('consulting_image_alt')} class="w-2/3 md:w-1/2 object-contain" />
      </div>
    </section>
  
    <!-- Second Section (Services Overview) -->
    <section class="w-full bg-gray-100 py-16">
      <div class="container mx-auto w-3/4 text-left">
        <p class="text-2xl md:text-3xl font-bold text-primary-orange mb-8">
          {$_('services_offered_title')}
        </p>
        <ul class="list-disc list-inside text-lg md:text-xl text-gray-700">
          <li><strong>{$_('diagnostic_evaluation_title')}:</strong> {$_('diagnostic_evaluation_description')}</li>
          <li><strong>{$_('interactive_workshops_title')}:</strong> {$_('interactive_workshops_description')}</li>
          <li><strong>{$_('practical_tasks_title')}:</strong> {$_('practical_tasks_description')}</li>
          <li><strong>{$_('collaboration_title')}:</strong> {$_('collaboration_description')}</li>
        </ul>
      </div>
    </section>
  
    <!-- Third Section (Purpose and Expected Results) -->
    <section class="w-3/4 py-16 my-16">
      <div class="container mx-auto">
        <h2 class="text-3xl font-bold text-primary-blue mb-4">{$_('purpose_title')}</h2>
        <p class="text-xl text-gray-700 mb-8">{$_('purpose_text')}</p>
        <h2 class="text-3xl font-bold text-primary-blue mb-4">{$_('expected_results_title')}</h2>
        <p class="text-xl text-gray-700">{$_('expected_results_text')}</p>
      </div>
    </section>
  
  </main>
  