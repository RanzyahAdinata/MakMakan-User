<template>
<div class="card card-product" style="box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);">
  <img :src=" './assets/images/' + product.gambar" class="card-img-top" alt="Best Foods">
  <div class="card-body">
    <h5 class="card-title"><strong>{{ product.nama }}</strong></h5>
    <p class="card-text"><em>Rp.{{ product.harga }}</em> /porsi</p>
    <router-link class="btn btn-danger" :to="'/foods/'+ product.id"><b-icon-cart></b-icon-cart> Buat Pesanan</router-link>
  </div>
</div>
</template>

<script>
export default {
    name: 'CardComponent',
    props: ['product']
}
</script>

<style>

</style>