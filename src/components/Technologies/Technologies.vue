<template>
    <div id="technologies">
        <carousel-3d :space="850" :animationSpeed="750" :inverse-scaling="1000" :width="600" :height="200" :perspective="55">
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
            <slide :index="5" class="slide">
                <Htmlcss />
            </slide>
            <slide :index="6" class="slide">
                <Cplusplus />
            </slide>
            <slide :index="7" class="slide">
                <Databases />
            </slide>
            <slide :index="8" class="slide">
                <Mobile />
            </slide>
            <slide :index="9" class="slide">
                <Other /> 
            </slide>
        </carousel-3d>
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
        Htmlcss
    },
    data: function() {
        var is_mobile = false;

        if( document.querySelector('#screen').css('display')=='none') {
            is_mobile = true;       
        }

        // now I can use is_mobile to run javascript conditionally

        if (is_mobile == true) {
            //Conditional script here
        }
        return {

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