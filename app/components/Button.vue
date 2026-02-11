<script setup>
const props = defineProps({
    text: String,
    link: String,
    color: String,
    bgColor: String,
    type: String,
});

</script>

<template>
    <NuxtLink class="font-inter p-4 leading-[0.8] justify-center items-center gap-2 flex" :style="{ backgroundColor: props.bgColor, color: props.color }" :to="props.link">
        {{ props.text }}
        <Icon name="ic:baseline-double-arrow" />
    </NuxtLink>
</template>