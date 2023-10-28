<script setup>
</script>

<template>
    <div class="Show">
        <h2>Show</h2>
        <div class="ShowData">
            <div></div>
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
    row-gap: 30px;
    border: 3px solid black;
    padding: 30px;
}
</style>