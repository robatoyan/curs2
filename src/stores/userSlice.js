import { ref, computed, reactive } from 'vue'
import { defineStore } from 'pinia'
import { useRoute, useRouter } from "vue-router"

export const userSlice = defineStore('user', () => {
  const route = useRoute()
  const router = useRouter()
  const arr = ref([
    { id: 1, group: "G1", name: "Artur", surname: "Hakobyan", age: 23, chk: false },
    { id: 2, group: "G2", name: "Grigor", surname: "Meliqyan", age: 21, chk: false },
    { id: 3, group: "G3", name: "Mesrop", surname: "Grigoryan", age: 20, chk: false },
    { id: 4, group: "G4", name: "Vardan", surname: "Vardanyan", age: 22, chk: false }
  ])
  const clone = ref([...arr.value])
  const str = ref([])
  const nameUser = ref('')

  const deletUser = (id) => {
    clone.value = clone.value.filter((e) => e.id != id)
  }
  const obj = reactive({
    group: '',
    name: '',
    surname: '',
    age: ''
  })

  const filterGroup = (group) => {
    clone.value = arr.value.filter((e) => e.group == group || group == "All")
  }

  const filterName = () => {
    clone.value = arr.value.filter((e) => e.name.includes(nameUser.value))
  }

  const userObj = computed(() => {
    return clone.value.find((e) => e.id == route.params.id)
  })

  const addUser = () => {
    clone.value.push({
      id: Date.now(),
      group: obj.group,
      name: obj.name,
      surname: obj.surname,
      age: obj.age,
      chk: false
    })
    router.push('/')
  }
  const apply = (id) => {
    str.value.push(clone.value.find((e) => e.id != id))
  }

  return { clone, arr, deletUser, filterGroup, filterName, nameUser, userObj, addUser, obj, apply, str }
})
