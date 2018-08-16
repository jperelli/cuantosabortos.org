<template>
  <span>{{Math.trunc(val/10)}}<span style="position:relative;overflow:hidden;display:inline-block;line-height:80%">
    <span style="opacity:0">0</span>
    <span :style="'position:absolute; right:0; top:-'+(val-Math.trunc(val))*100+'%'">
      <span>
        {{Math.trunc((val/10-Math.trunc(val/10))*10)}}
      </span>
      <span>
        {{(Math.trunc((val/10-Math.trunc(val/10))*10)+1)%10}}
      </span>
    </span>
  </span></span>
</template>

<script>
export default {
  name: 'Odometer',
  props: {
    val: Number
  }
}
</script>

<style scoped>
</style>
