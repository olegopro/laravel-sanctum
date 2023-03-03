<template>
    <main>
        <div class="container">
            <Navbar />
            <router-view />
        </div>
    </main>
</template>

<script>
    import Navbar from '../components/Navbar.vue'

    export default {
        components: { Navbar },
    }
</script>
