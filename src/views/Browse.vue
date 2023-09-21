<template>
    <h2>İncele</h2>
</template>

<script>
import { useRoute } from 'vue-router';
export default{
    setup(){
        const route= useRoute();
        console.log(route.params.id);
    }
} 
</script>