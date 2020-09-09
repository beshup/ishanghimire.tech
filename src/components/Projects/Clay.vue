<template>
    <div class="d-flex flex-column align-items-center" id="Clay">
        <img class="mb-3 cursor" style="max-width: 90px;" :src="claylogo">
        <span style="font-weight: bold">Clay</span>
        <span>Cross Platform Game Engine</span>
        <div>
            <a href="https://github.com/beshup/Clay"><font-awesome-icon class="mt-1" icon="github" /></a>
        </div>

    </div>    
</template> 

<script>
import claylogo from '../../assets/claylogo.png'

export default {
    name: 'Clay',
    components: {
        claylogo
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