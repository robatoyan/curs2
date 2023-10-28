import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const userSlice = defineStore('user', () => {
  const arr = ref([
    { id: 1, group: "G1", name: "Artur", surname: "Hakobyan", age: 23 },
    { id: 2, group: "G2", name: "Grigor", surname: "Meliqyan", age: 21 },
    { id: 3, group: "G3", name: "Mesrop", surname: "Grigoryan", age: 20 },
    { id: 4, group: "G4", name: "Vardan", surname: "Vardanyan", age: 22 }
  ])
  const clone = ref([...arr.value])
  const nameUser = ref('')

  const deletUser = (id) => {
    clone.value = clone.value.filter((e) => e.id != id)
  }

  const filterGroup = (group) => {
    clone.value = arr.value.filter((e) => e.group == group || group == "All")
  }

  const filterName = () => {
    clone.value = arr.value.filter((e) => e.name.includes(nameUser.value))
  }

  return { clone, arr, deletUser, filterGroup, filterName, nameUser }
})
