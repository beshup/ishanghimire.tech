<template>
    <div class="d-flex flex-column align-items-center" id="Price">
        <img class="mb-2" style="max-width: 60px;" src="../../assets/pricelogo.png">
        <span style="font-weight: bold">Pr!ce</span>
        <span class="text-center">Seasonal Stock Marketplace for NFTs Representing Offchain Entities</span>
        <span class="location text-center">Winner of $4K in Sponsor Bounties @ ETHDenver</span>
        <div>
            <a target="_blank" href="https://github.com/beshup/Price"><font-awesome-icon class="mt-1 icon github" :icon="['fab','github']" size="2x"/></a>
            <a target="_blank" href="https://github.com/beshup/sb-offchain-api"><font-awesome-icon class="mt-1 ml-2 icon github" :icon="['fab','github']" size="2x"/></a>
        </div>

    </div>    
</template> 

<script>

export default {
    name: 'Pr!ce'
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