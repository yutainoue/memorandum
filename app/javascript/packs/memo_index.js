import Vue from 'vue/dist/vue.esm'
import App from '../app.vue'
import axios from './axios'
import _ from 'lodash'
import marked from 'marked'
import qs from 'qs'

var app5 = new Vue({
  el: '.preview',
  data: {
    msg: document.getElementById(0).value
  },
  computed: {
    markdownText: function () {
      return marked(this.msg)
    }
  },
  methods: {
    preview: function (id) {
      this.msg = document.getElementById(id).value
    }
  }
})

//問題
//  更新日付を自動更新したい





