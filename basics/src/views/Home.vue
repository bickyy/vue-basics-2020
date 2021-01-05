<template>
  <div class="container">
    <div>
           <tr>
                <th>Country</th>
                <th>Capital</th>
                <th>Population</th>
            </tr>
            <tr v-for="country in countries_list" :key="country">
                 <td>
                    <img v-bind:src="country.flag" alt="Flag" height="26" width="42">
                    {{country.name}}
                </td>
                <td>{{country.capital}}</td>
                <td>{{country.population}}</td>
            </tr>

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

      countries_list:[],
    };
  },
  mounted() {
    const axios = require('axios');
        axios
            .get('https://restcountries.eu/rest/v2/region/americas?fields=name;capital;flag;population')
            .then(response => (
                this.countries_list = response.data
                ))
            .catch(error =>(
                console.log(error)
                ));
  },
  beforeCreate() {},
};
</script>

<style lang="scss" scoped>

table,
        th,
        td {
            border: 1px solid #cccccc;
            border-collapse: collapse;
        }

</style>
