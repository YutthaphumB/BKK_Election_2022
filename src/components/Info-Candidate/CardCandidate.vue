<template>
  <div class="col-12 col-md-6 col-lg-3">
    <div class="card">
      <h3 class="ribbon">
        &nbsp;&nbsp;<b>{{ num }}</b
        >&nbsp;&nbsp;
      </h3>
      <a href="#"
        ><img
          :src="imgCan"
          class="card-img-top"
          onmouseover="this.style.border = '2px solid #ffff'"
          onmouseout="this.style.border = '0px'"
          :data-bs-target="'#m' + num"
          data-bs-toggle="modal"
      /></a>
      <div class="card-body">
        <div class="row">
          <h5 class="card-title">
            <b>{{ name }}</b>
          </h5>
          <h5 class="card-text" style="font-size: 1.1rem">
            พรรค : {{ party }}
          </h5>
        </div>
        <br />
        <div class="text-center">
          <a
            href="#"
            class="btn btn-outline-primary"
            id="btn"
            :data-bs-target="'#m' + num"
            data-bs-toggle="modal"
            >ดูข้อมลเพิ่มเติม</a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardCandidate",
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
  border-radius: 50%;
  margin: 0 auto;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
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
  top: 15px;
  padding: 8px 10px;
  background: #fb6f00;
  box-shadow: -1px 2px 4px rgba(0, 0, 0, 0.5);
  box-sizing: unset;
}
.ribbon:before,
.ribbon:after {
  position: absolute;
  content: "";
  display: block;
  box-sizing: unset;
}
.ribbon:before {
  width: 7px;
  height: 100%;
  padding: 0 0 7px;
  top: 0;
  left: -7px;
  background: inherit;
  border-radius: 5px 0 0 5px;
  box-sizing: unset;
}
.ribbon:after {
  width: 5px;
  height: 5px;
  background: rgba(0, 0, 0, 0.35);
  bottom: -5px;
  left: -5px;
  border-radius: 5px 0 0 5px;
  box-sizing: unset;
}
</style>