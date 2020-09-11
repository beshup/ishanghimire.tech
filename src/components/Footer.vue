<template>
    <div id="footer" class="mt-3 mb-3 d-flex flex-column">
        <span class="locationfooter">Waterloo, ON, Canada</span>
        <span class="footertext">© 2020 Ishan Ghimire</span>
        <a class="aHover" @click="scrollUp"><font-awesome-icon class="arrow mt-1" icon="caret-up" size="3x" /></a>
    </div>    
</template>

<script>
export default {
    name: 'Footer',
    methods: {
        scrollUp: function() {
            window.scrollTo(0, 0)
        }
    }
}
</script>

<style scoped>
    .footertext {
        color: grey;
        font-size: 10px;
    }

    .locationfooter {
        color: grey;
        font-size: 15px;
    }

      .arrow {
        text-decoration: none;
        color: black;
        opacity: 0.5;
    }

    .arrow:hover {
        opacity: 1;
    }
    
    .aHover:hover {
        cursor: pointer;
    }
    
    @media only screen and (min-width: 1440px){
        #footer { margin-bottom: 90px !important; }
    }
</style>