<template>
    <div class="d-flex flex-column align-items-center" id="Go2Balancer">
        <img class="mb-3 cursor" style="max-width: 70px;" src="../../assets/go2balancerlogo.png">
        <span style="font-weight: bold">Go2Balancer</span>
        <span>Concurrent TCP Load Balancer</span>
        <div>
            <a href="https://github.com/beshup/Go2Balancer"><font-awesome-icon class="mt-1 icon github" :icon="['fab','github']" /></a>
        </div>

    </div>    
</template> 

<script>

export default {
    name: 'Go2Balancer'
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