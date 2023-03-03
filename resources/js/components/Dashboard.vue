<template>
    <h1>Dashboard</h1>
</template>

<script>
    export default {
        mounted() {
            this.getData()
        },

        methods:{
            getData(){
                axios.get('/api/dashboard')
                    .then(response => console.log(response))
            }
        }
    }
</script>

<style scoped lang="scss">

</style>
