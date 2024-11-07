import {createRouter, createWebHistory} from 'vue-router';

const router = createRouter({
      history: createWebHistory(),
      routes: [
        {
          component: () => import('app/components/AppView.vue'),
          path: '/app',
          children: [
            {
              path: '',
              name: 'app_home',
              component: () => import('app/views/HomeView.vue')
            },
            {
              path: 'login',
              name: 'app_login',
              component: () => import('app/views/LoginView.vue')
            },
            {
              path: '/:pathMatch(.*)*',
              name: 'app_path_not_found',
              component: () => import('app/views/404NotFoundView.vue'),
            },
          ]
        },
        {
          path: '/',
          redirect: '/app'
        }
      ]
    }
);

export default router;
