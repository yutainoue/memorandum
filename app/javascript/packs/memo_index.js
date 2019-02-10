import Vue from 'vue/dist/vue.esm'
import App from '../app.vue'
import axios from './axios'
import _ from 'lodash'
import marked from 'marked'
import qs from 'qs'

var app5 = new Vue({
  el: '.preview',
  data: {
    msg: '# msg'
  },
  computed: {
    markdownText: function () {
      return marked(this.msg)
    }
  },
  methods: {
    preview: function (memo_text) {
      this.msg = memo_text
    }
  }
})

//debugger

//this.$el.id






