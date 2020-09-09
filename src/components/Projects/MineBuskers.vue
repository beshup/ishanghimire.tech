<template>
    <div class="d-flex flex-column align-items-center" id="MineBusker">
        <img class="mb-3 cursor" style="max-width: 90px;" :src="minebuskerslogo">
        <span style="font-weight: bold">MineBusker</span>
        <span>Decentralized, Geocaching Platform for Buskers</span>
        <span class="location">Winner of Torus Labs API Award at ETHWaterloo</span>
        <div>
            <a href="https://devpost.com/software/minebusker"><img style="max-width: 20px;" :src="devpostlogo"></a>
        </div>

    </div>    
</template> 

<script>
import minebuskerslogo from '../../assets/minebuskerlogo.png'
import devpostlogo from '../../assets/devpost.svg'

export default {
    name: 'MineBusker',
    components: {
        minebuskerslogo,
        devpostlogo
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