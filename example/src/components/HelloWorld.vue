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
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'HelloWorld',
  data () {
    return {
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
      data.append('username', 'dubinbin')
      data.append('pwd', '6653145')
      axios.post('http://localhost:9000/auth/register', data).then((res) => {
        console.log(res)
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
