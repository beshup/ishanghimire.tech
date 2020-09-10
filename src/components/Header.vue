<template>
    <div v-if="$isMobile()" data-aos="zoom-in" data-aos-easing="700" data-aos-duration="1500" class="d-flex flex-column align-items-center justify-content-center">
        <div class="container mt-3 d-flex flex-column align-items-center justify-content-center">
            <div class="container d-flex flex-column align-items-center justify-content-centerr">
                <div class="d-flex flex-column align-items-start mobileT" id="termynal" data-termynal data-ty-cursor="ishanghimire">
                    <span class="input" data-ty="input">software engineer at the university of waterloo</span>
                    <span class="input" data-ty="input" data-ty-prompt=">>>" >currently looking for a winter 2021 internship</span>
                    <span class="input" data-ty="input">i love</span>
                    <span class="input" data-ty="input" data-ty-prompt="❤️" >solving complex problems that minimize labour to output ratios</span>
                    <span class="input" data-ty="input" data-ty-prompt="❤️" >bringing tech to the excluded</span>
                    <span class="input" data-ty="input" data-ty-prompt="❤️" >building solutions in novel areas created by combining fields</span>
                    <span class="input" data-ty="input">head to <a target="_blank" id="aElem" href="https://ishanghimire.life">ishanghimire.life</a> to see what I do outside of tech!</span>
                    <span class="input" data-ty="input">🚧 warning 🚧: site currently under construction</span>
                <!-- <span class="input" data-ty="progress" data-ty-progressPercent="24"></span> -->
                </div>
            </div>
        </div>
        <div class="mt-4">
            <a target="_blank" class="icono" href="https://github.com/beshup"><font-awesome-icon :icon="['fab','github']" class="mr-4 github hover icono" size="3x" /></a>
            <a target="_blank" class="icono" href="/assets/IshanGhimireResumeW2021.pdf"><font-awesome-icon icon="file-alt" class="mr-4 resume hover icono" size="3x" /></a>
            <a target="_blank" class="icono" href="mailto: ighimire@uwaterloo.ca"><font-awesome-icon icon="envelope" class="mail hover icono" size="3x" /></a>
        </div>
    </div> 
    <div v-else id="header" data-aos="zoom-in" data-aos-easing="700" data-aos-duration="1500" class="header d-flex flex-column align-items-center justify-content-center">
        <div class="d-flex flex-column align-items-start" id="termynal" data-termynal data-ty-cursor="ishanghimire">
            <span class="input" data-ty="input">software engineer at the university of waterloo</span>
            <span class="input" data-ty="input" data-ty-prompt=">>>" >currently looking for a winter 2021 internship</span>
            <span class="input" data-ty="input">i love</span>
            <span class="input" data-ty="input" data-ty-prompt="❤️" >solving complex problems that minimize labour to output ratios</span>
            <span class="input" data-ty="input" data-ty-prompt="❤️" >bringing tech to the excluded</span>
            <span class="input" data-ty="input" data-ty-prompt="❤️" >building solutions in novel areas created by combining fields</span>
            <span class="input" data-ty="input">head to <a target="_blank" id="aElem" href="https://ishanghimire.life">ishanghimire.life</a> to see what I do outside of tech!</span>
            <span class="input" data-ty="input">🚧 warning 🚧: site currently under construction</span>
           <!-- <span class="input" data-ty="progress" data-ty-progressPercent="24"></span> -->
        </div>
        <div class="mt-4">
            <a target="_blank" class="icono" href="https://github.com/beshup"><font-awesome-icon :icon="['fab','github']" class="mr-4 github hover icono" size="3x" /></a>
            <a target="_blank" class="icono" href="/assets/IshanGhimireResumeW2021.pdf"><font-awesome-icon icon="file-alt" class="mr-4 resume hover icono" size="3x" /></a>
            <a target="_blank" class="icono" href="mailto: ighimire@uwaterloo.ca"><font-awesome-icon icon="envelope" class="mail hover icono" size="3x" /></a>
        </div>
        <font-awesome-icon class="arrow mt-4" icon="arrow-down" size="lg" />
    </div>   
</template>

<script>
import AOS from 'aos'
//import Termynal from '../assets/js/termynal'


export default {
    name: 'Header',
    created() {
        AOS.init();
     //   var termynal = new Termynal('#termynal', { startDelay: 600 })
  //      termynal.init()
    //    console.log(termynal)
    },
    daata: function() {
        return {
            publicPath: process.env.BASE_URL
        }
    }
}

</script>

<style scoped>
    .name {
        font-weight: 700;
        
    }

    .header {
        height: 100vh;
        top: 0;
        left: 0;
    }

    #termynal {
         box-shadow: 0 10px 16px 0 rgba(0, 0, 0, 0.3), 0 6px 20px 0 rgba(0, 0, 0, 0.25);
        
    }
    #aElem {
        text-decoration: none;
        color: inherit;
    }
    #aElem :hover {
        text-decoration: none;
        color: inherit;  
    }

    .resume {
        color:black;
    }

    .mail {
        color: black
    }

    .icono :hover {
        color: green;
    }
    .arrow {
        text-decoration: none;
        color: gray;
    }
    

    .mobileT {
        font-size: 14px;
    }

</style>

