import { defineStore } from "pinia";

const useLoginStore = defineStore("login", {
  state() {
    return {
      username: "小红",
      age: 10,
    };
  },
});
export default useLoginStore;
