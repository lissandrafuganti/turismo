import Vue from 'vue'
import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://btms.com.br/ws/wsbtms.php/'
})

Vue.prototype.$axios = instance
