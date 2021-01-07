<template>
  <div class="container">
    <h1>Uh since I can't get the API to work {{ face }}</h1>
    <button v-on:click="changeFace">Click</button>

    <div id="likes">
      <button v-on:click="counter +=1">likes</button>
      <p>{{counter}} likes</p>
    </div>

    <div id="message"> 
      <button v-on:click= "popUp">How to make message on top</button>
    </div>

    <div>
      <h1> make radio</h1>
      <input type="radio" id="1" value="1" v-model="checkedNames">
      <label for="1">1</label>
      <input type="radio" id="2" value="2" v-model="checkedNames">
      <label for="2">2</label>
      <input type="radio" id="3" value="3" v-model="checkedNames">
      <label for="3">3</label>
      <br>
      <span> Record answer: {{ checkedNames }}</span>
  </div>

  <div>
    <h1> make a menu drop down</h1>
    <select v-model="dropdown">
    <option disabled value="">genre</option>
    <option>comedy</option>
    <option>horror</option>
    <option>romance</option>
    </select>
    <span>{{ selected }}</span>
  </div>

  <div>
    <button @click= 'visible = !visible'> Toggle </button>
    <transition name = "fade" appear>
      <div v-if="visible">
        Hello World
      </div>
      <div v-else>
        Goodbye World
      </div>
    </transition>
  </div>

    
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  components: {},
  data() {
    return {
      face: ":)",
      counter: 0,
      checkedNames: [],
      dropdown:{
        selected: ""
      },
      visible: true,

    };
  },
  methods: {
    popUp: function () {
      alert('you made a popup')
    },
    changeFace: function() {
      this.face = ":(";
    },

  }, 
  sort(){
    this.sortedgenders();
  },
};



</script>

<style lang="scss" scoped>
h1 {
  font-size: 2rem;
}
button {
  font-size: 1.5rem;
  padding: 1rem;
  margin: .5rem;
}
</style>


