<script setup>
import { userSlice } from "../stores/userSlice"
const userData = userSlice()
</script>

<template>
    <h2>Apply</h2>
    <div v-for="item in userData.str">
        <h2>{{ item.group }}</h2>
        <h2>{{ item.name }}</h2>
        <h2>{{ item.surname }}</h2>
    </div>
</template>

<style></style>