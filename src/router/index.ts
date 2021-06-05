import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Content from '../views/Content.vue'
import ContentSection from '@/components/content/ContentSection.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: '',
    component: Content,
    children: [
      {
        path: '',
        component: ContentSection
      }
    ]
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
