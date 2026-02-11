// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2025-07-15',
    devtools: { enabled: true },

    modules: [
        '@nuxt/fonts',
        '@nuxt/image',
        '@nuxt/icon',
        '@nuxt/a11y',
        '@nuxtjs/tailwindcss',
        '@nuxtjs/mdc',
        '@vueform/nuxt'
    ],
    tailwindcss: {
        exposeConfig: true
    },
    fonts: {
        defaults: {
            weights: [400, 500, 600, 700],
            subsets: ['latin', 'latin-ext']
        },
        families: [
            {
                name: 'Inter',
                provider: 'bunny',
                weights: [900],
            },
            {
                name: "EB Garamond",
                provider: 'bunny'
            }
        ]
    }
})