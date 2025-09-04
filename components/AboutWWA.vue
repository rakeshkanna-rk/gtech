<template>
  <div class="wwa">
    <h1>Who we are?</h1>
    <p>{{ wwa }}</p>
    <div class="wrapper">
        <uiWWAText/>
    </div>
  </div>
</template>

<script setup>
const wwa = `G-Tech (Generalize Technology) is the official Fine Arts Association of Guru Nanak
College (GNC). We are a dynamic community of creators, innovators, and performers
who believe in the power of combining art and technology to create meaningful
experiences.
`
</script>

<style scoped>
.wrapper{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: start;
    padding: 1.5rem 0;
}

.wwa{
    padding: 5rem;
}

.wwa h1{
    color: rgb(222, 222, 222);
    font-size: 2.5rem;
}

.wwa p{
    font-size: 18px;
    line-height: 1.6;
    max-width: 800px;
    width: 100%;
    padding: 1.5rem 0;
}

@media screen and (max-width: 600px) {
    .wrapper{
        flex-direction: column;
        justify-content: start;
        gap: 2rem;
    }

    .wwa{
        padding: 2rem;
    }
}
</style>