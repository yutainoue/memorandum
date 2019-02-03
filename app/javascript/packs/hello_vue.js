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
          title: document.querySelector("[v-model='title']").value,
          text:  document.querySelector(".editor>textarea").value
        })  
      }
    }
  }
})

new Vue({
  el: '.editor',
  data: {
    input: document.querySelector(".editor>textarea").value
  },
  computed: {
    compiledMarkdown: function () {
      return marked(this.input)
    }
  },
  methods: {
    update: _.debounce(function (e) {
      this.input = e.target.value
    }, 300)
  }
})