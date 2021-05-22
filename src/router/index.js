import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/caixas',
    name: 'Dashboard',
    component: () => import('../views/Dashboard.vue'),
    children: [
      {
        path: "/caixas",
        name: "ListaCaixas",
        component: () => import("../views/ListaCaixas.vue"),
        meta: {
          requiresAuth: false
        }
      },
      {
        path: "/caixa",
        name: "Caixa",
        component: () => import("../views/Caixa.vue"),
        meta: {
          requiresAuth: false
        }
      },
      {
        path: "/caixa/:caixaId/aberto",
        name: "Caixa Aberto",
        component: () => import("../views/CaixaAberto.vue"),
        meta: {
          requiresAuth: false
        }
      },
      {
        path: "/caixa/:caixaId/fechamento",
        name: "Fechamento",
        component: () => import("../views/CaixaFechamento.vue"),
        meta: {
          requiresAuth: false
        }
      },
      {
        path: "/fornecedor",
        name: "Fornecedor",
        component: () => import("../views/Fornecedor.vue"),
        meta: {
          requiresAuth: false
        }
      },
      {
        path: "/fornecedor/criar",
        name: "Novo Fornecedor",
        component: () => import("../views/FornecedorNovo.vue"),
        meta: {
          requiresAuth: false
        }
      },
      {
        path: "/nota-fiscal",
        name: "Nota Fiscal",
        component: () => import("../views/NotaFiscal.vue"),
        meta: {
          requiresAuth: false
        }
      },
      {
        path: "/nota-fiscal/criar",
        name: "Nova Nota Fiscal",
        component: () => import("../views/NotaFiscalNovo.vue"),
        meta: {
          requiresAuth: false
        }
      },
      {
        path: "/equipe",
        name: "Equipe",
        component: () => import("../views/Equipe.vue"),
        meta: {
          requiresAuth: false
        }
      },
    ]
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/Login.vue"),
    meta: {
      requiresAuth: false
    }
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (localStorage.getItem('key') === null) {
      next({
        path: '/login',
        params: { nextUrl: to.fullPath }
      });
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router
