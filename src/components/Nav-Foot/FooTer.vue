<template>
  <footer
    class="text-light text-center text-lg-start mt-auto"
    style="background-color: #333333"
  >
    <!-- Grid container -->
    <div class="container p-4">
      <!--Grid row-->
      <div class="row">
        <!--Grid column-->
        <div class="col-lg-6 col-md-12 mb-4 mb-md-0">
          <h5 class="text-uppercase">
            ระบบลงคะแนนเสียงผ่านบล็อกเชน
            (กรณีศึกษาการเลือกตั้งผู้ว่าราชการกรุงเทพมหานคร พ.ศ. 2565)
          </h5>

          <p>
            โครงงานนี้เป็นส่วนหนึ่งของการศึกษาตามหลักสูตรปริญญาวิทยาศาสตร์บัณฑิต
            สาขาวิทยาการคอมพิวเตอร์ คณะวิทยาศาสตร์และเทคโนโลยี
            มหาวิทยาลัยราชภัฏสวนสุนันทา ปีการศึกษา 2564
          </p>
        </div>
        <!--Grid column-->

        <!--Grid column-->
        <div class="col-lg-6 col-md-12 mb-4 mb-md-0">
          <h5 class="text-uppercase">จัดทำโดย</h5>

          <p>นาย ยุทธภูมิ บุญมาก รหัสนักศึกษา 62122201008</p>
          <img
            src="../../assets/profile.png"
            width="100"
            style="border-radius: 1em"
          />
        </div>
        <!--Grid column-->
      </div>
      <!--Grid row-->
    </div>
    <!-- Grid container -->

    <!-- Copyright -->
    <div class="text-center p-3" style="background-color: #222222">
      © 2022 Copyright: Yuttaphum Boonmak
      <br />
      หมายเลข Contract: <a :href="linkScan" target="_blank" >{{contractAddress}}</a>
    </div>
    <!-- Copyright -->
  </footer>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      
    };
  },
  computed: {
    ...mapState({
      contractAddress: (store) => store.dapp.contractAddress,
    }),
    linkScan() {
      return "https://testnet.bscscan.com/address/"+this.contractAddress;
    },
  },
};
</script>

<style>
</style>