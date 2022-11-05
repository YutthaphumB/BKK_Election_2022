<template>
  <div
    v-if="String(currentAccount).toLowerCase() == String(manager).toLowerCase()"
  >
  <br />
    <h1 class="n"><b class="t">Admin Page</b></h1>
    <br />
    <div class="row justify-content-md-center">
      <div class="col-10">
        <table
          class="table table-bordered table-hover"
          style="background-color: #ffffff; text-align: center"
        >
          <thead class="bg-warning">
            <tr>
              <th>ชื่อ - นามสกุล</th>
              <th>เลขบัตรประชาชน</th>
              <th>หมายเลขกระเป๋า</th>
              <th>เพศ</th>
              <th>ที่อยู่</th>
              <th>ดำเนินการ</th>
            </tr>
          </thead>
          <tbody>
            <AdminTable
              v-for="(item, index) in voter"
              :key="index"
              :_id="item._id"
              :idCard="item.idCard"
              :walletId="item.walletId"
              :firstname="item.firstname"
              :lastname="item.lastname"
              :birthday="item.birthday"
              :gender="item.gender"
              :email="item.email"
              :phoneNumber="item.phoneNumber"
              :adrressInfo="item.adrressInfo"
              :district="item.district"
              :register="item.register"
              :registrationStatus="item.registrationStatus"
            />
            <ModalAdmin 
            v-for="(item, index) in voter"
              :key="index"
              :_id="item._id"
              :idCard="item.idCard"
              :walletId="item.walletId"
              :firstname="item.firstname"
              :lastname="item.lastname"
              :birthday="item.birthday"
              :gender="item.gender"
              :email="item.email"
              :phoneNumber="item.phoneNumber"
              :adrressInfo="item.adrressInfo"
              :district="item.district"
              :register="item.register"
              :registrationStatus="item.registrationStatus"
              :imgVoter="item.imgVoter"
              :imgCard="item.imgCard"
            />
          </tbody>
        </table>
      </div>
    </div>
  </div>
  <div v-else>
    {{ goToHome() }}
  </div>
</template>

<script>
import { mapState } from "vuex";
import AdminTable from "./AdminTable.vue";
import ModalAdmin from "./ModalAdmin.vue";
export default {
  computed: {
    ...mapState({
      currentAccount: (store) => store.dapp.currentAccount,
      manager: (store) => store.dapp.manager,
      voter: (store) => store.voter.voter,
    }),
  },
  methods: {
    goToHome() {
      this.$router.push("/");
    },
  },
  components: {
    AdminTable,
    ModalAdmin,
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