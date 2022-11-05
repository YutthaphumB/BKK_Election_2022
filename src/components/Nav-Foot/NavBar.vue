<template>
  <!--
  <nav
    class="navbar sticky-top navbar-expand-sm navbar-dark p-1"
    id="headerNav"
  >
    <div class="container-fluid">
      <router-link to="/" class="navbar-brand d-block d-lg-none" href="#">
        <img
          src="https://cdn-icons-png.flaticon.com/512/927/927295.png"
          height="60"
        />
      </router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav mx-auto">
          <li class="nav-item">
            <router-link
              to="/"
              class="nav-link mx-2"
              aria-current="page"
              href="#"
              ><p>หน้าหลัก</p>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/candidatepage" class="nav-link mx-2" href="#"
              ><p>ผู้สมัคร</p>
            </router-link>
          </li>
          <li class="nav-item d-none d-lg-block">
            <router-link to="/" class="nav-link mx-2" href="#">
              <img
                src="https://cdn-icons-png.flaticon.com/512/927/927295.png"
                height="60"
              />
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/ShowVoteRegis" class="nav-link mx-2" href="#"
              ><p>ลงคะแนน</p>
            </router-link>
          </li>
          <li class="nav-item">
            <a class="nav-link mx-2" href="#"><p>ติดต่อเรา</p> </a>
          </li>
          <li>
            <MetaMaskVue />
          </li>
        </ul>
      </div>
    </div>
  </nav>
  -->

  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <router-link to="/" class="nav-link" href="#">
        <img
          src="../../assets/logo.png"
          height="40"
        />
      </router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
      <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link to="/" class="nav-link mx-2" 
              >หน้าหลัก
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/candidatepage" class="nav-link mx-2" 
              >ข้อมูลผู้สมัคร
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/ShowVoteRegis" class="nav-link mx-2" 
              >ลงคะแนน
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/ScoreVote" class="nav-link mx-2" >ผลการเลือกตั้ง</router-link>
          </li>
          <li class="nav-item" v-if = "String(currentAccount).toLowerCase() == String(manager).toLowerCase()">
            <router-link to="/Admin" class="nav-link mx-2" >จัดการสิทธิ์</router-link>
          </li>
        </ul>
        <form class="d-flex">
          <MetaMaskVue />
        </form>
      </div>
    </div>
  </nav>

</template>

<script>
import MetaMaskVue from "../MetaMask.vue";
import { mapState } from "vuex";

export default {
  name: "NavBar",
  components: {
    MetaMaskVue,
  },
  computed: {
    ...mapState({
      currentAccount: (store) => store.dapp.currentAccount,
      manager: (store) => store.dapp.manager,
    }),
  },
};
</script>

<style scoped>
nav {
  background-color: #274472;
}
.nav-link {
  font-size: 1.3rem;
}
.nav-active-link {
  font-weight: bold;
}
</style>