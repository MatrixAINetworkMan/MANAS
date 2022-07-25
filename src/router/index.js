import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/pages/Layout/Layout'
import AIApplication from '@/pages/AIApplication/AIApplication'

import Medical from '@/components/Medical/Medical'
import DistributedStorage2 from '@/components/DistributedStorage/DistributedStorage2'
import DistributedStorage3 from '@/components/DistributedStorage/DistributedStorage3'
import AIRecord from '@/pages/AIApplication/AIRecord'


Vue.use(Router)

let router = new Router({
  routes: [{
    path: '/',
    name: 'layout',
    component: Layout,
    redirect: '/ai-application/medical',
    children: [{
      path: '/ai-application',
      name: 'AIApplication',
      component: AIApplication,
      children: [{
        path: 'medical',
        name: 'Medical',
        component: Medical
      }, {
        path: 'distributedStorage',
        name: 'DistributedStorage',
        component: DistributedStorage2
      }, {
        path: 'distributedStorage3',
        name: 'DistributedStorage3',
        component: DistributedStorage3
      }, {
        path: 'aiRecord',
        name: 'AIRecord',
        component: AIRecord
      }]
    }]
  }]
})

//
router.beforeEach((to, from, next) => {
  store.commit('UPDATE_HISTORYURL', to.path)
 next();
})

export default router
