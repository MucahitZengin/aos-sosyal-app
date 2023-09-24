<template>
    <div class="container my-5">
        <div class="row">
            <div class="alert alert-primary text-center" role="alert">
                <h2>AOS Sosyal</h2>
            </div>
        </div>
        <div class="row">
            <div class="col-sm-8 mb-3">
                <div class="card">
                    <div class="card-header text-end">Tarih</div>
                    <div class="card-body text-center">
                        <h5 class="card-title">Gönderi</h5>
                        <p class="card-text">Kullanıcı Ad</p>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item d-flex justify-content-between align-items-start">
                            <div class="ms-2 me-auto">
                                <div class="fw-bold">yorum 1</div>
                            </div>
                            <span class="badge bg-primary mx-2">kullanıcı ad</span>
                        </li>
                        <li class="list-group-item d-flex justify-content-between align-items-start">
                            <div class="ms-2 me-auto">
                                <div class="fw-bold">yorum 2</div>
                            </div>
                            <span class="badge bg-primary mx-2">kullanıcı ad</span>
                        </li>
                    </ul>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">Henüz yorum yapılmadı</li>
                    </ul>
                </div>
            </div>

            <div class="col-sm-4" v-show="kullanici">
                <form action="">
                    <div class="mb-3">
                        <div id="yorumBaslik" class="form-text">Gönderiye Yorum Yapabilirsiniz</div>
                        <label for="yorum" class="form-label">Yorumunuz</label>
                        <input type="email" class="form-control" id="yorum" aria-describedby="yarumBaslik">
                    </div>
                    <button type="submit" class="btn btn-outline-primary">Yorum Yap</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import { useRoute } from 'vue-router';
import getUser from '../composables/getUser'

export default {
    setup() {
        const route = useRoute();
        const {kullanici}=getUser();

        //console.log(route.params.id);

        return{kullanici}
    }
} 
</script>