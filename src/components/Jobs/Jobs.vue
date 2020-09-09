<template>
    <div id="jobs" >
        <carousel-3d :space="850" :animationSpeed="750" :inverse-scaling="1000" :width="600" :height="200" :perspective="55">
            <slide :index="0" class="slide">
               <JobCard name="Flight Deck (Royal Canadian Air Force)" role="Software Engineering Intern" logo="rcaf" location="Waterloo, ON" website="https://theflightdeck.ca/"/>
            </slide>
            <slide :index="1" class="slide">
                <JobCard name="Tamvoes Health Inc." role="Software Engineering Intern" logo="tamvoes" location="Waterloo, ON" website="https://tamvoes.com/"/>
            </slide>
            <slide :index="2" class="slide">
                <JobCard name="ETHGlobal" role="Full Stack Developer" logo="ethglobal" location="Remote" website="https://ethwaterloo.com/"/>
            </slide>
            <slide :index="3" class="slide">
                <JobCard name="Edmonds Engineered" role="Founder" logo="ee" location="Vancouver, BC" website="https://www.edmondsengineered.com/#/" />
            </slide>
        </carousel-3d>
    </div>    
</template>

<script>
import JobCard from './JobCard'

export default {
    name: 'Jobs',
    components: {
        JobCard
    }
}
</script>

<style scoped>
    .slide {
        background-color: white;
        border: none;
    }
</style>