import { Projects, Sprints } from '@/pages';
import * as VueRouter from 'vue-router';
import { Paths } from './paths';

const routes = [
  { path: Paths.INDEX, component: Projects },
  { path: Paths.SPRINTS, component: Sprints },
];

const router = VueRouter.createRouter({
  history: VueRouter.createWebHistory(),
  routes
});

export { router };