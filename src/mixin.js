import Vue from 'vue'

Vue.mixin({
    created() {
        this.$modal = {
            show: (payload) => this.$store.dispatch('ui/openModal', payload),
            hide: () => this.$store.dispatch('ui/closeModal')
        };
        this.$loader = {
            show: () => this.$store.dispatch('ui/showLoader'),
            hide: () => this.$store.dispatch('ui/hideLoader')
        };
    }
})