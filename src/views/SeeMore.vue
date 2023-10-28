<script setup>
import { userSlice } from "../stores/userSlice"
const userData = userSlice()

</script>

<template>
    <h2>SeeMore</h2>
    <h2>{{ userData.userObj.group }}</h2>
    <h2>{{ userData.userObj.name }}</h2>
    <h2>{{ userData.userObj.surname }}</h2>
</template>

<style></style>