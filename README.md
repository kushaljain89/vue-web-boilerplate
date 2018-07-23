# Vue JS Boilerplate for Web Apps

Vue JS boilerplate for web apps.

####Dependencies 

- **VueX :** [Vuex](https://vuex.vuejs.org/) is a state management pattern + library for Vue.js applications. It serves as a centralized store for all the components in an application, with rules ensuring that the state can only be mutated in a predictable fashion.

- **Vue Router :** [Vue Router](https://router.vuejs.org/) is the official router for Vue.js. It deeply integrates with Vue.js core to make building Single Page Applications with Vue.js a breeze.

###Features 

- **Common Modal and Loader for the app :** The app has a common modal and loader which is integrated with the store. A mixin is created to simplify the hide/show of both loader and modal. Modal can be accessed by using `this.$modal.show({ component: '<Component Name>', props: {...Props to be passed} })`, `this.$modal.hide()` and loader by using `this.$loader.show()`, `this.$loader.hide()`. The components which need to be opened in modal have to be imported globally in components.js file and the props can be found in `this.modalProps` for the component.

- **Service Plugin :** Services are basically for getting data using api  calls. A service plugin is used to inject the services globally so that there is no need to import it every time. For example in the boilerplate, `this.$DummyService` is accessible everywhere in the app. To include more services just import them inside plugins.js and add them to the prototype in the install function of the ServicePlugin.

