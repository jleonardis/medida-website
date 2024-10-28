<script>
    import { _ } from 'svelte-i18n';
</script>

<section>
    <div class="flex items-center justify-center md:h-[500px]">
        <div class="md:basis-1/4"></div> <!-- Hidden on smaller screens -->
        
        <div class="basis-3/4 md:basis-1/2 py-8 md:py-0"> <!-- Max width added -->
            <h1 class="text-2xl md:text-4xl leading-normal tracking-normal text-primary-orange font-bold">
                {$_('vision_title')}
            </h1>
        </div>
        
        <div class="md:basis-1/4"></div> <!-- Hidden on smaller screens -->
    </div>
</section>

<section class="relative p-16 md:h-[1000px]" style="background-image: url('/images/xela.jpeg'); background-size:cover">
    <div class="absolute bg-opacity-90 bg-white inset-0"></div>
    <div class="relative flex">
        <div class="md:basis-1/4"></div> <!-- Hidden on smaller screens -->
        <div class="md:basis-1/2">
            
            <h1 class="text-2xl md:text-6xl text-primary-blue font-bold text-center my-16">
                {$_('values_title')}
            </h1>
            <h2 class="md:text-4xl text-primary-orange font-bold mb-8">
                {$_('simplicity_title')}
            </h2>
            <p class="md:text-2xl text-primary-blue leading-normal">
                {$_('simplicity_text')}
            </p>
            <h2 class="md:text-4xl text-primary-orange font-bold mb-8 mt-16">
                {$_('accessibility_title')}
            </h2>
            <p class="md:text-2xl text-primary-blue leading-normal">
                {$_('accessibility_text')}
            </p>
            <h2 class="md:text-4xl text-primary-orange font-bold mb-8 mt-16">
                {$_('humanity_title')}
            </h2>
            <p class="md:text-2xl text-primary-blue leading-normal">
                {$_('humanity_text')}
            </p>
        </div>
        <div class="md:basis-1/4"></div> <!-- Hidden on smaller screens -->
    </div>
</section>

<section>
    <div class="relative p-16">
        <div class="absolute bg-opacity-50 bg-primary-orange inset-0"></div>
        <!-- Left Side: Image (Full width) -->
        <div class="relative w-1/2 m-16">
            <img src="/images/volcanoes.webp" alt="Scenic Image" class="object-cover">
        </div>
    
        <!-- Right Side: Text Box (Overlapping the Image) -->
        <div class="absolute top-1/4 md:right-[25%] bg-gray-100 p-8 md:p-12 shadow-lg max-w-md">
            <h2 class="text-xl md:text-3xl font-bold text-primary-blue mb-4">{$_('we_believe_title')}</h2>
            <ul class="md:text-lg text-gray-600 space-y-2">
                <li class="flex items-start space-x-2">
                    <span class="text-primary-orange">•</span>
                    <span>{$_('we_believe_1')}</span>
                </li>
                <li class="flex items-start space-x-2">
                    <span class="text-primary-orange">•</span>
                    <span>{$_('we_believe_2')}</span>
                </li>
                <li class="flex items-start space-x-2">
                    <span class="text-primary-orange">•</span>
                    <span>{$_('we_believe_3')}</span>
                </li>
                <li class="flex items-start space-x-2">
                    <span class="text-primary-orange">•</span>
                    <span>{$_('we_believe_4')}</span>
                </li>
            </ul>
        </div>
    </div>
    
</section>