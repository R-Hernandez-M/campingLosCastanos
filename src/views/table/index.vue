<style scoped src="@/styles/table.css">
</style>
<template>
  <div class="app-container" >
    <table class="tablaOcupados">
      <thead class="cabeza">
        <tr class="fila">
          <td>Nombre familia</td>
          <td>Rut</td>
          <td>Lugar de estadia</td>
          <td>Fecha de entrada</td>
          <td>Fecha de salida</td>
          <td>Telefono</td>
          <td>Correo</td>
      </tr>
      </thead>
      <tbody v-for="data in datalist" :key="data.id" class="cuerpo">
        <tr class="fila">
          <td>{{data.name}}</td>
          <td>{{data.rut}}</td>
          <td>{{data.region}}</td>
          <td>{{data.date1}}</td>
          <td>{{data.date2}}</td>
          <td>{{data.telefono}}</td>
          <td>{{data.correo}}</td>
        </tr>  
      </tbody>
    </table>
  </div>
</template>
<script>
// Import the functions you need from the SDKs you need

import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAneNKVU_fkCu8Fm6BRLYp_lAiJ2uqfRMo',
  authDomain: 'siloscastanos.firebaseapp.com',
  databaseURL: 'https://siloscastanos-default-rtdb.firebaseio.com',
  projectId: 'siloscastanos',
  storageBucket: 'siloscastanos.appspot.com',
  messagingSenderId: '715265181138',
  appId: '1:715265181138:web:e9273b1ee3f9c4eed5740b',
  measurementId: 'G-JBE9F4SV5K'
}
// Initialize Firebase
const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)
</script>
<script>
import axios from 'axios'
import { getList } from '@/api/table'

export default {
  filters: {
    statusFilter(status) {
      const statusMap = {
        published: 'success',
        draft: 'gray',
        deleted: 'danger'
      }
      return statusMap[status]
    }
  },
  data() {
    return {
      list: [],
      datalist: ''
    }
  },
  mounted(){
    this.show()
  },
  /*created() {
    this.fetchData()
  },*/
  methods: {
    show: function() {
      axios.get('https://siloscastanos-default-rtdb.firebaseio.com/reservas.json').then(response => {
        this.formatPostData(response.data)
      })
    },
    //aqui se ordena los datos para mostrarlo en la tabla
    formatPostData(posts){
      this.datalist = []
      console.log(posts)
      for (let key in posts) {
        this.datalist.push({... posts[key], id: key })
      }
      console.log(this.datalist)
    },
    /*fetchData() {
      this.listLoading = true
      getList().then(response => {
        this.list = response.data.items
        this.listLoading = false
      })
    }*/
  }
}
</script>
