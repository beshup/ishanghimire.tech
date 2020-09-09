<template>
    <div class="d-flex flex-column align-items-center" id="Go2Balancer">
        <img class="mb-3 cursor" style="max-width: 90px;" :src="go2balancerlogo">
        <span style="font-weight: bold">Go2Balancer</span>
        <span>Concurrent TCP Load Balancer</span>
        <div>
            <a href="https://github.com/beshup/Go2Balancer"><font-awesome-icon class="mt-1" icon="github" /></a>
        </div>

    </div>    
</template> 

<script>
import go2balancerlogo from '../../assets/go2balancerlogo.png'

export default {
    name: 'Go2Balancer',
    components: {
        go2balancerlogo
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