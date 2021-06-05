import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './assets/tailwind.css';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  data: {
    Userid: '',
    UserFirstName: '',
    UserLastName: '',
    Cargos: [],
    Sucursal: '',
  },
  methods: {
    btnEditar: async function () {},
    btnBorrar: function () {},
  },
  created: function () {},
  computed: {},
  render: (h) => h(App),
}).$mount('#app');
