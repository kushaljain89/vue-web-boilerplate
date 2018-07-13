<template>
    <div id="app">
        <img src="./assets/logo.png">
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

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
