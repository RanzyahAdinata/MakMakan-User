<template>
  <div class="desktop">
    <!-- desktop  -->
    <div class="d-none d-md-block">
      <div class="row">
        <div class="col-md-6">
          <div class="deskripsi-landing">
            <h2 class="">
              <strong>Makanan Lezat dan Nikmat </strong> <br />
              Khas Nusantara
            </h2>
            <p>Apa makanan favoritmu, segera pesan sekarang juga!</p>
            <router-link class="btn btn-pesan" to="/foods">
              Pesan Sekarang |
              <strong><b-icon-arrow-right></b-icon-arrow-right></strong>
            </router-link>
          </div>
        </div>
        <div class="col-md-6">
          <img
            class="ilustrasi ml-0"
            src="../assets/ilustrasi.png"
          />
        </div>
      </div>
    </div>

    <!-- mobile -->
    <div class="d-sm-block d-md-none">
      <div class="row">
        <div class="col-md-6 text-end mb-3">
          <!-- Menambahkan class text-end untuk menggeser image ke kanan -->
          <img
            class="ilustrasi ml-0"
            src="../assets/ilustrasi.png"
            alt="Deliciuos"
          />
        </div>
        <div class="col-md-6">
          <div class="deskripsi-landing">
            <h2 class="">
              <strong>Makanan Lezat dan Nikmat </strong> <br />
              Khas Nusantara
            </h2>
            <p>Apa makanan favoritmu, segera pesan sekarang juga!</p>
            <router-link class="btn btn-pesan" to="/foods">
              Pesan Sekarang |
              <strong><b-icon-arrow-right></b-icon-arrow-right></strong>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>