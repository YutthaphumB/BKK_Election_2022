<template>
  <div>
    <div v-if="!isConnected">
      <CheckConnect />
    </div>
    <div v-else>
      <div v-if="indexVoter >= 0">
        <div v-if="regisStatus == 0">
          <WaitAdmin />
        </div>
        <div v-else-if="regisStatus == 1 && !voter.isVoted">
          <VoteCan />
        </div>
        <div v-else-if="regisStatus == 1 && voter.isVoted">
          {{ goToScore() }}
        </div>
        <div v-else>
          <FailureToQualify />
        </div>
      </div>
      <div v-else-if="!voter.isRegister">
        <RegisterForm />
      </div>
    </div>
  </div>
</template>

<script>
import RegisterForm from "./RegisterForm.vue";
import FailureToQualify from "./FailureToQualify.vue";
import WaitAdmin from "./WaitAdmin.vue";
import VoteCan from "./VoteCan.vue";
import CheckConnect from "./CheckConnect.vue";
import { mapState } from "vuex";

export default {
  components: {
    RegisterForm,
    VoteCan,
    CheckConnect,
    FailureToQualify,
    WaitAdmin,
  },
  data() {
    return {
      indexVoter: null,
      regisStatus: null,
      voterCur: null,
    };
  },
  computed: {
    ...mapState({
      currentAccount: (store) => store.dapp.currentAccount,
      currentContract: (store) => store.dapp.currentContract,
      manager: (store) => store.dapp.manager,
      voter: (store) => store.dapp.voter,
      isConnected: (store) => store.dapp.isConnected,
      voterDatabase: (store) => store.voter.voter,
    }),
  },
  methods: {
    goToScore() {
      this.$router.push("/ScoreVote");
    },
    setData() {
      this.indexVoter = this.voterCur
        .map((a) => a.walletId)
        .indexOf(this.currentAccount);
    },
    setRegisStatus() {
      this.regisStatus = this.voterCur[this.indexVoter]['registrationStatus']
    }
  },
  watch: {
    voterDatabase(newVal) {
      this.voterCur = newVal
    },
    voterCur() {
      this.setData()
    },
    currentAccount(){
      this.setData()
    },
    indexVoter(){
      if(this.indexVoter >= 0){
        this.setRegisStatus()
      }
    }
  },
  mounted() {
    this.voterCur = this.voterDatabase
  },
};
</script>

<style>
</style>