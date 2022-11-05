<template>
  <div class="col-6 col-md-3 col-lg-2">
    <div class="card">
      <img
        :src="imgCan"
        class="card-img-top"
        onmouseover="this.style.border = '2px solid #ffff'"
        onmouseout="this.style.border = '0px'"
      />
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
          <div
            :class="'btn ' + buttonSelect"
            @click="selectNumber(num)"
            id="btn"
          >
            เลือกเบอร์ : {{ num }}
          </div>
        </div>
      </div>
    </div>
    <br />
  </div>
</template>
  
  <script>
export default {
  name: "VoteCard",
  data() {
    return {
      buttonSelect: "btn-outline-success",
    };
  },
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
    selectNum: {
      type: Number,
      required: true,
    },
  },
  methods: {
    selectNumber(num) {
      this.$emit("show", num);
    },
  },
  watch: {
    selectNum(){
      if(this.selectNum == this.num){
        this.buttonSelect = "btn-success"
      }else{
        this.buttonSelect = "btn-outline-success"
      }
    }
  },
};
</script>
  
  <style scoped>
a {
  text-align: center;
}
.card {
  margin-top: 2em;
  padding: 0em 0em 0.5em 0em;
  border-radius: 2em;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
  position: relative;
}
.card-img-top {
  width: 100%;
  margin: 0 auto;
  border-top-left-radius: 2em;
  border-top-right-radius: 2em;
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
</style>