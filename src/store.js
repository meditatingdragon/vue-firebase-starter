import Vue from 'vue'
import Vuex from 'vuex'
import { vuexfireMutations, firestoreAction } from 'vuexfire'
import { db , Timestamp } from './db'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    collectionName: {}
  },
  getters: {},
  mutations: {
    ...vuexfireMutations,
  },
  actions: {
    bindResponseRef: firestoreAction( (context, docId) => {
      return context.bindFirestoreRef('collectionName', db.collection('collectionName').doc(docId))
      .then( () => {
        //do something else
      })
    }),
  }
})