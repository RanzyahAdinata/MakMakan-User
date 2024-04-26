<template>
  <div id="app">
    <router-view/>
    <FooterComponent></FooterComponent>
  </div>
</template>

<script>
import FooterComponent from "@/components/FooterComponent.vue"

export default{
  components: {
    FooterComponent,
}
}
</script>