<template>
    <div id="projects">
        <hr class="line">
        <carousel-3d class="mb-0 mt-3" :space="850" :animationSpeed="750" :inverse-scaling="1000" :width="500" :height="heightForDevice" :perspective="55" :controlsVisible="true" :clickable="false"  :autoplay="true" :autoplayHoverPause="true" :autoplayTimeout="10000">
            <slide :index="0" class="slide">
                <Go2Balancer />
            </slide>
            <slide :index="1" class="slide">
                <Covid />
            </slide>
            <slide :index="2" class="slide mt-4">
                <UnderratedTunes />
            </slide>
            <slide :index="3" class="slide">
                <MineBuskers />
            </slide>
            <slide :index="4" class="slide">
               <FunGuy />
            </slide>
            <slide :index="5" class="slide">
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

export default {
    name: 'Projects',
    components: {
        Go2Balancer,
        UnderratedTunes,
        MineBuskers,
        FunGuy,
        Covid,
        Clay
    },
    data: function() {
        let height = 200;
        switch(this.$isMobile()) {
            case true: 
                height = 350;
        }
        return {
            heightForDevice: height
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