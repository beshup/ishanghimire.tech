<template>
    <div class="d-flex flex-column align-items-center" id="SwipeInfo">
        <img class="mb-3 cursor" style="max-width: 90px;" src="../../assets/swipe.png">
        <span style="font-weight: bold">Swipe</span>
        <span class="text-center">Click icons for links showcasing work </span>
        <span class="text-center location">(Website / Github / Devpost)</span>
        <span class="d-flex align-items-center justify-content-around icons">
            <a target="_blank" href="https://ishanghimire.tech"><font-awesome-icon class="mt-1 mr-1 icon" icon="globe" size="2x" /></a>
            <a target="_blank" href="https://github.com/beshup"><font-awesome-icon class="mt-1 icon github" :icon="['fab','github']" size="2x"/></a>
            <a target="_blank" href="https://devpost.com/ishanghimire9"><img class="mr-1 devpostIcon" style="width: 26px;" src="../../assets/devpost.svg"></a>
        </span>

    </div>    
</template> 

<script>

export default {
    name: 'SwipeInfo'
}
</script>

<style scoped>
    .cursor {
        cursor: pointer
    }
    .location {
        font-size: 14px;
        font-weight: 550;
    }

    .icons {
        width: 70%;
        display: block;
    }
</style>