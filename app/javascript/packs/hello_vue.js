import Vue from 'vue/dist/vue.esm'
import App from '../app.vue'
import axios from './axios'
import qs from 'qs'

var save = new Vue({
  data: {a: 0},
  created: function() {
    setInterval(() => { this.a-- }, 5000)
  },
  watch: {
    a: function(c) {
      if (c <= 0) {
        axios.put('/memo/1',{
          title: document.querySelector("[v-model='title']").value,
          text:  document.querySelector("[v-model='text']").value
        })  
      }
    }
  }
})