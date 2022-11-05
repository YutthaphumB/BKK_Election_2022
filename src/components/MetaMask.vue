<template>
  <div v-if="!currentAccount" class="text-center">
    <button type="button" class="btn btn-primary" @click="connectWallet">
      Connect Wallet
    </button>
  </div>
  <div v-else>
    <h3>
      <span class="badge bg-success">{{ shortAdd }}</span>
    </h3>
  </div>
</template>

<script>
import { ethers } from "ethers";
import { useToast } from "primevue/usetoast";
import abi from "../../contracts/abi.json";
import { mapActions } from "vuex";

console.log(ethers.version);

export default {
  setup() {
    const toast = useToast();
    toast.add({
      severity: "info",
      summary: "Info Message",
      detail: "Message Content",
      life: 3000,
    });
  },
  data() {
    return {
      currentAccount: null,
      currentContract: null,
      contractAddress: "0xEc691921919746c4c12F23fA48dEBE0B9620478A",
      shortAdd: null,
      contractResult: "",
      manager: "",
      candi: null,
    };
  },
  mounted() {
    this.checkConnectedWalletExist();
    this.setConAdd(this.contractAddress);
  },
  methods: {
    checkConnectedWalletExist: async function () {
      try {
        const { ethereum } = window;
        if (!ethereum) {
          alert("Make sure you have metamask!");
          return false;
        } else {
          console.log("We have the ethereum object", ethereum);
        }
        const accounts = await ethereum.request({ method: "eth_accounts" });
        if (accounts.length !== 0) {
          const account = accounts[0];
          console.log("Found an authorized account:", account);
          this.currentAccount = account;
          this.shortAdd =
            this.currentAccount.substr(0, 5) +
            "..." +
            this.currentAccount.substr(this.currentAccount.length - 4);
          //เชื่อม contracts
          this.setAcc(this.currentAccount);
          this.setConnected(true);
          this.attachContract();
          return true;
        } else {
          console.log("No authorized account found");
          return false;
        }
      } catch (error) {
        console.log(error);
        return false;
      }
    },
    connectWallet: async function () {
      try {
        const { ethereum } = window;
        if (!ethereum) {
          alert("Get MetaMask!");
          return;
        }
        const networks = {
          bsc_testnet: {
            chainId: `0x${Number(97).toString(16)}`,
            chainName: "Smart Chain - Testnet",
            nativeCurrency: {
              name: "Binance Chain Native Token",
              symbol: "BNB",
              decimals: 18,
            },
            rpcUrls: ["https://data-seed-prebsc-1-s1.binance.org:8545"],
            blockExplorerUrls: ["https://testnet.bscscan.com"],
          },
        };
        await window.ethereum.request({
          //method: "wallet_switchEthereumChain",
          //params: [{ chainId: "0x38" }], // chainId must be in hexadecimal numbers
          method: "wallet_addEthereumChain",
          params: [
            {
              ...networks["bsc_testnet"],
            },
          ],
        });
        const accounts = await ethereum.request({
          method: "eth_requestAccounts",
        });
        console.log("Connected", accounts[0]);
        this.currentAccount = accounts[0];
        window.location.reload();
      } catch (error) {
        console.log(error);
      }
    },

    attachContract: async function () {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const network = await provider.getNetwork();
      console.log(signer);
      console.log(network);
      // The Contract object
      this.currentContract = new ethers.Contract(
        this.contractAddress,
        abi,
        signer
      );
      console.log(await this.currentContract);
      await this.setCon(this.currentContract);
      await this.setManaget(await this.currentContract.manager());
      await this.setVoter(
        await this.currentContract.voter(this.currentAccount)
      );
      const temp = [];
      for (let i = 0; i < 31; i++) {
        const item = await this.currentContract.candidates(i);
        temp.push(parseInt(item.voteCount, 16));
      }
      await this.setScore(temp);
    },
    ...mapActions({
      setAcc: "dapp/setAcc",
      setCon: "dapp/setCon",
      setManaget: "dapp/setManaget",
      setVoter: "dapp/setVoter",
      setConnected: "dapp/setConnected",
      setScore: "dapp/setScore",
      setConAdd: "dapp/setConAdd",
    }),
  },
};
</script>

<style>
</style>