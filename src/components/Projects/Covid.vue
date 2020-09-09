<template>
    <div class="d-flex flex-column align-items-center" id="Covid">
        <img class="mb-3 cursor" style="max-width: 120px;" src="../../assets/covidmytweetslogo.jpg">
        <span style="font-weight: bold">Covid My Tweets</span>
        <span>Geographic Covid-19 Sentiment Visualization</span>
        <span class="location">Top Project at RU hacks</span>
        <span>
            <a href="https://github.com/beshup/PredictCovid"><img class="mr-1" style="width: 18px;" src="../../assets/githublogo.png"/> </a>
            <a href="https://devpost.com/software/covid-my-tweets-hz30cv"><img style="width: 20px;" src="../../assets/devpost.svg"></a>
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