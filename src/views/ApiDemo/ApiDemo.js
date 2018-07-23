export default {
    name: 'apiDemo',
    data () {
      return {
          userList: []
      }
    },
    methods: {
        loadPosts () {
            this.$loader.show()
            this.$DummyService.getUsers()
                .then(resp => {
                    this.$loader.hide()
                    this.userList = resp
                })
                .catch(err => {
                    this.$loader.hide()
                    console.log(err)
                })
        }
    }
}