<template>
    <div id="header" class="d-flex flex-column align-items-center justify-content-center">
        <span class="name"></span>
        <div class="d-flex flex-column align-items-start" id="termynal" data-termynal data-ty-cursor="ishanghimire">
            <span class="input" data-ty="input">software engineer at the university of waterloo</span>
            <span class="input" data-ty="input" data-ty-prompt=">>>" >currently looking for a winter 2021 internship</span>
            <span class="input" data-ty="input">i love</span>
            <span class="input" data-ty="input" data-ty-prompt="❤️" >solving complex problems that minimize labour to output ratios</span>
            <span class="input" data-ty="input" data-ty-prompt="❤️" >bringing tech to the excluded</span>
            <span class="input" data-ty="input" data-ty-prompt="❤️" >building solutions in novel areas made from linking fields</span>
            <span class="input" data-ty="input">head to <a href="https://ishanghimire.life">ishanghimire.life</a> to see what I do outside of tech!</span>
            <span class="input" data-ty="input">🚧 warning 🚧: site currently under construction, install .life</span>
            <span class="input" data-ty="progress" data-ty-progressPercent="24"></span>
        </div>
    </div>    
</template>

<script>
export default {
    name: 'Header'
}

 //Header
        //Miminimizing labour to output ratios
       // To learn more about me head on over to ishanghimire.life construction icon WARNING currently under construction
</script>

<style scoped>
    .name {
        font-weight: 700;
        
    }

    #header {
        height: 100vh;
        top: 0;
        left: 0;
    }
    a {
        text-decoration: none;
        color: inherit;
    }
    a :hover {
        text-decoration: none;
        color: inherit;  
    }

</style>

