<template>
  <div id="app">
    <div>
      Desde el rechazo a la Ley de Interrupci&oacute;n Voluntaria del Embarazo el 09/08/2018 02:44 en Argentina pasaron:
      <br>
      <br>
      {{t.d}} D&iacute;as, {{t.h}} Horas, {{t.m}} Minutos, {{t.s}} Segundos
    </div>
    <div>
      <Odometer class="number" :val="abortos"></Odometer>
      <div class="caption">Abortos Clandestinos</div>
    </div>
    <div>
      <Odometer class="number" :val="internaciones"></Odometer>
      <div class="caption">Emergencias en hospitales p&uacute;blicos<br>por abortos clandestinos</div>
    </div>
    <div>
      <div class="number">$ {{costo|digitos}}</div>
      <div class="caption">Costo en emergencias</div>
    </div>
    <div>
      <div class="number">{{Math.trunc(muertes)}}</div>
      <div class="caption">Muertes</div>
    </div>
    <div>
    </div>
    <div class="caption2">
      Valores estimados. Fuentes: <a href="http://www.parlamentario.com/db/000/000660_el_costo_del_aborto_inseguro.pdf">1</a>, <a href="http://chequeado.com/hilando-fino/despenalizacion-del-aborto-que-datos-existen-en-la-argentina/">2</a>. <a href="https://github.com/jperelli/cuantosabortos.org">source code</a>
    </div>
  </div>
</template>

<script>
import Odometer from './components/Odometer.vue'

export default {
  name: 'app',
  components: {
    Odometer
  },
  data() {
    return {
      diffsec: Math.trunc((new Date() - new Date('2018-08-09 02:44')) / 1000),
    }
  },
  computed: {
    costo: function() {
      return this.internaciones * 12000
    },
    abortos: function() {
      const abpersec = (500000 / (365*24*60*60))
      return abpersec * this.diffsec
    },
    internaciones: function() {
      const abpersec = (75063 / (365*24*60*60))
      return abpersec * this.diffsec
    },
    muertes: function() {
      const abpersec = (35 / (365*24*60*60))
      return abpersec * this.diffsec + 1
    },
    t() {
      let delta = this.diffsec;
      const d = Math.floor(delta / 86400);
      delta -= d * 86400;
      const h = Math.floor(delta / 3600) % 24;
      delta -= h * 3600;
      const m = Math.floor(delta / 60) % 60;
      delta -= m * 60;
      const s = Math.trunc(delta % 60);
      return {d, h, m, s}
    }
  },
  filters: {
    digitos(amount) {
      const amt = Number(amount)
      return amt && amt.toLocaleString('es', {minimumFractionDigits:0,maximumFractionDigits:0}) || '0'
    }
  },
  mounted() {
    const step = () => {
      // do something for every frame
      this.diffsec = ( new Date() - new Date('2018-08-09 02:44') ) / 1000
      window.setTimeout(step, 150);
    }
    step()
  }
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
    .number {
      font-size: 10vh;
    }
    .caption {
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
</style>
