import {getRequest} from "./index";

export const DummyService = {
    getUsers() {
        return getRequest('https://jsonplaceholder.typicode.com/users')
    }
};