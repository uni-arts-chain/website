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
    {
        name: "",
        path: "/faq",
        component: () =>
            import(/* webpackChunkName: "news" */ "@/views/Announcement/Index"),
    },
    {
        name: "",
        path: "/faq/:id",
        component: () =>
            import(
                /* webpackChunkName: "news" */ "@/views/Announcement/Detail"
            ),
    },
]

export default routes
