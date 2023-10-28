<script setup>
import { userSlice } from "../stores/userSlice"

const userData = userSlice()

</script>

<template>
    <h2>AddUser</h2>
    <form v-on:submit.prevent="userData.addUser">
        <input v-model="userData.obj.group" placeholder="Group" />
        <input v-model="userData.obj.name" placeholder="Name" />
        <input v-model="userData.obj.surname" placeholder="Surname" />
        <input v-model="userData.obj.age" placeholder="age" />
        <button>AddUser</button>
    </form>
</template>

<style></style>