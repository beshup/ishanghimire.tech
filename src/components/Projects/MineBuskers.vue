<template>
    <div class="d-flex flex-column align-items-center" id="MineBusker">
        <img class="mb-3" style="max-width: 70px;" src="../../assets/minebuskerlogo.png">
        <span style="font-weight: bold">MineBusker</span>
        <span class="text-center">Decentralized, Geocaching Platform for Buskers</span>
        <span class="location text-center">Winner of Torus Labs API Award at ETHWaterloo</span>
        <div>
            <a target="_blank" href="https://devpost.com/software/minebusker"><img style="max-width: 27px;" class="devpostIcon" src="../../assets/devpost.svg"></a>
        </div>

    </div>    
</template> 

<script>

export default {
    name: 'MineBusker'
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