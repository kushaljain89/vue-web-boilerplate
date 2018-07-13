export default {
    openModal(state, payload) {
        state.modalVisible = true;
        state.activeModalComponent = payload.component;
        state.activeModalProps = payload.props;
    },
    closeModal(state) {
        state.modalVisible = false;
        state.activeModalComponent = null;
        state.activeModalProps = {};
    },
    showLoader(state) {
        state.loaderVisible = true
    },
    hideLoader(state) {
        state.loaderVisible = false
    }
}