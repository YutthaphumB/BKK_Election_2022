<template>
  <div
    class="modal fade"
    :id="'m' + num"
    data-backdrop="static"
    data-keyboard="false"
    tabindex="-1"
    aria-labelledby="staticBackdropLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-xl" >
      <div class="modal-content" >
        <div class="modal-body">
          <div class="text-right">
            <i class="fa fa-close close" data-dismiss="modal"></i>
          </div>
          <div class="row">
            <div class="col">
              <div class="text-center mt-5">
                <img :src="imgCan" width="400" style="border-radius: 2em; box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);" /> <br><br>
                <h5 class="mb-0" id="slogan">สโลแกน : "{{slogan}}"</h5>
              </div>
            </div>
            <div class="col">
              <div class="text-dark mt-5">
                <h1 class="mb-0">{{ name }}</h1>
                <span class="intro-1">พรรค : {{ party }}</span>
                <br>
                <h1 class="mb-0">เบอร์ {{ num }}</h1>
                <br>
                <h3 class="mb-0">นโยบาย</h3>
                  <pre class="mt-4">{{policy}} </pre>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-light"
            data-bs-dismiss="modal"
          >
            ปิด
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    imgCan: {
      type: String,
      default: "https://cdn-icons-png.flaticon.com/512/1754/1754806.png",
    },
    name: {
      type: String,
      required: true,
    },
    party: {
      type: String,
      required: true,
    },
    num: {
      type: Number,
      required: true,
    },
    policy: {
      type: String,
      default: "ยังไม่มีข้อมูล",
    },
    slogan: {
      type: String,
      default: "ยังไม่มีข้อมูล",
    },
  },
};


</script>

<style scoped>
.modal-body {
  background-color: rgb(255, 255, 255); 
}

.intro-1 {
  font-size: 20px;
}

.close {
  color: #fff;
}

.close:hover {
  color: #fff;
}


pre {
    white-space: pre-wrap;
    font-size: 18px;
    font-family: "Kanit", sans-serif;
}
#slogan{
  color: rgb(0, 0, 0);
}
.modal-footer{
  background-color: rgb(0, 0, 0);
}

</style>