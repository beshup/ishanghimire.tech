<template>
    <div id="projects">
        <hr class="line">
        <carousel-3d class="mb-0 mt-3" :space="850" :animationSpeed="750" :inverse-scaling="1000" :width="500" :height="heightForDevice" :perspective="55" :controlsVisible="controls" :clickable="false"  :autoplay="true" :autoplayHoverPause="true" :autoplayTimeout="10000">
            <slide :index="0" class="slide">
                <SwipeInfo />
            </slide>
            <slide :index="1" class="slide mt-2">
                <SocialKontracts />
            </slide>
            <slide :index="2" class="slide">
                <Price />
            </slide>
            <slide :index="3" class="slide">
                <Go2Balancer />
            </slide>
            <slide :index="4" class="slide mt-3">
                <Covid />
            </slide>
            <slide :index="5" class="slide mt-5">
                <UnderratedTunes />
            </slide>
            <slide :index="6" class="slide">
                <MineBuskers />
            </slide>
            <slide :index="7" class="slide mt-3">
               <FunGuy />
            </slide>
            <slide :index="8" class="slide mt-2">
                <Clay />
            </slide>
        </carousel-3d>
    </div>    
</template>

<script>
import Go2Balancer from './Go2Balancer'
import UnderratedTunes from './UnderratedTunes'
import MineBuskers from './MineBuskers'
import FunGuy from './FunGuy'
import Covid from './Covid'
import Clay from './Clay'
import Price from './Price'
import SocialKontracts from './SocialKontracts'
import SwipeInfo from './SwipeInfo'

export default {
    name: 'Projects',
    components: {
        Go2Balancer,
        UnderratedTunes,
        MineBuskers,
        FunGuy,
        Covid,
        Clay,
        Price,
        SocialKontracts,
        SwipeInfo
    },
    data: function() {
        let height = 225;
        let controls = true;
        switch(this.$isMobile()) {
            case true: 
                height = 350;
                controls = false;
        }
        return {
            heightForDevice: height,
            controls: controls
        }
    }
}
</script>

<style scoped>
     .slide {
        background-color: white;
        border: none;
    }

</style>