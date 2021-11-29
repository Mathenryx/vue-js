import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    files:[
      {
        "name": "image",
        "issueDate": "01/01/2021",
        "favorite": true
      },
      {
        "name": "Document",
        "issueDate": "01/05/2021",
        "favorite": true
      },
      {
        "name": "image 2",
        "issueDate": "01/07/2021",
        "favorite": true
      },
      {
        "name": "Dog",
        "issueDate": "01/09/2021",
        "favorite": true
      },
      {
        "name": "Cat image",
        "issueDate": "02/09/2021",
        "favorite": true
      },
      {
        "name": "Curriculum",
        "issueDate": "11/09/2021",
        "favorite": true
      },
      {
        "name": "Beach",
        "issueDate": "20/01/2021",
        "favorite": true
      },
      {
        "name": "Mountain",
        "issueDate": "28/01/2021",
        "favorite": true
      },
    ]
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
