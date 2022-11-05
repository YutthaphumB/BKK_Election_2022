<template>
  <div style="background-color: #eef1f4">
    <br />
    <h1 class="n"><b class="t">เลือกตั้งผู้ว่าราชการกรุงเทพมหานคร</b></h1>
    <br />
    <div class="container">
      <!--<div class="row row-cols-1 row-cols-md-4 g-3 center">-->
      <div class="row">
        <VoteCard
          v-for="item in sortedcandidate"
          :key="item.num"
          :name="item.name"
          :imgCan="item.imgCan"
          :party="item.party"
          :num="item.num"
          :selectNum="selectNum"
          @show="selectNumber"
        />
      </div>
    </div>
    <div class="form-check-lg form-switch" style="text-align: center">
      <h3>หมายเลขที่ท่านเลือกคือ : {{ selectNum }}</h3>
      <input class="form-check-input" type="checkbox" v-model="reveal" />&nbsp;
      <label class="form-check-label" for="flexSwitchCheckChecked"
        ><h5>ต้องการให้บันทึกการเลือกผู้สมัครของท่านหรือไม่</h5></label
      >
      <br /><br />
      <button type="button" @click="voting()" class="btn btn-primary">
        ยืนยันลงคะแนน
      </button>
      <br /><br /><br />
    </div>
  </div>
</template>

<script>
import VoteCard from "./VoteCard.vue";
import { mapState } from "vuex";

export default {
  name: "VoteCan",
  components: {
    VoteCard,
  },
  data() {
    return {
      selectNum: 0,
      reveal: false,
    };
  },
  computed: {
    sortedcandidate() {
      return this.candidate.slice().sort((a, b) => a.num - b.num);
    },

    ...mapState({
      candidate: (store) => store.candidate.candidateValue,
      currentContract: (store) => store.dapp.currentContract,
    }),
  },
  methods: {
    selectNumber(voteNum) {
      this.selectNum = voteNum;
    },
    async voting() {
      if (this.selectNum == 0) {
        alert("***กรุณาเลือกหมายเลขผู้สมัคร***");
      } else {
        if (confirm("คุณต้องการเลือกหมายเลข : " + this.selectNum)) {
          await this.currentContract.vote(this.selectNum - 1, this.reveal);
          window.location.reload();
          this.goToScore();
        }
      }
    },
    goToScore() {
      this.$router.push("/ScoreVote");
    },
  },
};
</script>

<style scoped>
.n {
  text-align: center;
}
.t {
  color: #000000;
  display: inline;
  padding: 10px;
  border-bottom: 5px solid #000000;
  text-shadow: 2px 2px #ffffff;
}
</style>