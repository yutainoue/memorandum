import Vue from 'vue/dist/vue.esm'
import App from '../app.vue'
import axios from './axios'
import _ from 'lodash'
import marked from 'marked'
import qs from 'qs'



var save = new Vue({
  data: {
    a: 0
  },
  created: function() {
    setInterval(() => { this.a-- }, 5000)
  },
  watch: {
    a: function(c) {
      if (c <= 0) {
        axios.put('/memo/1',{
          title: document.querySelector(".title>textarea").value,
          text:  document.querySelector(".text>textarea").value
        })  
      }
    }
  }
})

var text = new Vue({
  el: '.text',
  data: {
    input: document.querySelector(".text>textarea").value
  },
  computed: {
    markdownText: function () {
      return marked(this.input)
    }
  },
  methods: {
    update: function (e) {
      this.input = e.target.value
    }
  }
})

var title = new Vue({
  el: '.title',
  data: {
    title: document.querySelector(".title>textarea").value
  }
})