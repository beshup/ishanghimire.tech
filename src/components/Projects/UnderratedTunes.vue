<template>
    <div v-if="$isMobile()" class="d-flex flex-column align-items-center mt-4" id="UnderratedTunes">
        <img class="mb-3 cursor" style="max-width: 70px;" src="../../assets/underratedtuneslogo.png">
        <span style="font-weight: bold">Underrated Tunes</span>
        <span>Social Platform for Music Lovers</span>
        <div>
            <a target="_blank" href="https://github.com/beshup/UnderratedTunes"><font-awesome-icon class="mt-1 mr-1 github icon" :icon="['fab','github']" size="2x"/></a>
            <a target="_blank" href="http://www.underratedtunes.com/tunes"><font-awesome-icon class="mt-1 icon" icon="globe" size="2x" /></a>
        </div>

    </div>   
    <div v-else class="d-flex flex-column align-items-center" id="UnderratedTunes">
        <img class="mb-3 cursor" style="max-width: 70px;" src="../../assets/underratedtuneslogo.png">
        <span style="font-weight: bold">Underrated Tunes</span>
        <span>Social Platform for Music Lovers</span>
        <div>
            <a target="_blank" href="https://github.com/beshup/UnderratedTunes"><font-awesome-icon class="mt-1 mr-1 github icon" :icon="['fab','github']" size="2x"/></a>
            <a target="_blank" href="http://www.underratedtunes.com/tunes"><font-awesome-icon class="mt-1 icon" icon="globe" size="2x" /></a>
        </div>

    </div>    
</template> 

<script>

export default {
    name: 'UnderratedTunes'
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
</style>