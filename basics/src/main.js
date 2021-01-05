import Vue from "vue";
import App from "./App.vue";
import router from "./router";

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");


// var string = new Vue({
//   el: '#string',
//   data: {
//     arrays: [
//       {name: "kyle", sex: male},        
//       {name: "emily", sex: female},
//       {name: "sophia", sex: female},
//       {name: "ken", sex: male},
//       {name: "sam", sex: male}
//     ]
//   }
//   computed: {
//     sortedArray: function() {
//       function compare(a, b) {
//         if (a.name < b.name)
//           return -1;
//         if (a.name > b.name)
//           return 1;
//         return 0;
//       }
  
//       return this.arrays.sort(compare);
//     }
//   }
// })

