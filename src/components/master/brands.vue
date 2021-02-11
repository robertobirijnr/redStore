<template>
    <div class="brands">
        <div class="small-container">
             <h1 class="title">Our Brands</h1>
            <div class="main-row">
                <div class="main-col-5">
                    <img src="../../assets/images/logo-godrej.png" alt="">
                </div>
                <div class="main-col-5">
                    <img src="../../assets/images/logo-oppo.png" alt="">
                </div>
                <div class="main-col-5">
                    <img src="../../assets/images/logo-coca-cola.png" alt="">
                </div>
                <div class="main-col-5">
                    <img src="../../assets/images/logo-paypal.png" alt="">
                </div>
                <div class="main-col-5">
                    <img src="../../assets/images/logo-philips.png" alt="">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style  scoped>
.brands{
    margin: 100px auto;
}

.main-col-5{
    width: 160px;
}

.main-col-5 img{
    width: 100%;
    cursor: pointer;
}

.title{
    margin: 0 auto 60px;
    position: relative;
    line-height: 60px;
    color: #555;
}
</style>