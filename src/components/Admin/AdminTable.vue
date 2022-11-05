<template>
  <tr v-if="registrationStatus == 0">
    <td>
      <div style="justify-content: center" class="d-flex align-items-center">
        <h5 style="margin-top: 10px">{{ firstname }} {{ lastname }}</h5>
      </div>
    </td>
    <td>
      <div style="justify-content: center" class="d-flex align-items-center">
        <h5 style="margin-top: 10px">{{ idCard }}</h5>
      </div>
    </td>
    <td>
      <div style="justify-content: center" class="d-flex align-items-center">
        <h5 style="margin-top: 10px">{{ shortAdd }}</h5>
      </div>
    </td>
    <td>
      <div style="justify-content: center" class="d-flex align-items-center">
        <h5 style="margin-top: 10px">{{ gender }}</h5>
      </div>
    </td>
    <td>
      <div style="justify-content: center" class="d-flex align-items-center">
        <h5 style="margin-top: 10px">{{ district }}</h5>
      </div>
    </td>
    <td>
      <div style="justify-content: center" class="d-flex align-items-center">
        <button type="button" class="btn btn-success" v-on:click="confirmRegis">
          ยืนยัน
        </button>
        &nbsp;
        <button type="button" class="btn btn-danger" v-on:click="confirmDel">
          ไม่ผ่าน
        </button>
        &nbsp;
        <button type="button" class="btn btn-info" :data-bs-target="'#m' + _id" data-bs-toggle="modal">ดูข้อมูล</button>
      </div>
    </td>
  </tr>
</template>

<script>
import axios from "axios";
import { mapState } from "vuex";
import { ethers } from "ethers";

export default {
  data() {
    return {
    }
    
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
  },
  computed: {
    shortAdd() {
      return (
        this.walletId.substr(0, 5) +
        "..." +
        this.walletId.substr(this.walletId.length - 4)
      );
    },
    ...mapState({
      currentContract: (store) => store.dapp.currentContract,
      contractAddress: (store) => store.dapp.contractAddress,
    }),
  },
  methods: {
    async confirmRegis() {
      if (
        confirm("ยืนยันสิทธิ์ : " + this.firstname + " " + this.lastname) ==
        true
      ) {
        const tx = await this.currentContract.register(this.walletId, this.idCard, {value: ethers.utils.parseEther("0.002")})
        console.log(tx);
        axios
          .put(`http://localhost:3000/voter/${this._id}`, { registrationStatus: 1 })
          .then((response) => {
            console.log(response);
          });
        console.log("You pressed OK!");
      } else {
        console.log("You canceled!");
      }
    },
    confirmDel() {
      if (
        confirm(
          "ยืนยันให้ " +
            this.firstname +
            " " +
            this.lastname +
            " คุณสมบัติไม่ผ่าน"
        ) == true
      ) {
        axios
          .put(`http://localhost:3000/voter/${this._id}`, { registrationStatus: 2 })
          .then((response) => {
            console.log(response);
          });
        console.log("You pressed OK!");
      } else {
        console.log("You canceled!");
      }
    },
  },
};
</script>

<style>
</style>