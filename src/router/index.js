import { createRouter, createWebHistory } from "vue-router";
import LoginPage from "../views/LoginPage.vue";
import DashboardLayout from "../layouts/DashboardLayout.vue";
import PortfolioPage from "../views/PortfolioPage.vue";
import ProfilePage from "../views/ProfilePage.vue";
import ContactPage from "../views/ContactPage.vue";
import CreativePage from "../views/CreativePage.vue";

const routes = [
  { path: "/", name: "Login", component: LoginPage },
  {
    path: "/home", // Changed path from /dashboard to /home
    component: DashboardLayout, 
    children: [
      // Add your child routes if needed
    ],
  },
  { path: "/profile", name: "Profile", component: ProfilePage },
  { path: "/portfolio", name: "Portfolio", component: PortfolioPage },
  { path: "/contact", name: "Contact", component: ContactPage },
  { path: "/creative", name: "Creative", component: CreativePage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
