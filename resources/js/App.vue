<template>
    <component :is="layout" />
</template>

<script>
    import MainLayout from './layouts/MainLayout.vue'
    import { computed } from 'vue'

    export default {
        components: {
            MainLayout
        },

        data() {
            return {
                token: null
            }
        },

        provide() {
            return {
                token: computed(() => this.token)
            }
        },

        created() {
            this.getToken()
        },

        updated() {
            this.getToken()
        },

        methods: {
            getToken() {
                this.token = localStorage.getItem('x_xsrf_token')
            }
        },

        computed: {
            layout() {
                return this.$route.meta.layout + '-layout'
            }
        }
    }
</script>
