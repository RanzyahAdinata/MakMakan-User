<template>
<div class="checkout">
  <NavbarComponent/>
  <div class="container">
  <div class="row justify-content-center mt-5">
  <div class="col text-center">
  <h2><strong>Pesanan Berhasil!</strong></h2>
  <hr>
  <h4>Pesanan akan segara diperoses dan diantar ke meja Anda <br> Silhahkan Menunggu</h4>
  <img src="assets/images/Eat.png" width="300"/>
  </div>
  </div>
  </div>
  </div>
</template>

<script>
import NavbarComponent from "@/components/NavbarComponent.vue";
export default {
    name: "CheckoutView",
    components:{
        NavbarComponent,
    },
}
</script>

<style>

</style>