<template>
  <tr>
    <td>
      <div style="display: flex; justify-content: center">
        <h4 style="margin-top: 10px">{{ rank }}</h4>
      </div>
    </td>
    <td>
      <div class="d-flex align-items-center">
        <img
          :src="imgCan"
          height="50"
          class="circle-img circle-img--small mr-2"
          alt="User Img"
          style="border-radius: 10px"
        />
        <div class="user-info__basic">
          <h4 class="mb-0 mx-2">{{ name }}</h4>
        </div>
      </div>
    </td>
    <td>
      <div
        class="d-flex align-items-baseline"
        style="display: flex;  justify-content: center"
      >
        <h4 style="margin-top: 10px">{{ party }}</h4>
      </div>
    </td>
    <td>
      <div style="display: flex;  justify-content: center">
        <h4 style="margin-top: 10px">{{ num }}</h4>
      </div>
    </td>
    <td>
      <h4 style="display: flex;  justify-content: center">
        <b style="margin-top: 10px">{{ score }}</b>
      </h4>
    </td>
  </tr>
</template>

<script>
export default {
  props: {
    rank: {
      type: Number,
      required: true,
    },
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
    score: {
      type: Number,
      required: true,
      default: 0,
    },
  },
};
</script>

<style>
</style>