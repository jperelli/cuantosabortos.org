<template>
  <div id="muertes">
    <div>
      <div class="title">2 muertes confirmadas</div>
      <br>
      <br>
    </div>
    <div>
      <div class="caption"><a href="https://www.facebook.com/1104059222994294/photos/a.1104302442969972/1927402800659928/?type=3&theater">1. Elizabeth, 14 de agosto de 2018, San Martín (Buenos Aires)</a></div>
      <br>
    </div>
    <div>
      <div class="caption"><a href="https://www.facebook.com/1104059222994294/photos/a.1175837122483170/1930925753640966/?type=3&theater">2. Soledad, 16 de agosto de 2018, Pilar (Buenos Aires)</a></div>
      <br>
    </div>
    <div class="caption2">
      <a href="/">volver</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'muertes'
}
</script>

<style lang="scss">
@font-face {
  font-family: 'Bitter';
  src: url('../public/icomoon.ttf') format('truetype');
}
@keyframes vary
{
  0%   {background:#1A9837;}
  50%  {background:#00ABD6;}
  100%   {background:#1A9837;}
}
body {
  margin: 0;
  animation: vary 20s infinite;
  background: #1A9837;
  div {
    color: #EEE;
    font-family: 'Bitter', 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    text-align: center;
    .title {
      font-size: 8vh;
    }
    .caption {
      font-size: 4vh;
      opacity: 0.7;
    }
    .caption2 {
      opacity: 0.4;
      a {
        color: #EEE;
        text-decoration: none;
      }
    }
  }
  #app {
    height: 100vh;
    display: grid;
    align-items: center;
    justify-items: center;
  }
}
@media (max-width: 500px) {
  body {
    div {
      .number {
        font-size: 6vh;
      }
    }
  }
}
</style>
