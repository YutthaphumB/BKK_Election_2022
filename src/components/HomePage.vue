<template>
  <div>
    <div
      id="carouselExampleIndicators"
      class="carousel slide"
      data-bs-ride="carousel"
    >
      <div class="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="0"
          class="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="image/home1.png" class="d-block w-100" alt="..." />
        </div>
        <div class="carousel-item">
          <img src="image/home2.png" class="d-block w-100" alt="..." />
        </div>
        <div class="carousel-item">
          <img src="image/home3.png" class="d-block w-100" alt="..." />
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
    <br />
    <div class="container lightbox">
      <div class="row justify-content-md-center">
        <div class="col-10">
          <br>
          <h3 class="text-center">
            <b>การเลือกตั้งผู้ว่าราชการกรุงเทพมหานคร</b>
          </h3>
          <h5>
            &nbsp;&nbsp;&nbsp;&nbsp;การเลือกตั้งผู้ว่าราชการกรุงเทพมหานคร
            มีขึ้นครั้งแรกในปี พ.ศ. 2518
            สืบเนื่องจากมีการประกาศใช้พระราชบัญญัติระเบียบบริหารราชการกรุงเทพมหานคร
            พ.ศ. 2518 เมื่อวันที่ 20 กุมภาพันธ์ 2518
            ซึ่งกำหนดให้กรุงเทพมหานครเป็นทบวงการเมือง
            มีผู้ว่าราชการกรุงเทพมหานคร ที่มาจากการเลือกตั้ง
            และอยู่ในตำแหน่งตามวาระ 4 ปี อย่างไรก็ดี
            ตำแหน่งดังกล่าวไม่ได้มาจากการเลือกตั้งอยู่ตลอด
            โดยบางทีก็มาจากการแต่งตั้งของคณะรัฐมนตรีหรือคำสั่งของคณะรัฐประหาร
          </h5>
          <br />
          <h3 class="text-center"><b>กฎหมายเลือกตั้ง</b></h3>
          <h5>
            &nbsp;&nbsp;&nbsp;&nbsp;พระราชบัญญัติการเลือกตั้งสมาชิกสภาท้องถิ่นและผู้บริหารท้องถิ่น
            พ.ศ. 2562 มาตรา 38 นั้นกำหนดคุณสมบัติของผู้มีสิทธิเลือกตั้งไว้ดังนี้
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1. มีสัญชาติไทย
            หรือมีสัญชาติไทยโดยการแปลงสัญชาติแล้วไม่น้อยกว่า 5 ปี<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2. มีอายุไม่ต่ำกว่า 18
            ปีในวันเลือกตั้ง<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3.
            มีชื่ออยู่ในทะเบียนบ้านในเขตเลือกตั้งมาแล้วเป็นเวลาติดต่อกันไม่น้อยกว่า
            1 ปีนับถึงวันเลือกตั้ง และ<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4.
            คุณสมบัติอื่นตามที่กฎหมายว่าด้วยการจัดตั้งองค์กรปกครองส่วนท้องถิ่นกำหนด<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;คณะกรรมการการเลือกตั้งระบุว่าการเลือกตั้งผู้ว่าราชการกรุงเทพมหานครจะไม่มีการจัดเลือกตั้งล่วงหน้า
            เพราะกฎหมายไม่ได้บัญญัติ
            นอกจากนี้ยังไม่เปิดช่องให้มีการเลือกตั้งนอกเขตหรือนอกราชอาณาจักร
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;กฎหมายเลือกตั้งไม่ได้กำหนดว่าผู้สมัครรับเลือกตั้งจะต้องสังกัดพรรคการเมือง
            แต่ผู้ที่มีตำแหน่งทางการเมืองอยู่ ณ ปัจจุบัน จะไม่มีสิทธิลงสมัครได้ เว้นแต่ได้ลาออกจากตำแหน่งนั้นแล้ว
          </h5>
          <br>
        </div>
      </div>
    </div>

    <br />
    <h3 class="text-center"><b> คู่มือการใช้งานเว็บไซต์ </b></h3>
    <br />
    <div class="text-center">
      <a class="btn btn-default" @click="show_meta">
        <h4>การสมัครกระเป๋า Meta Mask</h4>
      </a>
    </div>
    <div class="text-center" v-show="show_help_meta">
      <div class="container">
        <div class="row justify-content-md-center">
          <div class="col-md-12">
            <div
              style="
                position: relative;
                width: 100%;
                height: 0;
                padding-top: 56.25%;
                padding-bottom: 0;
                box-shadow: 0 2px 8px 0 rgba(63, 69, 81, 0.16);
                margin-top: 1.6em;
                margin-bottom: 0.9em;
                overflow: hidden;
                border-radius: 8px;
                will-change: transform;
              "
            >
              <iframe
                loading="lazy"
                style="
                  position: absolute;
                  width: 100%;
                  height: 100%;
                  top: 0;
                  left: 0;
                  border: none;
                  padding: 0;
                  margin: 0;
                "
                src="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAFPXSzwTmo&#x2F;view?embed"
                allowfullscreen="allowfullscreen"
                allow="fullscreen"
              >
              </iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
    <br />
    <div class="text-center">
      <a class="btn btn-default" @click="show_reg">
        <h4>การลงทะเบียน</h4>
      </a>
    </div>
    <div class="text-center" v-show="show_help_reg">
      <div class="container">
        <div class="row justify-content-md-center">
          <div class="col-md-12">
            <div
              style="
                position: relative;
                width: 100%;
                height: 0;
                padding-top: 56.25%;
                padding-bottom: 0;
                box-shadow: 0 2px 8px 0 rgba(63, 69, 81, 0.16);
                margin-top: 1.6em;
                margin-bottom: 0.9em;
                overflow: hidden;
                border-radius: 8px;
                will-change: transform;
              "
            >
              <iframe
                loading="lazy"
                style="
                  position: absolute;
                  width: 100%;
                  height: 100%;
                  top: 0;
                  left: 0;
                  border: none;
                  padding: 0;
                  margin: 0;
                "
                src="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAFPYLc-Lvo&#x2F;view?embed"
                allowfullscreen="allowfullscreen"
                allow="fullscreen"
              >
              </iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
    <br />
    <div class="text-center">
      <a class="btn btn-default" @click="show_elec">
        <h4>การเลือกตั้ง</h4>
      </a>
    </div>
    <div class="text-center" v-show="show_help_elec">
      <div class="container">
        <div class="row justify-content-md-center">
          <div class="col-md-12">
            <div
              style="
                position: relative;
                width: 100%;
                height: 0;
                padding-top: 56.25%;
                padding-bottom: 0;
                box-shadow: 0 2px 8px 0 rgba(63, 69, 81, 0.16);
                margin-top: 1.6em;
                margin-bottom: 0.9em;
                overflow: hidden;
                border-radius: 8px;
                will-change: transform;
              "
            >
              <iframe
                loading="lazy"
                style="
                  position: absolute;
                  width: 100%;
                  height: 100%;
                  top: 0;
                  left: 0;
                  border: none;
                  padding: 0;
                  margin: 0;
                "
                src="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAFPYC5Hk3M&#x2F;view?embed"
                allowfullscreen="allowfullscreen"
                allow="fullscreen"
              >
              </iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
    <br />
    <div class="text-center">
      <a class="btn btn-default" @click="show_res">
        <h4>การดูผลการเลือกตั้ง</h4>
      </a>
    </div>
    <div class="text-center" v-show="show_help_res">
      <div class="container">
        <div class="row justify-content-md-center">
          <div class="col-md-12">
            <div
              style="
                position: relative;
                width: 100%;
                height: 0;
                padding-top: 56.25%;
                padding-bottom: 0;
                box-shadow: 0 2px 8px 0 rgba(63, 69, 81, 0.16);
                margin-top: 1.6em;
                margin-bottom: 0.9em;
                overflow: hidden;
                border-radius: 8px;
                will-change: transform;
              "
            >
              <iframe
                loading="lazy"
                style="
                  position: absolute;
                  width: 100%;
                  height: 100%;
                  top: 0;
                  left: 0;
                  border: none;
                  padding: 0;
                  margin: 0;
                "
                src="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAFPYC2czqU&#x2F;view?embed"
                allowfullscreen="allowfullscreen"
                allow="fullscreen"
              >
              </iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
    <br />
  </div>
</template>

<script>
export default {
  name: "HomePage",
  data() {
    return {
      show_help_meta: true,
      show_help_reg: false,
      show_help_elec: false,
      show_help_res: false,
    };
  },
  methods: {
    show_meta() {
      this.show_help_meta = !this.show_help_meta;
      this.show_help_reg = false;
      this.show_help_elec = false;
      this.show_help_res = false;
    },
    show_reg() {
      this.show_help_reg = !this.show_help_reg;
      this.show_help_meta = false;
      this.show_help_elec = false;
      this.show_help_res = false;
    },
    show_elec() {
      this.show_help_elec = !this.show_help_elec;
      this.show_help_reg = false;
      this.show_help_meta = false;
      this.show_help_res = false;
    },
    show_res() {
      this.show_help_res = !this.show_help_res;
      this.show_help_reg = false;
      this.show_help_meta = false;
      this.show_help_elec = false;
    },
  },
};
</script>

<style scoped>
.lightbox {
  background: white;
  border: 3px solid rgba(0, 0, 0, 0.9);
  border-radius: 50px 50px 50px 50px;
  box-shadow: 0 12px 34px rgba(0, 0, 0, 0.12);
}
</style>