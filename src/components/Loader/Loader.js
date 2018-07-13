import {mapState} from 'vuex'

export default {
    name: 'loader',
    computed: {
        ...mapState('ui', [
            'loaderVisible'
        ])
    }
}