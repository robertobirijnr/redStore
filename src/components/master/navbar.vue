<template>
    <div class="container">
        <div class="navbar">
            <div class="logo">
                <img src="../../assets/images/logo.png" width="200px" alt="">
            </div>
            <nav>
                <ul>
                    <li><router-link to="/" >Home</router-link></li>
                    <li><router-link to="/" >Products</router-link></li>
                    <li><router-link to="/" >About</router-link></li>
                    <li><router-link to="/" >Contact</router-link></li>
                    <li><router-link to="/" >Account</router-link></li>
                </ul>
            </nav>
            <img src="../../assets/images/cart.png" width="30px" height="30px" alt="">
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style  scoped>
.navbar{
    display: flex;
    align-items: center;
    padding: 20px;
}

nav{
    flex: 1;
    text-align: right;
}

nav ul{
    display: inline-block;
    list-style: none;
}

nav ul li{
    display: inline-block;
    margin-right: 20px;
}

a{
    text-decoration: none;
    color: #555;
}

</style>