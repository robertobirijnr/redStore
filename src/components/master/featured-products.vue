<template>
    <div class="small-container">
        <h1 class="title">Latest Products</h1>
        <div class="main-row">
            <div class="main-col-4">
                <img src="../../assets/images/product-1.jpg" >
                <h4>Red Printed T-shirt</h4>
                <p>GHc 50.00</p>
            </div>
            <div class="main-col-4">
                <img src="../../assets/images/product-2.jpg" >
                <h4>Red Printed T-shirt</h4>
                <p>GHc 50.00</p>
            </div>
            <div class="main-col-4">
                <img src="../../assets/images/product-3.jpg" >
                <h4>Red Printed T-shirt</h4>
                <p>GHc 50.00</p>
            </div>
            <div class="main-col-4">
                <img src="../../assets/images/product-4.jpg" >
                <h4>Red Printed T-shirt</h4>
                <p>GHc 50.00</p>
            </div>
        </div>
        <h1 class="title">Featured Products</h1>
        <div class="main-row">
            <div class="main-col-4">
                <img src="../../assets/images/product-5.jpg" >
                <h4>Red Printed T-shirt</h4>
                <p>GHc 50.00</p>
            </div>
            <div class="main-col-4">
                <img src="../../assets/images/product-6.jpg" >
                <h4>Red Printed T-shirt</h4>
                <p>GHc 50.00</p>
            </div>
            <div class="main-col-4">
                <img src="../../assets/images/product-7.jpg" >
                <h4>Red Printed T-shirt</h4>
                <p>GHc 50.00</p>
            </div>
            <div class="main-col-4">
                <img src="../../assets/images/product-8.jpg" >
                <h4>Red Printed T-shirt</h4>
                <p>GHc 50.00</p>
            </div>
        </div>
        <div class="main-row">
            <div class="main-col-4">
                <img src="../../assets/images/product-9.jpg" >
                <h4>Red Printed T-shirt</h4>
                <p>GHc 50.00</p>
            </div>
            <div class="main-col-4">
                <img src="../../assets/images/product-10.jpg" >
                <h4>Red Printed T-shirt</h4>
                <p>GHc 50.00</p>
            </div>
            <div class="main-col-4">
                <img src="../../assets/images/product-11.jpg" >
                <h4>Red Printed T-shirt</h4>
                <p>GHc 50.00</p>
            </div>
            <div class="main-col-4">
                <img src="../../assets/images/product-12.jpg" >
                <h4>Red Printed T-shirt</h4>
                <p>GHc 50.00</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style  scoped>
.main-col-4{
    flex-basis: 24%;
    padding: 10px;
    min-width: 200px;
    margin-bottom: 50px;
    transition: transform 0.5s;
}

.main-col-4 img{
    width: 100%;
}
.title{
    margin: 0 auto 60px;
    position: relative;
    line-height: 60px;
    color: #555;
}

h4{
    text-align: center;
}

.main-col-4 p{
    font-size: 15px;
    text-align: center;
}

.main-col-4:hover{
    transform: translateY(-5px);
}
</style>