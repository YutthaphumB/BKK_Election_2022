<template>
  <section class="gradient-custom">
    <div class="container py-5 h-100">
      <div class="row justify-content-center align-items-center h-100">
        <div class="col-12 col-lg-9 col-xl-7">
          <div
            class="card shadow-2-strong card-registration"
            style="border-radius: 20px"
          >
            <div class="card-body p-4 p-md-5">
              <h3 class="mb-4 pb-2 pb-md-0 mb-md-5">แบบฟอร์มลงทะเบียน</h3>
              <form @submit.prevent="onCreatePost">
                <div class="row">
                  <div class="col-md-6 mb-4">
                    <div class="form-outline">
                      <label class="form-label" for="idCard"
                        >หมายเลขบัตรประชาชน</label
                      >
                      <input
                        type="number"
                        id="idCard"
                        class="form-control form-control-lg"
                        v-model="idCard"
                        required="required"
                      />
                    </div>
                  </div>
                  <div class="col-md-6 mb-4">
                    <div class="form-outline">
                      <label class="form-label" for="walletID"
                        >หมายเลขกระเป๋า Meta Mask</label
                      >
                      <input
                        type="text"
                        id="walletID"
                        class="form-control form-control-lg"
                        disabled="disabled"
                        v-model="currentAccount"
                      />
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-6 mb-4">
                    <div class="form-outline">
                      <label class="form-label" for="firstName">ชื่อ</label>
                      <input
                        type="text"
                        id="firstName"
                        class="form-control form-control-lg"
                        v-model="firstName"
                        required="required"
                      />
                    </div>
                  </div>
                  <div class="col-md-6 mb-4">
                    <div class="form-outline">
                      <label class="form-label" for="lastName">นามสกุล</label>
                      <input
                        type="text"
                        id="lastName"
                        class="form-control form-control-lg"
                        v-model="lastName"
                        required="required"
                      />
                    </div>
                  </div>
                </div>

                <div class="row">
                  <div class="col-md-6 mb-4 d-flex align-items-center">
                    <div class="form-outline datepicker w-100">
                      <label for="birthdayDate" class="form-label"
                        >วันเกิด</label
                      >
                      <input
                        type="date"
                        class="form-control form-control-lg"
                        id="birthdayDate"
                        v-model="birthday"
                        required="required"
                      />
                    </div>
                  </div>
                  <div class="col-md-6 mb-4">
                    <h6 class="mb-2 pb-1">เพศ:</h6>
                    <div class="form-check form-check-inline">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="inlineRadioOptions"
                        id="maleGender"
                        value="ชาย"
                        v-model="gender"
                        required="required"
                      />
                      <label class="form-check-label" for="maleGender"
                        >ชาย</label
                      >
                    </div>
                    <div class="form-check form-check-inline">
                      <label class="form-check-label" for="femaleGender"
                        >หญิง</label
                      >
                      <input
                        class="form-check-input"
                        type="radio"
                        name="inlineRadioOptions"
                        id="femaleGender"
                        value="หญิง"
                        v-model="gender"
                        required="required"
                      />
                    </div>
                  </div>
                </div>

                <div class="row">
                  <div class="col-md-6 mb-4 pb-2">
                    <div class="form-outline">
                      <label class="form-label" for="emailAddress">Email</label>
                      <input
                        type="email"
                        id="emailAddress"
                        class="form-control form-control-lg"
                        v-model="email"
                        required="required"
                      />
                    </div>
                  </div>
                  <div class="col-md-6 mb-4 pb-2">
                    <div class="form-outline">
                      <label class="form-label" for="phoneNumber"
                        >หมายเลขโทรศัพท์</label
                      >
                      <input
                        type="tel"
                        id="phoneNumber"
                        class="form-control form-control-lg"
                        v-model="tell"
                        required="required"
                      />
                    </div>
                  </div>
                </div>

                <div class="row">
                  <div class="mb-3">
                    <label for="adrressInfo" class="form-label">ที่อยู่</label>
                    <textarea
                      class="form-control"
                      id="adrressInfo"
                      rows="3"
                      v-model="addressVal"
                      required="required"
                    ></textarea>
                  </div>
                </div>

                <div class="row">
                  <div class="col-md-6 mb-4">
                    <div class="form-outline">
                      <label
                        class="form-label select-label"
                        style="margin-right: 7px"
                        >เขต</label
                      >
                      <br />
                      <select
                        class="select form-control-lg"
                        v-model="districtVal"
                        required="required"
                      >
                        <option
                          v-for="(item, index) in district"
                          :value="item"
                          :key="index"
                        >
                          {{ item }}
                        </option>
                      </select>
                    </div>
                  </div>

                  <div class="col-md-6 mb-4">
                    <div class="form-outline">
                      <label class="form-label" for="province">จังหวัด</label>
                      <input
                        type="text"
                        id="province"
                        class="form-control form-control-lg"
                        disabled="disabled"
                        v-model="province"
                      />
                    </div>
                  </div>
                </div>

                <div class="row">
                  <div class="col-md-6 mb-4">
                    <div class="form-outline">
                      <label
                        class="form-label select-label"
                        style="margin-right: 7px"
                        >รูปบัตรประชาชน</label
                      >
                      <input
                        type="file"
                        class="form-control"
                        @change="onFileChange"
                        accept="image/png, image/jpeg"
                        required="required"
                      />
                      <br />
                      <img :src="imageCard_Show" width="200" />
                    </div>
                  </div>

                  <div class="col-md-6 mb-4">
                    <div class="form-outline">
                      <label class="form-label" for="province"
                        >รูปถ่ายคู่กับบัตรประชาชน</label
                      >
                      <input
                        type="file"
                        class="form-control"
                        @change="onFileChange2"
                        accept="image/png, image/jpeg"
                        required="required"
                      />
                      <br />
                      <img :src="imageVoter_Show" width="200" />
                    </div>
                  </div>
                </div>

                <div class="mt-4 pt-2">
                  <button type="submit" class="btn btn-primary btn-lg">
                    ลงทะเบียน
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapState } from "vuex";
import axios from "axios";

