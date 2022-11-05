<template>
  <div v-if="!isConnected">
    <CheckConnect />
  </div>
  <div v-else-if="reFresh" class="container" >
    <br />
    <h2 class="n"><b class="t">ผลการนับคะแนนเลือกตั้งผู้ว่าฯ กทม. 65</b></h2>
    <br />
    <br />
    <div class="container">
      <div class="row">
        <div
          class="col-4 col-md-3 col-lg"
          style="display: flex; justify-content: center; align-items: center"
        >
          <div class="card">
            <!--<h3 class="ribbon">
              &nbsp;&nbsp;<b>{{ SortCandidate[1].num }}</b
              >&nbsp;&nbsp;
            </h3>
            -->
            <img src="../../assets/Rank2.png" width="70" class="ribbon" />
            <a href="#"
              ><img
                :src="SortCandidate[1].imgCan"
                class="card-img-top"
                onmouseover="this.style.border = '2px solid #ffff'"
                onmouseout="this.style.border = '0px'"
            /></a>
            <div class="card-body">
              <div class="row">
                <h5 class="card-title">
                  <b>{{ SortCandidate[1].name }}</b>
                </h5>
                <h5 class="card-title">
                  <b>เบอร์ : {{ SortCandidate[1].num }}</b>
                </h5>
                <h5 class="card-text" style="font-size: 1.1rem">
                  พรรค : {{ SortCandidate[1].party }}
                </h5>
                <h3 class="card-text" style="font-size: 1.3rem">
                  คะแนน : {{ SortCandidate[1].score }}
                </h3>
              </div>
              <br />
            </div>
          </div>
        </div>
        <br />
        <div class="col-4 col-md-6 col-lg-5">
          <div class="card">
            <!--
            <h3 class="ribbon">
              &nbsp;&nbsp;<b>{{ SortCandidate[0].num }}</b
              >&nbsp;&nbsp;
            </h3>
            -->
            <img src="../../assets/Rank1.png" width="85" class="ribbon" />
            <a href="#"
              ><img
                :src="SortCandidate[0].imgCan"
                class="card-img-top"
                onmouseover="this.style.border = '2px solid #ffff'"
                onmouseout="this.style.border = '0px'"
            /></a>
            <div class="card-body">
              <div class="row">
                <h5 class="card-title">
                  <b>{{ SortCandidate[0].name }}</b>
                </h5>
                <h5 class="card-title">
                  <b>เบอร์ : {{ SortCandidate[0].num }}</b>
                </h5>
                <h5 class="card-text" style="font-size: 1.1rem">
                  พรรค : {{ SortCandidate[0].party }}
                </h5>
                <h3 class="card-text" style="font-size: 1.3rem">
                  คะแนน : {{ SortCandidate[0].score }}
                </h3>
              </div>
              <br />
            </div>
          </div>
        </div>
        <br />
        <div
          class="col-4 col-md-3 col-lg"
          style="display: flex; justify-content: center; align-items: center"
        >
          <div class="card">
            <!--
            <h3 class="ribbon">
              &nbsp;&nbsp;<b>{{ SortCandidate[2].num }}</b
              >&nbsp;&nbsp;
            </h3>
            -->
            <img src="../../assets/Rank3.png" width="70" class="ribbon" />
            <a href="#"
              ><img
                :src="SortCandidate[2].imgCan"
                class="card-img-top"
                onmouseover="this.style.border = '2px solid #ffff'"
                onmouseout="this.style.border = '0px'"
            /></a>
            <div class="card-body">
              <div class="row">
                <h5 class="card-title">
                  <b>{{ SortCandidate[2].name }}</b>
                </h5>
                <h5 class="card-title">
                  <b>เบอร์ : {{ SortCandidate[2].num }}</b>
                </h5>
                <h5 class="card-text" style="font-size: 1.1rem">
                  พรรค : {{ SortCandidate[2].party }}
                </h5>
                <h3 class="card-text" style="font-size: 1.3rem">
                  คะแนน : {{ SortCandidate[2].score }}
                </h3>
              </div>
              <br />
            </div>
          </div>
        </div>
        <br />
      </div>
    </div>

    <br />

    <div class="row"></div>
    <table
      class="table table-bordered table-hover"
      style="background-color: #ffffff; text-align: center"
    >
      <thead class="bg-warning">
        <tr>
          <th>ลำดับ</th>
          <th>ชื่อ</th>
          <th>พรรค</th>
          <th>เบอร์</th>
          <th>คะแนน</th>
        </tr>
      </thead>
      <tbody>
        <ScoreCard
          v-for="(item, index) in SortCandidate.slice(3)"
          :key="index"
          :rank="index + 4"
          :name="item.name"
          :imgCan="item.imgCan"
          :party="item.party"
          :num="item.num"
          :score="item.score"
        />
      </tbody>
    </table>
  </div>
</template>

<script>
import ScoreCard from "./ScoreCard.vue";
import { mapState } from "vuex";
import CheckConnect from "../VoteAndRegis/CheckConnect.vue";

export default {
  data() {
    return {
      newCandidate: [],
      SortCandidate: [],
      newscore: [
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0,
      ],
      reFresh: false,
    };
  },
  components: {
    ScoreCard,
    CheckConnect,
  },
  computed: {
    sortedcandidate() {
      return this.candidate.slice().sort((a, b) => a.num - b.num);
    },
    sortedScore() {
      return this.newCandidate
        .slice()
        .sort((a, b) => a.score > b.score ? -1 : 0)
        //.reverse();
    },

    ...mapState({
      candidate: (store) => store.candidate.candidateValue,
      score: (store) => store.dapp.score,
      isConnected: (store) => store.dapp.isConnected,
    }),
  },
  methods: {
    setCandidateScore() {
      this.newCandidate = this.sortedcandidate;
      for (var i = 0; i < this.candidate.length; i++) {
        this.newCandidate[i]["score"] = this.score[i];
      }
      this.SortCandidate = this.sortedScore; //this.sortedcandidate
    },
    setCandidate() {
      this.newCandidate = this.sortedcandidate;
      for (var i = 0; i < this.candidate.length; i++) {
        this.newCandidate[i]["score"] = this.newscore[i];
      }
      this.SortCandidate = this.sortedScore; //this.sortedcandidate
      this.reFresh = true;
    },
  },
  mounted() {
    this.setCandidate();
    this.setCandidateScore();
  },
  watch: {
    score() {
      if (this.score != []) {
        this.setCandidateScore();
      }
    },
    candidate() {
      if (this.candidate != []) {
        this.setCandidate();
      }
    },
  },
};
</script>

<style scoped>
a {
  text-align: center;
}
.card {
  margin-top: 2em;
  padding: 1.5em 0em 0.5em 0em;
  border-radius: 2em;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
  position: relative;
}
.card-img-top {
  width: 65%;
  border-radius: 20%;
  margin: 0 auto;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
}
#btn {
  border-radius: 1em;
  padding: 0.5em 1.5em;
}

.card-title,
.card-text {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: center;
  position: relative;
}
.card-title:hover {
  white-space: inherit;
}

.ribbon {
  position: absolute;
  top: -35px;
  left: -40px;
  padding: 8px 10px;
  box-sizing: unset;
}

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