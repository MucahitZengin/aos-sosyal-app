<template>
  <div class="container">
    <div class="row" v-if="gonderiler.length !== 0">
      <div class="col-sm-6 mb-3" v-for="g in gonderiler" :key="g.id">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">{{g.gonderi}}</h5>
            <p class="card-text">{{g.gKullaniciAd}}</p>
            <a href="" class="btn btn-primary">incele</a>
          </div>
          <div class="card-footer text-muted text-center">
            {{g.tarih}}
          </div>
        </div>
      </div>
    </div>
    <div class="row" v-if="gonderiler.length == 0">
      <div class="col-sm-6 mb-3">
        <p class="h3">Henüz gönderi eklenmedi</p>
      </div>
    </div>
  </div>
</template>

<script>

import { db } from '../firebase/config'
import { collection, onSnapshot } from 'firebase/firestore';
import { ref } from 'vue';
import moment from 'moment';

export default {
  name: 'HomeView',
  setup() {
    moment.locale('tr')
    const gonderiler = ref([])

    onSnapshot(collection(db, "gonderiler"), (snap) => {
      // console.log(snap.docs);
      snap.docs.forEach(doc => {
        gonderiler.value.push({ ...doc.data(), id: doc.id, tarih:moment(doc.data().tarih.toDate()).fromNow() })
      })
    })
    return { gonderiler }

  }

}
</script>

<style scoped>
    .container{
        max-width: 600px;
        padding-top: 50px;
    }
</style>