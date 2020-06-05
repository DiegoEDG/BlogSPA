import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: "/",
            name: "home",
            component: require("./views/home"),
        },
        {
            path: "/blog",
            name: "blog",
            component: require("./views/blog"),
        },
        {
            path: ":body",
            name: "post",
            component: require("./views/post"),
            props: true,
        },
        {
            path: "*",
            component: require("./views/404"),
        },
    ],
    mode: "history",
    scrollBehavior() {
        return { x: 0, y: 0 };
    },
});
