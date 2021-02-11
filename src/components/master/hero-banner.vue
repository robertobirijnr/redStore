<template>
    <div class="banner">
        <div class="banner-col">
            <h1>Give Your Workout <br> A New Style!</h1>
            <p>Success isn't always about greatness. it's about consistency.
                Consistency <br> hard work gains Success. Greatness will come
            </p>
            <router-link to="/" class="hero-btn">Explore Now!</router-link>
        </div>
        <div class="banner-col">
            <img src="../../assets/images/image1.png" alt="">
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style  scoped>
.banner{
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: space-around;
}

.banner-col{
    flex-basis: 50%;
    min-width: 300px;
}

.banner-col img{
    max-width: 100%;
    padding-right: 50px 0;
}

.banner-col h1{
    font-size: 50px;
    line-height: 60px;
    margin: 25px 0;
}
.hero-btn{
    display: inline-block;
    background: #ff523b;
    color: #fff;
    padding: 8px 30px;
    margin: 30px 0;
    border-radius: 30px;
}




</style>