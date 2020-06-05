require("./bootstrap");

window.Vue = require("Vue");

Vue.component("app", require("./components/AppComponent.vue"));
Vue.component("post", require("./components/PostsComponent.vue"));
Vue.component("InfinitiLoading", require("vue-infinite-loading.vue"));

import router from "./routes.js";

const app = new Vue({
    el: "#app",
    router,
});
