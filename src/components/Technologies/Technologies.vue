<template>
    <div id="technologies">
        <hr class="line">
        <carousel-3d class="mb-0" :space="850" :animationSpeed="750" :inverse-scaling="1000" :width="600" :height="heightForDevice" :perspective="55" :controlsVisible="controls" :clickable="false" :autoplay="true" :autoplayHoverPause="true" :autoplayTimeout="10000">
            <slide :index="0" class="slide">
                <Javascript />
            </slide>
            <slide :index="1" class="slide">
                <Go />
            </slide>
            <slide :index="2" class="slide">
                <Ruby />
            </slide>
            <slide :index="3" class="slide">
                <Python />
            </slide>
            <slide :index="4" class="slide">
               <C />
            </slide>
            <slide :index="5" class="slide mt-1">
                <Htmlcss />
            </slide>
            <slide :index="6" class="slide">
                <Cplusplus />
            </slide>
            <slide :index="7" class="slide">
                <Web3 />
            </slide>
            <slide :index="8" class="slide mt-1">
                <Databases />
            </slide>
            <slide :index="9" class="slide">
                <Mobile />
            </slide>
            <slide :index="10" class="slide mt-3">
                <Other /> 
            </slide>
        </carousel-3d>
        <hr class="line">
    </div>    
</template>

<script>
import Javascript from './Javascript'
import Python from './Python'
import Ruby from './Ruby'
import Go from './Go'
import C from './C'
import Cplusplus from './Cplusplus'
import Databases from './Databases'
import Mobile from './Mobile'
import Other from './Other'
import Htmlcss from './Htmlcss'
import Web3 from './web3'

export default {
    name: 'Technologies',
    components: {
        Javascript,
        Python,
        Ruby, 
        Go,
        C,
        Cplusplus,
        Databases,
        Mobile,
        Other,
        Htmlcss,
        Web3
    },
    data: function() {
        let height = 175;
        let controls = true;
        switch(this.$isMobile()) {
            case true: 
                height = 300;
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