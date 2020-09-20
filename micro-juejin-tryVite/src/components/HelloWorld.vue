<template>
  <h1>{{ msg }}</h1>
  <button @click="count++">count is: {{ count }}</button>
  <p>Edit <code>components/HelloWorld.vue</code> to test hot module replacement.</p>
  <hr>
  <h2>PeopleList</h2>
  <button @click="fetchPeopleList">CLICK ME ！！！</button>
  <Loading v-if="loading || isEmpty" :msg="loadingMsg"></Loading>
    <div
        v-for="people in peopleList"
        :key="people.id"
        style="border-bottom: 1px dashed gray;"
    >
      <p>id: {{ people.id }}</p>
      <p>name: {{ people.name }}</p>
      <p>birth: {{ people.birth}}</p>
      <p>address: {{ people.address }}</p>
      <p>constellation: {{ people.constellation }}</p>
    </div>
</template>

<script>
import Loading from '../components/Loading.vue'
import {ref,computed} from "vue"
import usePeopleList from "../composables/usePeopleList";

export default {
  components:{
    Loading
  },
  setup() {
    const {
      loading,
      peopleList,
      isEmpty,
      loadingMsg,
      fetchPeopleList
    } = usePeopleList()


    return {
      ...usePeopleList()
    }
  },

  name: 'HelloWorld',
  created() {
    // this.fetchPeopleList()
  },
  props: {
    msg: String
  },
  data() {
    return {
      count: 0
    }
  }
}
</script>
