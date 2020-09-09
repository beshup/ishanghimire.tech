<template>
    <div class="d-flex flex-column align-items-center" id="Covid">
        <img class="mb-3 cursor" style="max-width: 90px;" :src="covidmytweetslogo">
        <span style="font-weight: bold">Covid My Tweets</span>
        <span>Geographic Covid-19 Sentiment Visualization</span>
        <div>
            <a href="https://github.com/beshup/PredictCovid"><font-awesome-icon class="mt-1" icon="github" /></a>
            <a href="https://devpost.com/software/covid-my-tweets-hz30cv"><img style="max-width: 20px;" :src="devpostlogo"></a>
        </div>

    </div>    
</template> 

<script>
import covidmytweetslogo from '../../assets/covidmytweetslogo.jpg'
import devpostlogo from '../../assets/devpost.svg'

export default {
    name: 'Covid',
    components: {
        covidmytweetslogo,
        devpostlogo
    }
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