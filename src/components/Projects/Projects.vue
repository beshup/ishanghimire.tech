<template>
    <div id="projects">
        <carousel-3d :space="850" :animationSpeed="750" :inverse-scaling="1000" :width="500" :height="200" :perspective="55">
            <slide :index="0" class="slide">
                <Go2Balancer />
            </slide>
            <slide :index="1" class="slide">
                <Covid />
            </slide>
            <slide :index="2" class="slide">
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
    }
}
</script>

<style scoped>
     .slide {
        background-color: white;
        border: none;
    }
</style>