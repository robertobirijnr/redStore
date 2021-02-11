<template>
    <div class="category">
       <div class="small-container">
            <div class="main-row">
           <div class="cat-3">
                <img src="../../assets/images/category-1.jpg" alt="">
           </div>
            <div class="cat-3">
             <img src="../../assets/images/category-2.jpg" alt="">
        </div>
        <div class="cat-3">
             <img src="../../assets/images/category-3.jpg" alt="">
        </div>
        </div>
        </div> 
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
    .category{
        margin: 70px 0;
        
    }
    .cat-3{
        flex-basis: 30%;
        min-width: 250px;
        margin-bottom: 30px;
    }

    .cat-3 img{
        width: 100%;
    }

    .small-container{
        max-width: 1080px;
        margin: auto;
        padding-left:25px;
        padding-right: 25px;
    }
</style>