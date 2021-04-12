<template>
    <div id="jobs">
        <hr class="line">
        <carousel-3d class="mb-1" :space="850" :animationSpeed="750" :inverse-scaling="1000" :width="400" :height="heightForDevice" :perspective="55" :controlsVisible="controls" :clickable="false">
            <slide :index="0" class="slide">
                <SwipeInfo />
            </slide>
            <slide :index="1" class="slide">
                <JobCard name="Shopify" role="Infrastructure Engineering Intern" logo="shopify" location="Remote" website="https://shopify.com/"/>
            </slide>
            <slide :index="2" class="slide">
               <JobCard name="Flight Deck (Royal Canadian Air Force)" role="Software Engineering Intern" logo="rcaf" location="Waterloo, ON" website="https://theflightdeck.ca/"/>
            </slide>
            <slide :index="3" class="slide">
                <JobCard name="Tamvoes Health Inc." role="Software Engineering Intern" logo="tamvoes" location="Waterloo, ON" website="https://tamvoes.com/"/>
            </slide>
            <slide :index="4" class="slide">
                <JobCard name="ETHGlobal" role="Software Developer" logo="ethglobal" location="Remote" website="https://ethglobal.co/"/>
            </slide>
            <slide :index="5" class="slide">
                <JobCard name="Edmonds Engineered" role="Founder" logo="ee" location="Vancouver, BC" website="https://www.edmondsengineered.com/#/" />
            </slide>
        </carousel-3d>
    </div>    
</template>

<script>
import JobCard from './JobCard'
import SwipeInfo from './SwipeInfo'

export default {
    name: 'Jobs',
    components: {
        JobCard,
        SwipeInfo
    },
    data: function() {
        let height = 220;
        let controls = true
        switch(this.$isMobile()) {
            case true: 
                height = 270;
                controls = false
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