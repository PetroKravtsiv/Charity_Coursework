import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: () => import("@/views/Home"),
    meta: { title: "#ДОПОМОГАПОРУЧ" },
  },
  {
    path: "/register",
    component: () => import("@/views/Register"),
    meta: { title: "Регістрація" },
  },
  {
    path: "/auth",
    component: () => import("@/views/Auth"),
    meta: { title: "Увійти" },
  },
  {
    path: "/aboutme",
    component: () => import("@/views/AboutMeForm"),
    meta: { title: "Про мене" },
  },
  {
    path: "/success",
    component: () => import("@/views/SuccessPage"),
    meta: { title: "Успішно" },
  },
  {
    path: "/tickets",
    component: () => import("@/views/TicketsPage"),
    meta: { title: "Листи" },
  },
  {
    path: "/details",
    component: () => import("@/views/DetailsPage"),
    meta: { title: "Про нас" },
  },
];

const router = createRouter({
  history: createWebHistory("/"),
  routes,
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  next();
});

export default router;
