const routes = [
    {
        name: "root",
        path: "/",
        component: () =>
            import(/* webpackChunkName: "home" */ "@/views/Home/Index"),
    },
]

export default routes
