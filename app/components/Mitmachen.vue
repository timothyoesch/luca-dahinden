<template>
    <div class="ld-section">
        <div class="grid ld-mitmachen">
            <div class="ld-mitmachen__content">
                <div class="text-center">
                    <h1 class="boxed text-4xl lg:text-5xl xl:text-6xl">Bist du dabei?</h1>
                </div>
                <p class="mt-6 text-lg md:text-xl lg:text-2xl">
                    Damit wir Zürich lebenswert gestalten können, brauchen wir eine linke Mehrheit mit einer starken SP im Gemeinderat. Wir sind die Partei der Menschen, nicht der Millionen – und um Wahlen zu gewinnen, brauchen wir Leute wie dich. Lass uns zusammen unsere Stadt neu gestalten. <b>Danke für deine Unterstützung!</b>
                </p>
                <div class="mt-6">
                    <ClientOnly>
                        <Form />
                    </ClientOnly>
                </div>
            </div>
            <div class="ld-mitmachen__image">
                <picture>
                <source
                    type="image/avif"
                    srcset="/images/heroine/antifa-100.avif?width=100 100w, /images/heroine/antifa-200.avif?width=200 200w, /images/heroine/antifa-400.avif?width=400 400w, /images/heroine/antifa-800.avif?width=800 800w" />
                <source
                    type="image/webp"
                    srcset="/images/heroine/antifa-100.webp?width=100 100w, /images/heroine/antifa-200.webp?width=200 200w, /images/heroine/antifa-400.webp?width=400 400w, /images/heroine/antifa-800.webp?width=800 800w" />
                <img
                    src="/images/heroine/antifa.png"
                    srcset="/images/heroine/antifa-100.png?width=100 100w, /images/heroine/antifa-200.png?width=200 200w, /images/heroine/antifa-400.png?width=400 400w, /images/heroine/antifa-800.png?width=800 800w"
                    sizes="(max-width: 800px) 100vw, 50vw"
                    style="width: 100%; object-position: 50% 33%;"
                    class="aspect-[4/3] xl:aspect-[2/3] object-cover"
                    loading="lazy"
                    decoding="async"
                    alt="My awesome image"
                />
                </picture>
            </div>
        </div>
    </div>
</template>

<style scoped>
.ld-mitmachen__content {
    grid-area: content;
}

.ld-mitmachen__image {
    grid-area: image;
}

.ld-mitmachen {
    grid-template-columns: repeat(9, 1fr);
    grid-template-areas: ". content content content . image image image .";
}

@media screen and (max-width: 1023px) {
    .ld-mitmachen {
        grid-template-columns: 1fr;
        grid-template-areas: "image" "content";

        @apply px-4 gap-8;
    }
}
</style>