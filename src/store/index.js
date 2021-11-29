import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    files:[
      {
        "name": "Bloco de anotações",
        "description": "Anotações sobre sites e senhas",
        "issueDate": "01/01/2021",
        "favorite": true
      },
      {
        "name": "AF2",
        "description": "AF para entregar",
        "issueDate": "01/05/2021",
        "favorite": true
      },
      {
        "name": "image 2",
        "description": "old image",
        "issueDate": "01/07/2021",
        "favorite": false
      },
      {
        "name": "Dog",
        "description": "Dog image",
        "issueDate": "01/09/2021",
        "favorite": false
      },
      {
        "name": "Cat image",
        "description": "Cat image",
        "issueDate": "02/09/2021",
        "favorite": false
      },
      {
        "name": "Curriculum",
        "description": "Curriculum atualizado de 2021",
        "issueDate": "11/09/2021",
        "favorite": true
      },
      {
        "name": "Beach",
        "description": "Beach background",
        "issueDate": "20/09/2021",
        "favorite": false
      },
      {
        "name": "Mountain",
        "description": "Mountain background",
        "issueDate": "28/09/2021",
        "favorite": false
      },
      {
        "name": "Ilha",
        "description": "Foto na ilha",
        "issueDate": "12/01/2021",
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