export default {
  data() {
    return {
      district: [
        "เขตพระนคร",
        "เขตหนองจอก",
        "เขตบางรัก",
        "เขตบางเขน",
        "เขตบางกะปิ",
        "เขตปทุมวัน",
        "เขตป้อมปราบศัตรูพ่าย",
        "เขตพระโขนง",
        "เขตมีนบุรี",
        "เขตลาดกระบัง",
        "เขตยานนาวา",
        "เขตสัมพันธวงศ์",
        "เขตพญาไท",
        "เขตธนบุรี",
        "เขตบางกอกใหญ่",
        "เขตห้วยขวาง",
        "เขตคลองสาน",
        "เขตตลิ่งชัน",
        "เขตบางกอกน้อย",
        "เขตบางขุนเทียน",
        "เขตภาษีเจริญ",
        "เขตหนองแขม",
        "เขตราษฎร์บูรณะ",
        "เขตบางพลัด",
        "เขตดินแดง",
        "เขตบึงกุ่ม",
        "เขตสาทร",
        "เขตบางซื่อ",
        "เขตจตุจักร",
        "เขตบางคอแหลม",
        "เขตประเวศ",
        "เขตคลองเตย",
        "เขตสวนหลวง",
        "เขตจอมทอง",
        "เขตดอนเมือง",
        "เขตราชเทวี",
        "เขตลาดพร้าว",
        "เขตวัฒนา",
        "เขตบางแค",
        "เขตหลักสี่",
        "เขตสายไหม",
        "เขตคันนายาว",
        "เขตสะพานสูง",
        "เขตวังทองหลาง",
        "เขตคลองสามวา",
        "เขตบางนา",
        "เขตทวีวัฒนา",
        "เขตทุ่งครุ",
        "เขตบางบอน",
        "เขตดุสิต",
      ],
      idCard: null,
      firstName: null,
      lastName: null,
      birthday: null,
      gender: null,
      email: null,
      tell: null,
      addressVal: null,
      districtVal: null,
      province: "กรุงเทพมหานคร",
      imageCard: "",
      imageVoter: "",
      imageCard_Show: "image/รูปบัตรประชาชน.png",
      imageVoter_Show: "image/รูปถ่ายคู่กับบัตรประชาชน.png",
      isSuccess: false,
    };
  },
  computed: {
    ...mapState({
      currentAccount: (store) => store.dapp.currentAccount,
      voterDatabase: (store) => store.voter.voter,
    }),
  },
  methods: {
    onFileChange(e) {
      const selectedFile = e.target.files[0]; // accessing file
      this.imageCard = selectedFile;
      this.createImage(selectedFile);
    },
    createImage(file) {
      var reader = new FileReader();
      reader.onload = (e) => {
        this.imageCard_Show = e.target.result;
      };
      reader.readAsDataURL(file);
    },
    onFileChange2(e) {
      const selectedFile = e.target.files[0]; // accessing file
      this.imageVoter = selectedFile;
      this.createImage2(selectedFile);
    },
    createImage2(file) {
      var reader = new FileReader();
      reader.onload = (e) => {
        this.imageVoter_Show = e.target.result;
      };
      reader.readAsDataURL(file);
    },
    async onCreatePost() {
      if (
        confirm("ยืนยันการลงทะเบียน ***กรุณาตรวจสอบข้อมูลให้ถูกต้อง***") == true
      ) {
        if (this.voterDatabase.map((a) => a.idCard).includes(this.idCard)) {
          alert("***เลขบัตรประชาชนนี้ลงทะเบียนไปแล้ว***");
        } else if (
          this.voterDatabase
            .map((a) => a.walletId)
            .includes(this.currentAccount)
        ) {
          alert("***หมายเลขกระเป๋านี้ลงทะเบียนไปแล้ว***");
        } else {
          const formData = new FormData();
          formData.append("file", this.imageCard, "idCard" + this.idCard + ".jpg");
          axios
            .post("https://backend-bkk-2022.herokuapp.com/upload", formData)
            .then((res) => {
              console.log(res);
            })
            .catch((err) => {
              console.log(err);
            });
          const formData2 = new FormData();
          formData2.append("file", this.imageVoter, "voter" + this.idCard + ".jpg");
          axios
            .post("https://backend-bkk-2022.herokuapp.com/upload", formData2)
            .then((res) => {
              console.log(res);
            })
            .catch((err) => {
              console.log(err);
            });
          axios
            .post(`https://backend-bkk-2022.herokuapp.com/voter`, {
              idCard: this.idCard,
              walletId: this.currentAccount,
              firstname: this.firstName,
              lastname: this.lastName,
              birthday: this.birthday,
              gender: this.gender,
              email: this.email,
              phoneNumber: this.tell,
              adrressInfo: this.addressVal,
              district: this.districtVal,
              register: true,
              registrationStatus: 0,
              imgCard: "idCard" + this.idCard + ".jpg",
              imgVoter: "voter" + this.idCard + ".jpg",
            })
            .then((response) => {
              this.isSuccess = true;
              alert(
                "***ลงทะเบียนเรียบร้อย รอผู้ดูแลการเลือกตั้งยืนยันข้อมูล***"
              );
              console.log(response);
              this.$emit("postcreated");
              window.location.reload();
            });
        }
      } else {
        console.log("You canceled!");
      }
    },
  },
};
</script>

<style scoped>
.card-registration .select-input.form-control[readonly]:not([disabled]) {
  font-size: 1rem;
  line-height: 2.15;
  padding-left: 0.75em;
  padding-right: 0.75em;
}
.card-registration .select-arrow {
  top: 13px;
}
</style>