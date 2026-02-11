<script setup>
// Get contents from the markdown file ~/assets/content/ueber-mich.md
import content from "~/assets/content/ueber-mich.js";

</script>
<template>
    <div id="ueber-mich" class="ld-section">
        <div class="ld-container">
            <div class="flex justify-center w-full">
                <h1 class="boxed text-4xl lg:text-5xl xl:text-6xl">Über Mich.</h1>
            </div>
            <MDC :value="content" tag="div" class="mt-6 text-lg md:text-xl lg:text-2xl" />
        </div>
    </div>
</template>