<template>
  <div class="food-detail">
    <NavbarComponent />
    <div class="container">
      <!-- buat breadcrumb compass -->
      <div class="row mt-2">
        <div class="col">
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item">
                <router-link to="/" class="text-dark">Home</router-link>
              </li>
              <li class="breadcrumb-item">
                <router-link to="/foods" class="text-dark">Foods</router-link>
              </li>
              <li class="breadcrumb-item active" aria-current="page">
                Food Detail
              </li>
            </ol>
          </nav>
        </div>
      </div>

      <div class="row mt-2">
        <div class="col-md-6 mb-4">
          <img
            :src="'../assets/images/' + product.gambar"
            class="img-fluid shadow"
          />
        </div>
        <div class="col">
          <h2>
            <strong>{{ product.nama }}</strong>
          </h2>
          <h6 style="color: green">
            Harga Porsi : <strong>Rp.{{ pesan.jumlah_pemesanan ? product.harga * pesan.jumlah_pemesanan : product.harga }}</strong>
          </h6>
          <hr />
          <form class="mt-4" v-on:submit.prevent>
            <div class="form-group">
              <label for="jumlah_pemesanan">Jumlah Pesan</label>
              <input
                type="number"
                class="form-control"
                v-model="pesan.jumlah_pemesanan"
                min="0"
                value="0"
              />
            </div>
            <div class="form-group">
              <label for="keterangan">Keterangan </label>
              <textarea
                v-model="pesan.keterangan"
                class="form-control"
                placeholder="Keterangan Pesanan (contoh: Pedas, Tidak Pedas)"
              ></textarea>
            </div>

            <button type="submit" class="btn btn-danger" @click="pemesanan">
              <b-icon-cart></b-icon-cart> Pesan
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import NavbarComponent from "../components/NavbarComponent.vue";

export default {
  name: "DetailView",
  components: {
    NavbarComponent,
  },

  data() {
    return {
      product: {},
      pesan: {},
    };
  },

  methods: {
    setProducts(data) {
      this.product = data;
    },
    pemesanan() {
      if (this.pesan.jumlah_pemesanan > 0) {
        this.pesan.products = this.product;
        axios
          .post("http://localhost:3000/keranjangs", this.pesan)
          .then(() => {
            this.$router.push({ path: "/keranjang"})
            this.$toast.success("Sukses Ditambahkan ke Keranjang", {
              type: "success",
              position: "bottom-right",
              duration: 3000,
              dismissible: true,
            });
          })
          .catch((err) => console.log(err));
      } else {
        this.$toast.error("Jumlah pesanan harus diisi ! ", {
          type: "error",
          position: "bottom-right",
          duration: 3000,
          dismissible: true,
        });
      }
    },
  },
  mounted() {
    axios
      .get("http://localhost:3000/products/" + this.$route.params.id)
      .then((response) => this.setProducts(response.data))
      .catch((error) => console.log(error));
  },
};
</script>

<style>
</style>