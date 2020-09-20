import {ref,computed} from "vue"

export default function() {
    const loading = ref(false)
    const peopleList = ref([])
    const isEmpty = computed(()=>peopleList.value.length === 0)
    const loadingMsg = computed(()=>isEmpty.value&&!loading.value? 'EMPTY':'LOADING')

    const fetchPeopleList = async () => {
        loading.value = true
        const res = await fetch('/api/micro-juejin-tryVite/people/list').then(res => res.json())
        peopleList.value = res.data.list
        loading.value = false
    }

    return {
        loading,
        peopleList,
        isEmpty,
        loadingMsg,
        fetchPeopleList,
    }
}