<template>
    <div>
        <svg width="400" height="400">
            <use xlink:href="#robot"></use>
        </svg>
        <h1>В разработке</h1>
    </div>
</template>

<script>
    export default {
        mounted() {
            this.getData()
        },

        methods:{
            getData(){
                axios.get('/api/dashboard')
            }
        }
    }
</script>

<style scoped lang="scss">
    div {
        display: flex;
        height: 80vh;
        justify-content: center;
        align-items: center;
        flex-direction: column;

    }
</style>
