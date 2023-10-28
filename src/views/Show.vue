<script setup>
import { userSlice } from "../stores/userSlice"
import { useRouter } from "vue-router";
const userData = userSlice()
const router = useRouter()
</script>

<template>
    <div class="Show">
        <h2>Show</h2>
        <ul>
            <li @click="userData.filterGroup('All')">All</li>
            <li @click="userData.filterGroup('G1')">G1</li>
            <li @click="userData.filterGroup('G2')">G2</li>
            <li @click="userData.filterGroup('G3')">G3</li>
        </ul>
        <div><input v-model="userData.nameUser" /><button @click="userData.filterName()">Search</button></div>
        <div class="ShowData">
            <div v-for="item in userData.clone" :key="item.id">
                <h1>{{ item.group }}</h1>
                <h2>{{ item.name }}</h2>
                <h2>{{ item.surname }}</h2>
                <h2>{{ item.age }}</h2>
                <button @click="router.push('/See/' + item.id)">See</button>
                <button @click="userData.apply(item.id)">Apply</button>
                <button @click="userData.deletUser(item.id)">Delete</button>
            </div>
        </div>
    </div>
</template>

<style>
.Show {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    row-gap: 30px;
}

.ShowData {
    display: flex;
    justify-content: center;
    align-items: center;
    column-gap: 30px;
}

.ShowData div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    row-gap: 5px;
    border: 3px solid black;
    padding: 30px;
}
</style>