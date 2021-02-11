<template>
    <div class="footer">
        <div class="container">
            <div class="main-row">
                <div class="footer-col-1">
                    <h3>Download Our App</h3>
                    <p>Download App for Android and ios mobile phone.</p>
                    <div class="app-logo">
                        <img src="../../assets/images/play-store.png" alt="">
                         <img src="../../assets/images/app-store.png" alt="">
                    </div>
                </div>
                 <div class="footer-col-2">
                    <img src="../../assets/images/logo-white.png" alt="">
                    <p>Our Purpose is To Sustainably Make the Pleasure and Benefites of Sports Accessible to the Many</p>
                </div>
                 <div class="footer-col-3">
                    <h3>Useful Links</h3>
                   <ul>
                       <li>Coupons</li>
                       <li>Blog Post</li>
                       <li>Return Policy</li>
                       <li>Join Affiliate</li>
                   </ul>
                </div>
                <div class="footer-col-4">
                    <h3>Follow us</h3>
                   <ul>
                       <li>Facebook</li>
                       <li>Twitter</li>
                       <li>Instagram</li>
                       <li>Youtube</li>
                   </ul>
                </div>
            </div>
            <hr>
            <p class="copyright">Copyright 2021 - RedStore</p>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style  scoped>
.footer{
    background: #000;
    color: #8a8a8a;
    font-size: 14px;
    padding: 60px 0 20px;
}

.footer p{
    color: #8a8a8a;
}

.footer h3{
    color: #fff;
    margin-bottom: 20px;
}

.footer-col-1, .footer-col-2, .footer-col-3, .footer-col-4{
    min-width: 250px;
    margin-bottom: 20px;
}

.footer-col-1{
    flex-basis: 30px;
}

.footer-col-2{
    flex: 1;
    text-align: center;
}

.footer-col-2 img{
    width: 180px;
    margin-bottom: 20px;
}

.footer-col-3, .footer-col-4{
    flex-basis: 12px;
    text-align: center;
}

ul{
    list-style-type: none;
}

.app-logo{
    margin-top: 20px;
}

.app-logo img{
    width: 120px;
}

.footer hr{
    border: none;
    background: #b5b5b5;
    height: 1px;
    margin: 20px 0;
}

.copyright{
    text-align: center;
}
</style>