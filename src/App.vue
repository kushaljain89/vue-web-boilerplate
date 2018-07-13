<template>
    <div id="app">
        <router-view/>
        <Modal></Modal>
        <Loader></Loader>
    </div>
</template>

<script>
    import Modal from './components/Modal/Modal.vue'
    import Loader from './components/Loader/Loader.vue'

    export default {
        name: 'app',
        components: {
            Modal,
            Loader
        }
    }
</script>

<style></style>
