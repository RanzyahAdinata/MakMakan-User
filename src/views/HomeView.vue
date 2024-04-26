<template>
  <div class="home">
    <NavbarComponent />
    <div class="container">
      <MenuComponent />
      <div class="row mt-4">
        <div class="best col">
          <h2>Our Favorite <strong>Foods</strong></h2>
        </div>
        <div class="col">
          <div class="lihat-semua">
            <router-link to="/foods" class="btn btn-danger float-right"
              ><b-icon-eye></b-icon-eye> Lihat Semua
            </router-link>
          </div>
        </div>
      </div>
      <div class="best-food">
        <div class="row mb-4">
          <div
            class="col-md-4 mt-4"
            v-for="product in products"
            :key="product.id">
            <CardComponent :product="product"></CardComponent>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import NavbarComponent from "@/components/NavbarComponent.vue";
import MenuComponent from "@/components/MenuComponent.vue";
import CardComponent from "@/components/CardComponent.vue";
import axios from "axios";

export default {
  name: "HomeView",
  components: {
    NavbarComponent,
    MenuComponent,
    CardComponent,
  },
  data() {
    return {
      products: [],
    };
  }, 
  methods: {
    setProducts(data) {
      this.products = data;
    },
  },
  mounted() {
    axios
      .get("http://localhost:3000/best-products")
      .then((response) => this.setProducts(response.data))
      .catch((error) => console.log(error))
  },
};
</script>
