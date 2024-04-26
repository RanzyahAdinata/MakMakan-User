<template>
  <div class="foods">
    <NavbarComponent />
    <div class="container">
      <div class="row mt-4">
        <div class="col">
          <h2>Daftar <strong> Makanan</strong></h2>
        </div>
      </div>

      <div class="row mt-3">
        <div class="col md-4">
          <div class="input-group mb-3">
            <input
             v-model="search"
              type="text"
              class="form-control"
              placeholder="Cari makanan..."
              aria-label="Username"
              aria-describedby="basic-addon1"
              style="font-style: italic; font-weight:200; font-weight: 200;"
              @keyup="searchFood"
            />
            <span class="input-group-text" id="basic-addon1"><b-icon-search></b-icon-search></span>
          </div>
        </div>
      </div>
      <div class="row mb-3">
        <div
          class="col-md-4 mt-4"
          v-for="product in filteredProducts"
          :key="product.id"
        >
          <CardComponent :product="product"></CardComponent>
        </div>
        <div v-if="filteredProducts.length === 0" class="cant-find md-4">
          <p>Maaf makanan yang kamu cari sepertinya belum tersedia disini.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavbarComponent from "../components/NavbarComponent.vue";
import CardComponent from "@/components/CardComponent.vue";
import axios from "axios";

export default {
  name: "FoodsView",
  components: {
    NavbarComponent,
    CardComponent,
  },
  data() {
    return {
      products: [],
      search:'',
    };
  },
  computed: {
    filteredProducts() {
      return this.products.filter(product => {
        return product.nama.toLowerCase().includes(this.search.toLowerCase());
      });
    }
  },
  methods: {
    setProducts(data) {
      this.products = data;
    },
    searchFood(){
      axios
      .get("http://localhost:3000/products")
      .then((response) => this.setProducts(response.data))
      .catch((error) => console.log(error));
    }
  },
  mounted() {
    axios
      .get("http://localhost:3000/products")
      .then((response) => this.setProducts(response.data))
      .catch((error) => console.log(error));
  },
};
</script>

<style>
</style>