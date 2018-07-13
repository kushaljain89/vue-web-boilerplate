export default {
    name: 'home',
    methods: {
        showLoader() {
            this.$loader.show();
            setTimeout(() => this.$loader.hide(), 2000);
        },
        openModal() {
            this.$modal.show({
                component: 'HelloWorld',
                props: {
                    msg: 'Hello World'
                }
            });
        }
    }
}