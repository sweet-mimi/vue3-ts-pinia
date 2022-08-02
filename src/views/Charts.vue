<template>
    <div>
        <ul>
            <li v-for="item in list" :key="item.id">{{item.info.name}}</li>
            <!-- <li v-for="item in store.list" :key="item.id">{{item.info.name}}</li> -->
        </ul>
    </div>
</template>

<script setup lang="ts">
import {useInfoStore} from '../stores'
import { onMounted } from 'vue'
import { storeToRefs } from 'pinia'
const store = useInfoStore()

const {list} = storeToRefs(store)

onMounted(async () => {
    await store.getList()
    
    // console.log(store.$state);
})


</script>

<style scoped>

</style>