const routes = [
    {
        name: "root",
        path: "/",
        component: () =>
            import(/* webpackChunkName: "home" */ "@/views/Home/Index"),
    },
    {
        name: "",
        path: "/products",
        component: () =>
            import(/* webpackChunkName: "products" */ "@/views/Products/Index"),
    },
]

export default routes
