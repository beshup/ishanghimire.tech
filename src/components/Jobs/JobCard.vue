<template>
    <div class="d-flex flex-column align-items-center" >
        <img class="mb-3" style="max-width: 80px" :src="chosenLogo">
        <span class="text-center" style="font-weight: bold">{{name}}</span>
        <span>{{role}}</span>
        <span class="location">{{location}}</span>
        <a target="_blank" :href="website"><font-awesome-icon class="mt-1 icon" icon="globe" /></a>

    </div>    
</template>

<script>
import rcaflogo from '../../assets/rcaflogo.png'
import tamvoeslogo from '../../assets/tamvoeslogo.png'
import shopifylogo from '../../assets/shopifylogo.png'
import eelogo from '../../assets/eelogo.png'

export default {
    name: 'JobCard',
    props: {
        name: String,
        role: String,
        logo: String,
        location: String,
        website: String
    },
    data: function() {
        var chosenLogo = null
        switch(this.logo) {
            case "rcaf": chosenLogo = rcaflogo; break;
            case "tamvoes": chosenLogo = tamvoeslogo; break;
            case "shopify": chosenLogo = shopifylogo; break;
            case "ee": chosenLogo = eelogo; break;
        }
        return {
            chosenLogo: chosenLogo
        }
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