<script>
    import { _ } from 'svelte-i18n';
</script>

<section>
    <div class="flex items-center justify-center h-[500px]">
        <div class="basis-1/4"></div> <!-- Hidden on smaller screens -->
        
        <div class="basis-1/2"> <!-- Max width added -->
            <h1 class="text-4xl leading-normal tracking-normal text-primary-orange font-bold">
                At Medida, we believe in a world where organizations of any size can work with their data to better serve their communities
            </h1>
        </div>
        
        <div class="basis-1/4"></div> <!-- Hidden on smaller screens -->
    </div>
</section>

<section class="relative p-16 h-[1000px]" style="background-image: url('/images/xela.jpeg'); background-size:cover">
    <div class="absolute bg-opacity-90 bg-white inset-0"></div>
    <div class="relative flex">
        <div class="basis-1/4"></div> <!-- Hidden on smaller screens -->
        <div class="basis-1/2">
            
            <h1 class="text-6xl text-primary-blue font-bold text-center my-16">
                {$_('values_title')}
            </h1>
            <h2 class="text-4xl text-primary-orange font-bold mb-8">
                {$_('simplicity_title')}
            </h2>
            <p class="text-2xl text-primary-blue leading-normal">
                {$_('simplicity_text')}
            </p>
            <h2 class="text-4xl text-primary-orange font-bold mb-8 mt-16">
                {$_('accessibility_title')}
            </h2>
            <p class="text-2xl text-primary-blue leading-normal">
                {$_('accessibility_text')}
            </p>
            <h2 class="text-4xl text-primary-orange font-bold mb-8 mt-16">
                {$_('humanity_title')}
            </h2>
            <p class="text-2xl text-primary-blue leading-normal">
                {$_('humanity_text')}
            </p>
        </div>
        <div class="basis-1/4"></div> <!-- Hidden on smaller screens -->
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
        <div class="absolute top-1/4 right-[25%] bg-gray-100 p-8 md:p-12 shadow-lg max-w-md">
            <h2 class="text-3xl font-bold text-teal-600 mb-4">We believe</h2>
            <ul class="text-lg text-gray-600 space-y-2">
                <li class="flex items-start space-x-2">
                    <span class="text-orange-500">•</span>
                    <span>Every organization should be able to take control of their data with confidence.</span>
                </li>
                <li class="flex items-start space-x-2">
                    <span class="text-orange-500">•</span>
                    <span>Good data management shouldn’t take time, it should save time.</span>
                </li>
                <li class="flex items-start space-x-2">
                    <span class="text-orange-500">•</span>
                    <span>Your organization is at its best when your staff are focused on how to improve your programs and increase their impact.</span>
                </li>
                <li class="flex items-start space-x-2">
                    <span class="text-orange-500">•</span>
                    <span>You should be able to demonstrate that impact to donors and stakeholders with real-time, one-click reports.</span>
                </li>
            </ul>
        </div>
    </div>
    
</section>