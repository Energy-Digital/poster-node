<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <button @click="register">TEST Register</button>


    <div>
      用户名：<input type="text" v-model="username">
      密码：<input type="text" v-model="psw">

      <button @click="login">login test</button>
    </div>


    <button @click="accessToken">accessToken test</button>


    <button @click="testOtherApi">测试其他需要鉴权的接口</button>

    <div v-for="(item) in list" :key="item.id">
        <p>{{item.title}}</p>
        <img :src="item.avatar" alt="">
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import Request from '../utils'
export default {
  name: 'HelloWorld',
  data () {
    return {
      list: [],
      username: '',
      psw: '',
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    login() {
      const data = {
        username: this.username,
        psw: this.psw
      }
      axios.get('http://localhost:9000/auth/login', {params: data}).then((res) => {
        console.log(res)
      })
    },
    accessToken() {
      axios.get('http://localhost:9000/auth/access_token').then((res) => {
        console.log(res)
      })
    },
    register() {
      const data = new FormData()
      data.append('username', 'hahaha')
      data.append('pwd', '6653145')
      axios.post('http://localhost:9000/auth/register', data).then((res) => {
        console.log(res)
      })
    },
    testOtherApi() {
      Request.$get('/blog/info', {}).then((res) => {
         if (res.data.code === 0) {
           this.list = res.data.data.data.list
         }
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
