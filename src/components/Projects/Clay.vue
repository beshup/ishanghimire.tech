<template>
    <div v-if="$isMobile()" class="d-flex flex-column align-items-center mt-3" id="Clay">
        <img class="mb-3 cursor" style="max-width: 135px;" src="../../assets/claylogo.png" href="https:///github.com/beshup/Clay">
        <span style="font-weight: bold">Clay</span>
        <span>Cross Platform Game Engine</span>
        <div>
            <a target="_blank" href="https://github.com/beshup/Clay"><font-awesome-icon class="mt-1 icon github" :icon="['fab','github']" size="2x"/></a>
        </div>

    </div>  
    <div v-else class="d-flex flex-column align-items-center" id="Clay">
        <img class="mb-3 cursor" style="max-width: 135px;" src="../../assets/claylogo.png">
        <span style="font-weight: bold">Clay</span>
        <span>Cross Platform Game Engine</span>
        <div>
            <a target="_blank" href="https://github.com/beshup/Clay"><font-awesome-icon class="mt-1 icon github" :icon="['fab','github']" size="2x"/></a>
        </div>

    </div>    
</template> 

<script>

export default {
    name: 'Clay'
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