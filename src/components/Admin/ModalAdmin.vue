<template>
  <!-- Modal -->
  <div
    class="modal modal-lg fade"
    :id="'m' + _id"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
    v-if="registrationStatus == 0"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">
            ข้อมูล {{ firstname }} {{ lastname }}
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div class="row">
            <div class="col-md-6 mb-4">
              <div class="form-outline">
                <label class="form-label">หมายเลขบัตรประชาชน</label>
                <input
                  type="text"
                  class="form-control form-control-lg"
                  :value="idCard"
                  disabled="disabled"
                />
              </div>
            </div>
            <div class="col-md-6 mb-4">
              <div class="form-outline">
                <label class="form-label">หมายเลขกระเป๋า Meta Mask</label>
                <input
                  type="text"
                  class="form-control form-control-lg"
                  :value="walletId"
                  disabled="disabled"
                />
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-6 mb-4">
              <div class="form-outline">
                <label class="form-label">ชื่อ</label>
                <input
                  type="text"
                  class="form-control form-control-lg"
                  :value="firstname"
                  disabled="disabled"
                />
              </div>
            </div>
            <div class="col-md-6 mb-4">
              <div class="form-outline">
                <label class="form-label">นามสกุล</label>
                <input
                  type="text"
                  class="form-control form-control-lg"
                  :value="lastname"
                  disabled="disabled"
                />
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-md-6 mb-4 d-flex align-items-center">
              <div class="form-outline datepicker w-100">
                <label class="form-label">วันเกิด</label>
                <input
                  type="text"
                  class="form-control form-control-lg"
                  :value="birthday"
                  disabled="disabled"
                />
              </div>
            </div>
            <div class="col-md-6 mb-4 d-flex align-items-center">
              <div class="form-outline datepicker w-100">
                <label class="form-label">เพศ</label>
                <input
                  type="text"
                  class="form-control form-control-lg"
                  :value="gender"
                  disabled="disabled"
                />
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-md-6 mb-4 pb-2">
              <div class="form-outline">
                <label class="form-label">Email</label>
                <input
                  type="text"
                  class="form-control form-control-lg"
                  :value="email"
                  disabled="disabled"
                />
              </div>
            </div>
            <div class="col-md-6 mb-4 pb-2">
              <div class="form-outline">
                <label class="form-label">หมายเลขโทรศัพท์</label>
                <input
                  type="text"
                  class="form-control form-control-lg"
                  :value="phoneNumber"
                  disabled="disabled"
                />
              </div>
            </div>
          </div>

          <div class="row">
            <div class="mb-3">
              <label class="form-label">ที่อยู่</label>
              <textarea
                class="form-control"
                rows="3"
                :value="adrressInfo"
                disabled="disabled"
              ></textarea>
            </div>
          </div>

          <div class="row">
            <div class="col-md-6 mb-4">
              <div class="form-outline">
                <label class="form-label">เขต</label>
                <input
                  type="text"
                  class="form-control form-control-lg"
                  disabled="disabled"
                  :value="district"
                />
              </div>
            </div>

            <div class="col-md-6 mb-4">
              <div class="form-outline">
                <label class="form-label">จังหวัด</label>
                <input
                  type="text"
                  class="form-control form-control-lg"
                  disabled="disabled"
                  value="กรุงเทพมหานคร"
                />
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-md-6 mb-4">
              <div class="form-outline">
                <label class="form-label select-label" style="margin-right: 7px"
                  >รูปบัตรประชาชน</label
                >

                <br />
                <img :src="pathImg + imgCard" width="200" class="zoom" />
              </div>
            </div>

            <div class="col-md-6 mb-4">
              <div class="form-outline">
                <label class="form-label" for="province"
                  >รูปถ่ายคู่กับบัตรประชาชน</label
                >

                <br />
                <img :src="pathImg + imgVoter" width="200" class="zoom" />
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-light" data-bs-dismiss="modal">
            ปิด
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pathImg: "http://localhost:3000/images/",
    };
  },
  props: {
    _id: {
      type: String,
      required: true,
    },
    idCard: {
      type: String,
      required: true,
    },
    walletId: {
      type: String,
      required: true,
    },
    firstname: {
      type: String,
      required: true,
    },
    lastname: {
      type: String,
      required: true,
    },
    birthday: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    adrressInfo: {
      type: String,
      required: true,
    },
    district: {
      type: String,
      required: true,
    },
    register: {
      type: Boolean,
      required: true,
    },
    registrationStatus: {
      type: Number,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    imgVoter: {
      type: String,
      required: true,
    },
    imgCard: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
.zoom {
  transition: transform 0.2s;
  margin: 0 auto;
}

.zoom:hover {
  -ms-transform: scale(1.8); /* IE 9 */
  -webkit-transform: scale(1.8); /* Safari 3-8 */
  transform: scale(1.8);
}
</style>