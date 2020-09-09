<template>
    <div v-if="$isMobile()" class="d-flex flex-column align-items-center mt-3" id="FunGuy">
        <img class="mb-3 cursor" style="max-width: 70px;" src="../../assets/funguylogo.png">
        <span style="font-weight: bold">Fun Guy Home Security</span>
        <span>Remote Home Security</span>
        <div>
            <a target="_blank" href="https://github.com/samwise2/Home-Security-Device"><font-awesome-icon class="mt-1 mr-1 github icon" :icon="['fab','github']"  /></a>
            <a target="_blank" href="https://www.youtube.com/watch?v=lj1PTFa7HVI&t=10s"><font-awesome-icon class="mt-1 icon youtube" :icon="['fab','youtube']" /></a>
        </div>

    </div> 
    <div v-else class="d-flex flex-column align-items-center" id="FunGuy">
        <img class="mb-3 cursor" style="max-width: 70px;" src="../../assets/funguylogo.png">
        <span style="font-weight: bold">Fun Guy Home Security</span>
        <span>Remote Home Security</span>
        <div>
            <a target="_blank" href="https://github.com/samwise2/Home-Security-Device"><font-awesome-icon class="mt-1 mr-1 github icon" :icon="['fab','github']"  /></a>
            <a target="_blank" href="https://www.youtube.com/watch?v=lj1PTFa7HVI&t=10s"><font-awesome-icon class="mt-1 icon youtube" :icon="['fab','youtube']" /></a>
        </div>

    </div>    
</template> 

<script>

export default {
    name: 'FunGuy'
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