import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    files:[
      {
        "name": "image",
        "description": "new image",
        "issueDate": "01/01/2021",
        "favorite": true
      },
      {
        "name": "Document",
        "description": "new Document",
        "issueDate": "01/05/2021",
        "favorite": true
      },
      {
        "name": "image 2",
        "description": "old image",
        "issueDate": "01/07/2021",
        "favorite": true
      },
      {
        "name": "Dog",
        "description": "Dog image",
        "issueDate": "01/09/2021",
        "favorite": true
      },
      {
        "name": "Cat image",
        "description": "Cat image",
        "issueDate": "02/09/2021",
        "favorite": true
      },
      {
        "name": "Curriculum",
        "description": "Updated Curriculum",
        "issueDate": "11/09/2021",
        "favorite": true
      },
      {
        "name": "Beach",
        "description": "Beach background",
        "issueDate": "20/01/2021",
        "favorite": true
      },
      {
        "name": "Mountain",
        "description": "Mountain background",
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
