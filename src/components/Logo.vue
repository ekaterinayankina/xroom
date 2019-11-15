<template>
  <g-link to="/">
    <g-image v-if="color == 'black'" alt="Xroom" src="~/assets/img/logo.png" width="140px"/>
    <g-image v-else alt="Xroom" src="~/assets/img/logo_black.png" width="140px"/>
  </g-link>
</template>
<script>
  import Logo from "./Logo";
  import Menu from "./Menu";
  export default {
    props: {
      color: {
        type: [String, Number],
        required: true
      }
    }
  }
</script>
