import {mapState} from 'vuex'

export default {
    name: 'modal',
    computed: {
        ...mapState('ui', [
            'activeModalComponent',
            'activeModalProps',
            'modalVisible'
        ])
    }
}