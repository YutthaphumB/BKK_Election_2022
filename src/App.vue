<template>
  <div>
    <NavBarVue />
    <!-- <TestNavVue />-->
    <body class="d-flex flex-column min-vh-100 bg-page">
      <router-view />
    </body>
    <!-- <TestMetaVue />-->
    <FooTerVue />
  </div>
</template>

<script>
import FooTerVue from "./components/Nav-Foot/FooTer.vue";
import NavBarVue from "./components/Nav-Foot/NavBar.vue";
import { mapActions } from "vuex";

//import TestMetaVue from "./components/Test/TestMetaVue.vue";
//import TestNavVue from "./components/TestNav.vue";

export default {
  name: "App",
  components: {
    NavBarVue,
    FooTerVue,
    //TestNavVue,
    //TestMetaVue
  },
  methods: {
    ...mapActions({
      getPostCandidate: "candidate/getPostCandidate",
      getPostVoter: "voter/getPostVoter",
    }),
  },
  mounted() {
    this.getPostCandidate(), this.getPostVoter();
  },
};
</script>


<style >
@import url("https://fonts.googleapis.com/css2?family=Kanit:wght@300&display=swap");
* {
  font-family: "Kanit", sans-serif;
}
.bg-page {
  background: rgb(255, 222, 138);
  background: linear-gradient(
    0deg,
    rgba(255, 222, 138, 1) 0%,
    rgba(255, 247, 228, 1) 73%
  );
}
</style>
