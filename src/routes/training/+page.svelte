<script>
    import { _ } from 'svelte-i18n';
  
  </script>
  
  <div class="flex flex-col items-center p-8">
    <h1 class="text-4xl font-bold text-primary-blue text-center mb-8">{$_('training_title')}</h1>
    <p class="text-xl text-gray-600 text-center mb-8">{$_('training_subtitle')}</p>
    
    <!-- Section 1: Comprehensive training -->
    <section class="md:px-16 py-8 w-full max-w-7xl flex flex-col md:flex-row items-center justify-between">
      <div class="md:w-1/2 order-2 md: order-1 p-6">
        <h2 class="text-3xl font-bold text-primary-blue mb-4">{$_('comprehensive_training_title')}</h2>
        <p class="text-xl text-gray-600 mb-10">{$_('comprehensive_training_subtitle')}</p>
      </div>
      <div class="md:w-1/2 p-6">
        <img src="/images/comprehensive-training.jpg" alt="Comprehensive Training" class="w-full h-auto object-cover">
      </div>
    </section>
  
    <!-- Section 2: Long-term support -->
    <section class="md:px-16 py-8 w-full max-w-7xl flex flex-col md:flex-row items-center justify-between">
      <div class="md:w-1/2 p-6">
        <img src="/images/long-term-support.jpg" alt="Data Management" class="w-full h-auto object-cover">
      </div>
      <div class="md:w-1/2 p-6">
        <h2 class="text-3xl font-bold text-primary-blue mb-4">{$_('long_term_support_title')}</h2>
        <p class="text-xl text-gray-600 mb-10">{$_('long_term_support_subtitle')}</p>
        <!-- <ul class="text-lg text-gray-600 space-y-2">
            <li class="flex items
            -start space-x-2">
                <span>•</span>
                <span>Every organization should be able to take control of their data with confidence.</span>
            </li>
            <li class="flex items-start space-x-2">
                <span>•</span>
                <span>Good data management shouldn’t take time, it should save time.</span>
            </li>
            <li class="flex items-start space-x-2">
                <span>•</span>
                <span>Your organization is at its best when your staff are focused on how to improve your programs and increase their impact.</span>
            </li>
            <li class="flex items-start space-x-2">
                <span>•</span>
                <span>You should be able to demonstrate that impact to donors and stakeholders with real-time, one-click reports.</span>
            </li>
        </ul> -->
      </div>
    </section>

  </div>
  