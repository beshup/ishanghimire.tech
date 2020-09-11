<template>
    <div class="d-flex flex-column align-items-center" id="Covid">
        <img class="mb-3" style="max-width: 120px;" src="../../assets/covidmytweetslogo.jpg">
        <span style="font-weight: bold">Covid My Tweets</span>
        <span class="text-center">Geographic Covid-19 Sentiment Visualization</span>
        <span class="location">Top Project at RU hacks</span>
        <span class="mt-1">
            <a target="_blank" href="https://github.com/beshup/PredictCovid"><img class="mr-2 githubIcon" style="width: 24px;" src="../../assets/githublogo.png"/> </a>
            <a target="_blank" href="https://devpost.com/software/covid-my-tweets-hz30cv"><img style="width: 27px;" class="devpostIcon" src="../../assets/devpost.svg"></a>
        </span>

    </div>    
</template> 

<script>

export default {
    name: 'Covid'
}
</script>

<style scoped>
    .cursor {
        cursor: pointer
    }
    .location {
        font-size: 14px;
        font-weight: 550;
    }
</style>