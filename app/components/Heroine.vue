<script setup>
import { ref } from "vue";
import content from "~/assets/content/heroine.json";
let fgColor = ref(content[0]["fg-color"]);
let bgColor = ref(content[0]["bg-color"]);
let container = ref();
let progressbar = ref();
let playButton = ref();
let pauseButton = ref();
let forwardsButton = ref();
let backwardsButton = ref();
let title = ref(content[0].title);
let text = ref(content[0].content);
let id = ref(content[0].id);
let i = 0;
let interval = 7500;
let timer;
let progressAnimation;

const animateProgress = (color) => {
    progressbar.value.style.backgroundColor = color;
    progressAnimation = progressbar.value.animate(
        [
            { maxWidth: "0%" },
            { maxWidth: "100%" },
        ],
        {
            duration: interval,
            easing: "cubic-bezier(.58,.08,.3,.86)",
            fill: "forwards",
        }
    );
};

const switchToSlide = (index) => {
    animateProgress(content[index]["fg-color"]);
    fgColor.value = content[index]["fg-color"];
    bgColor.value = content[index]["bg-color"];
    container.value.style.setProperty("--fg-color", content[index]["fg-color"]);
    container.value.style.setProperty("--bg-color", content[index]["bg-color"]);
    title.value = content[index].title;
    text.value = content[index].content;
    id.value = content[index].id;
};

const handlePause = () => {
    clearInterval(timer);
    timer = null;
    pauseButton.value.classList.add("!hidden");
    playButton.value.classList.remove("!hidden");
    progressAnimation.pause();
};

const handlePlay = () => {
    timer = setInterval(() => {
        i = (i + 1) % content.length;
        switchToSlide(i);
    }, interval);
    pauseButton.value.classList.remove("!hidden");
    playButton.value.classList.add("!hidden");
    animateProgress(content[i]["fg-color"]);
};

const switchSlide = (forward = true) => {
    clearInterval(timer);
    timer = null;
    i = forward ? (i + 1) % content.length : (i - 1 + content.length) % content.length;
    switchToSlide(i);
    timer = setInterval(() => {
        i = (i + 1) % content.length;
        switchToSlide(i);
    }, interval);
};

onMounted(() => {
    animateProgress(content[i]["fg-color"]);
    timer = setInterval(() => {
        i = (i + 1) % content.length;
        switchToSlide(i);
    }, interval);
});
</script>

<template>
    <div class="ld-heroine--container relative" ref="container">
        <NuxtLink class="hidden ld-icon w-fit h-20 lg:block absolute top-10 left-16" to="/">
            <Logo />
        </NuxtLink>
        <div class="ld-heroine--content relative">
            <div class=" p-6 lg:pt-36 lg:pb-20 lg:px-16">
                <h2 class="text-2xl lg:text-3xl xl:text-4xl">Für eine Stadt Zürich</h2>
                <div class="pl-[0.2em] my-3 lg:my-6 text-3xl md:text-5xl xl:text-6xl">
                    <h1 class="boxed" v-html="title" style="--highlight-color: var(--fg-color); --text-color: var(--bg-color);"></h1>
                </div>
                <p v-html="text"></p>
                <div class="ld-heroine--content--buttons grid lg:grid-cols-2 gap-2 lg:gap-4 text-base xl:text-xl mt-4 lg:mt-8 lg:w-fit">
                    <Button text="Erfahre mehr" color="var(--bg-color)" bg-color="var(--fg-color)" link="#positionen" />
                    <Button text="Über mich" color="var(--bg-color)" bg-color="var(--fg-color)" link="#ueber-mich" />
                </div>
            </div>
            <div class="ld-heroine--content--controls absolute bottom-0 left-0 right-0 translate-y-[80%] xl:translate-y-[66%]">
                <div class="ld-heroine--content--controls--progress h-2 xl:h-4 max-w-0" ref="progressbar"></div>
                <div class="ld-heroine--content--controls--buttons w-full flex justify-end" :style="{ color: bgColor }">
                    <div
                        class="ld-heroine--content--controls--buttons__backwards rotate-180"
                        :style="{ backgroundColor: fgColor }"
                        ref="backwardsButton"
                        v-on:click="switchSlide(false)"
                    >
                        <Icon name="ic:baseline-double-arrow"/>
                    </div>
                    <div
                        class="ld-heroine--content--controls--buttons__pause"
                        :style="{ backgroundColor: fgColor }"
                        ref="pauseButton"
                        v-on:click="handlePause()"
                    >
                        <Icon name="ic:baseline-pause"/>
                    </div>
                    <div
                        class="ld-heroine--content--controls--buttons__play !hidden"
                        :style="{ backgroundColor: fgColor }"
                        ref="playButton"
                        v-on:click="handlePlay()"
                    >
                        <Icon name="ic:baseline-play-arrow"/>
                    </div>
                    <div
                        class="ld-heroine--content--controls--buttons__forwards"
                        :style="{ backgroundColor: fgColor }"
                        ref="forwardsButton"
                        v-on:click="switchSlide(true)"
                    >
                        <Icon name="ic:baseline-double-arrow"/>
                    </div>
                </div>
            </div>
        </div>
        <div class="ld-heroine--image" :style="{ backgroundImage: `url('/images/heroine/${id}.png')` }">
        </div>
    </div>
</template>

<style>
.ld-heroine--container {
    --bg-color: v-bind(bgColor);
    --fg-color: v-bind(fgColor);

    background-color: var(--bg-color);
    color: var(--fg-color);

    display: grid;
    column-gap: 0;
    grid-template-columns: repeat(9, 1fr);
    grid-template-areas: "content content content content image image image image image";
}

@media screen and (max-width: 1023px) {
    .ld-heroine--container {
        grid-template-columns: 1fr;
        grid-template-areas: "image" "content";
    }

    .ld-heroine--image {
        height: 50vh;
    }
}

.ld-heroine--content {
    grid-area: content;
}

.ld-heroine--image {
    grid-area: image;
    background-image: url("/images/heroine/polizei.png");
    background-size: cover;
    background-position: 50% 33%;
}

.ld-heroine--container svg path {
    fill: var(--fg-color);
}

.ld-heroine--content--controls--buttons div {
    @apply h-8 w-8 flex justify-center items-center;
}
</style>