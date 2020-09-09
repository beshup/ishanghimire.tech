<template>
    <div class="d-flex flex-column align-items-center" id="UnderratedTunes">
        <img class="mb-3 cursor" style="max-width: 90px;" :src="underratedtuneslogo">
        <span style="font-weight: bold">Underrated Tunes</span>
        <span>Social Platform for Music Lovers</span>
        <div>
            <a href="https://github.com/beshup/UnderratedTunes"><font-awesome-icon class="mt-1" icon="github" /></a>
        </div>

    </div>    
</template> 

<script>
import underratedtuneslogo from '../../assets/underratedtuneslogo.png'

export default {
    name: 'UnderratedTunes',
    components: {
        underratedtuneslogo
    }
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