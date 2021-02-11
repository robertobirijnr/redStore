<template>
    <div class="container">
        <div class="navbar">
            <div class="logo">
                <img src="../../assets/images/logo.png" width="200px" alt="">
            </div>
            <nav>
                <input type="checkbox"  id="check">
                <label for="check" class="checkbtn">
                    <img src="../../assets/images/menu.png" class="menu-icon">
                </label>
                <ul>
                    <li><router-link to="/" >Home</router-link></li>
                    <li><router-link to="/" >Products</router-link></li>
                    <li><router-link to="/" >About</router-link></li>
                    <li><router-link to="/" >Contact</router-link></li>
                    <li><router-link to="/" >Account</router-link></li>
                    <li><router-link to="/"><img src="../../assets/images/cart.png" width="30px" class="cart" height="30px" alt=""></router-link></li>
                </ul>
            </nav>
            
            
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                MenuItems: false
            }
        },
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

.cart{
    padding-top: 10px;
}

.checkbtn{
    float: right;
    margin-right: 40px;
    cursor: pointer;
    display: none;
}
.menu-icon{
    width: 28px; 
       
}

#check{
    display: none;
}
@media (max-width:800px){
    .checkbtn{
        display: block !important;
    }
    nav ul{
        position: fixed;
        width: 100%;
        height: 50vh;
        background: #f85139;
        top: 80px;
        left: -100%;
        text-align: center;
        transition: all .5s;
    }
    nav ul li{
        display: block;
        margin-bottom: 30px;
        font-size: 20px;
        padding-top: 10px;
        
    }
    .cart{
    display: none;
    }
    .logo img{
        float: left !important;
        margin-right: 20px;
    }

    a{
        color: #ffffff !important;
    }

    #check:checked ~ ul{
        left: 0;
    }
}

</style>