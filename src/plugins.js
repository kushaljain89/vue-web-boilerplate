import {DummyService} from "./services/dummyService";

export const ServicePlugin = {
    install (Vue) {
        Vue.prototype.$DummyService = DummyService
    }
};
