import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Users from '../views/Users.vue';
import Locations from '../views/Locations.vue';
import TurnTemplates from '../views/TurnTemplates.vue';
import Calendar from '../views/Calendar.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/users',
    name: 'Users',
    component: Users,
  },
  {
    path: '/locations',
    name: 'Locations',
    component: Locations,
  },
  {
    path: '/templates',
    name: 'TurnTemplates',
    component: TurnTemplates,
  },
  {
    path: '/calendar',
    name: 'Calendar',
    component: Calendar,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
