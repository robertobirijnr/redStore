<template>
  <div>
    <router-view/>
  </div>
</template>

<script>
export default {

}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;400;500;600;700&display=swap');

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body{
font-family: 'Poppins', sans-serif;
}

.main-row{
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: space-around;
}

.container{
    max-width: 1300px;
    margin: auto;
    padding-left: 25px;
    padding-right: 25px;
}

p{
  color: #555;
}

a{
    text-decoration: none;
}

.header{
  background: radial-gradient(#fff,#ffd6d6);
}

.small-container{
  max-width: 1080px;
  margin: auto;
  padding-left:25px;
  padding-right: 25px;
}
</style>
