<template>
  <div class="bg-page" >
    <br />
    <h4 class="n">MEET THE CANDIDATES</h4>
    <h1 class="n"><b class="t">ผู้สมัครผู้ว่าฯ กทม.ทั้งหมด ( 31 คน )</b></h1>
    <br>
    <h5 class="n">ทำความรู้จักผู้สมัครผู้ว่าฯ กทม.</h5>
    <br />
    <ModalCan
      v-for="item in sortedcandidate"
      :key="item.num"
      :name="item.name"
      :imgCan="item.imgCan"
      :party="item.party"
      :num="item.num"
      :policy="item.policy"
      :slogan="item.slogan"
    />
    <div class="container">
      <!--<div class="row row-cols-1 row-cols-md-4 g-3 center">-->
      <div class="row">
        <CardCandidate
          v-for="item in sortedcandidate"
          :key="item.num"
          :name="item.name"
          :imgCan="item.imgCan"
          :party="item.party"
          :num="item.num"
        />
      </div>
    </div>

    <br />
  </div>
</template>

<script>
import CardCandidate from "./CardCandidate.vue";
import ModalCan from "./ModalCan.vue";
import { mapState } from "vuex";

export default {
  name: "CandidatePage",
  components: {
    CardCandidate,
    ModalCan,
  },
  data() {
    return {
      
    };
  },
  computed: {
    sortedcandidate() {
      return this.candidate.slice().sort((a, b) => a.num - b.num);
    },
    ...mapState({
      candidate: (store) => store.candidate.candidateValue,
    }),
  },
};
</script>

<style scoped>
.n{
  text-align: center;
}
.t {
  
  color: #000000;
  display: inline;
  padding: 10px;
  border-bottom: 5px solid #000000;
}

</style>